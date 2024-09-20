import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  // console.log("MONGO_URI:", process.env.MONGO_URI);

  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
    return handler(req, res);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
};

export default connectDb;
