import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
  },
  { timestamps: true }
);

console.log("ggghd");
console.log("Mongoose import:", mongoose);
console.log("kkkk");
console.log("Mongoose Schema:", ProductSchema);
console.log("ppp");
console.log("Mongoose Models:", mongoose.models);

// mongoose.model = {};
// export default mongoose.model("Product", ProductSchema);
// Check if the model already exists, and if not, define it
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);

// export default Product;
// const Product = mongoose.models("Product", ProductSchema);
// module.exports = Product;
