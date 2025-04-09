const zod = require("zod");
const userService = require("../services/userService");

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

async function signup(req, res) {
    const { success } = signupBody.safeParse(req.body);
    if (!success) return res.status(400).json({ message: "Invalid input" });

    try {
        const { token } = await userService.signup(req.body);
        res.status(201).json({ message: "User created successfully", token });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

async function signin(req, res) {
    const { success } = signinBody.safeParse(req.body);
    if (!success) return res.status(400).json({ message: "Invalid input" });

    try {
        const token = await userService.signin(req.body);
        res.json({ token });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}

async function update(req, res) {
    const { success } = updateBody.safeParse(req.body);
    if (!success) return res.status(400).json({ message: "Invalid input" });

    await userService.updateUser(req.userId, req.body);
    res.json({ message: "User updated successfully" });
}

async function getBulk(req, res) {
    const filter = req.query.filter || "";
    const users = await userService.getFilteredUsers(filter);
    res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
}

module.exports = { signup, signin, update, getBulk };
