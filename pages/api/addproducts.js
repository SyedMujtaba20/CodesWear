import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  console.log("Request method:", req.method);
  console.log("Request headers:", req.headers);
  console.log("Request body:", req.body); // Log the request body

  if (req.method === "POST") {
    try {
      console.log("Request body (inside POST):", req.body); // Log the request body inside the POST check
      for (let i = 0; i < req.body.length; i++) {
        let p = new Product({
          title: req.body[i].title,
          slug: req.body[i].slug,
          desc: req.body[i].desc,
          img: req.body[i].img,
          category: req.body[i].category,
          size: req.body[i].size,
          color: req.body[i].color,
          price: req.body[i].price,
          availableQty: req.body[i].availableQty,
        });
        await p.save();
      }
      res.status(200).json({ success: "success" });
    } catch (error) {
      console.error("Error saving products:", error);
      res.status(500).json({ error: "Failed to save products" });
    }
  } else {
    console.log("Invalid method");
    res.status(400).json({ error: "This method is not allowed." });
  }
};

export default connectDb(handler);

// import Product from "@/models/Product";
// import connectDb from "@/middleware/mongoose";

// const handler = async (req, res) => {
//   if (req.method == "POST") {
//     for (let i = 0; i < req.body.length; i++) {
//       let p = new Product({
//         title: req.body[i].title,
//         slug: req.body[i].slug,
//         desc: req.body[i].desc,
//         img: req.body[i].img,
//         category: req.body[i].category,
//         size: req.body[i].size,
//         color: req.body[i].color,
//         price: req.body[i].price,
//         availableQty: req.body[i].availableQty,
//       });
//       await p.save();
//     }

//     res.status(200).json({ success: "success" });
//   } else {
//     res.status(400).json({ error: "This method is not allowed." });
//   }
// };

// export default connectDb(handler);
