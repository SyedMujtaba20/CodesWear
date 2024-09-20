import Forgot from "@/models/Forgot";
import User from "@/models/User";
import Link from "next/link";

export default async function handler(req, res) {
  if (req.body.sendMail) {
    let token = "";
    let forgot = new Forgot({ email: req.body.email, token: token });
    let email = `We have sent you this email in response to your request to reset your password on Codeswear.com.
To reset your password , please follow the link below:

                            <Link href="http://localhost:3000/forgot?token=${token}">Click here to reset your passweord</Link>

                            <br/><br/>

                            We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your  My Account Page and change your password.

                            <br/><br/>`;
  } else {
    //Reset User Password
  }
  res.status(200).json({ success: true });
}
