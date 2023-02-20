import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:9711462586@cluster0.lkycf90.mongodb.net/test");
    console.log(
      "`Conneted To Mongodb Databse"
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
