const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");

async function signup(data) {
    const existingUser = await User.findOne({ username: data.username });
    if (existingUser) {
        throw new Error("Email already taken");
    }
    const user = await User.create(data);
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    return { user, token };
}

async function signin(data) {
    const user = await User.findOne(data);
    if (!user) {
        throw new Error("Invalid username or password");
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    return token;
}

async function updateUser(userId, updateData) {
    await User.updateOne({ _id: userId }, { $set: updateData });
}

async function getFilteredUsers(filter) {
    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: "i" } },
            { lastName: { $regex: filter, $options: "i" } }
        ]
    });
    return users;
}

module.exports = { signup, signin, updateUser, getFilteredUsers };
