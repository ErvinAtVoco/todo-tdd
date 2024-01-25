const mongoose = require("mongoose");

async function connect () {
    try {
        await mongoose.connect(
            "mongodb+srv://ervintombak:0MTJOEpkQwWA1Iei@cluster0.yynfjjn.mongodb.net/",
            { useNewUrlParser: true }
        );
    } catch (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
    }
}

module.exports = { connect };