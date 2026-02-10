import dbConnect from "./lib/db.js";

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ ok: true, msg: "DB connected" });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
