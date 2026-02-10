import dbConnect from "./lib/db.js";
import User from "./models/User.js";

export default async function handler(req, res) {
  await dbConnect();

  // CREATE USER
  if (req.method === "POST") {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({ ok: true, user });
    } catch (e) {
      return res.status(400).json({ ok: false, error: String(e) });
    }
  }

  // LIST USERS
  if (req.method === "GET") {
    const users = await User.find().sort({ createdAt: -1 }).limit(50);
    return res.status(200).json({ ok: true, users });
  }

  return res.status(405).json({ ok: false, error: "Method not allowed" });
}
