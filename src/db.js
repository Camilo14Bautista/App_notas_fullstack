import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1/merndb");
    console.log("Conexion exitosa a mongodb");
  } catch (error) {
    console.log(error);
  }
};
