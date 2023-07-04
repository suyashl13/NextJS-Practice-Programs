import mongoose from "mongoose";

const connect = () => {
  try {
    mongoose.connect(process.env["MONGO_URI"] as string);
    const connection = mongoose.connection;
    connection.on("connected", () => {
        console.log("Connected to database");
    });

    connection.on('error', (error) => {
        console.log('Could not connect to database.');
        console.error(error);
        process.exit();
    })
  } catch (error) {
    console.error(error);
  }
};


export {connect};