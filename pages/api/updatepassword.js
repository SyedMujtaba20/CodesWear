// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jsonwebtoken from "jsonwebtoken";
var cryptoJS = require("crypto-js");

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      let token = req.body.token;
      let user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
      let dbuser = await User.findOne({ email: user.email });
      const bytes = cryptoJS.AES.decrypt(
        dbuser.password,
        process.env.AES_SECRET
      );
      let decryptedPass = bytes.toString(cryptoJS.enc.Utf8);
      if (
        decryptedPass == req.body.password &&
        req.body.npassword == req.body.cpassword
      ) {
        let dbuseru = await User.findOneAndUpdate(
          { email: user.email },
          {
            password: cryptoJS.AES.encrypt(
              req.body.cpassword,
              process.env.AES_SECRET
            ).toString(),
          }
        );
        res.status(200).json({ success: true });
        return;
      }

      //   const { name, email, address, pincode, phone } = dbuser;
      res.status(200).json({ success: false });
    } else {
      res.status(400).json({ error: "error" });
    }
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);

// const connectDb = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState !== 1) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }
//   return handler(req, res);
// };

// export default connectDb;
