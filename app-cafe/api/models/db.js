const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(
            // ambil drivers di mongodb.com
            "mongodb+srv://sandybelahartati2226240153_db_user:bela123@cluster0.i8cetnt.mongodb.net/?appName=Cluster0"
        );
        console.log("MongoDB connected.");
    } catch (error) {
        console.error("Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;