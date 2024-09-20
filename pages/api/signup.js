import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Encrypt password
      const encryptedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.AES_SECRET
      ).toString();

      const newUser = new User({
        name,
        email,
        password: encryptedPassword,
      });
      await newUser.save();

      res.status(200).json({ success: "User created successfully" });
    } catch (error) {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      res
        .status(500)
        .json({ error: "Failed to save user", details: error.message });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed." });
  }
};

export default connectDb(handler);
