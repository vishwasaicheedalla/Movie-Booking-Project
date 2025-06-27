import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
    try {
        const { userId } = req.auth();
        const user = await clerkClient.users.getUser(userId);

        if (user.privateMetadata.role !== 'admin') {
            return res.json({ success: false, message: "Not Authorized, Admin Only" });
        }
        next();

    } catch (error) {
        return res.json({ success: false, message: "Not Authorized" });
    }
}