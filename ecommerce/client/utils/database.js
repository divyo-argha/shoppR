import mongoose from "mongoose";
export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://user:user123@cluster0.ggrzho9.mongodb.net/we-buy?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("error on connecting to DB");
  }
}
