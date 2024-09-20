import connectDb from "@/middleware/mongoose";
import User from "@/models/User";
var CryptoJS = require("crypto-js");

console.log("kkkkkkk");
const handler = async (req, res) => {
  console.log("nice");
  if (req.method === "POST") {
    console.log("heeeeellloo");
    try {
      console.log("hdufgfughfsdddd");
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        console.log("HHHHHHHHHHHHH");
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
      console.log("loooog");
      await newUser.save();
      console.log("loooog0000000");
      res.status(200).json({ success: "User created successfully" });
    } catch (error) {
      console.log("uuuuuuuu");
      console.error("Error saving user:", error);
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      res
        .status(500)
        .json({ error: "Failed to save user", details: error.message });
    }
  } else {
    // if (error) {
    console.log("okkkkay");
    res.status(400).json({ error: "This method is not allowed." });
  }
};

export default connectDb(handler);
