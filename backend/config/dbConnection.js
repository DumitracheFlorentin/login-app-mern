import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB is connected!!!".cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDatabase;
