const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" }) // to connect config

//to connect mongodb using mongoose
mongoose.connect(process.env.CONN_STR)
    .then((conn) => {
        console.log("DB Connection Successfull");
    }).catch((err) => {
        console.log("some error has occured" + err);
    })

const smartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field!'],
        unique: true,
        trim: true
    },
    carno: {
        type: Number,
        required: [true, 'Car Number is required field'],
        unique: true
    },
    slotno: {
        type: Number,
        unique: true
    },
    expiryTime: {
        type: Date
    }
})


const Smart = mongoose.model("smart", smartSchema);

function removeExpiredBookings() {
    const currentTime = new Date();


    Smart.deleteMany({ expiryTime: { $lt: currentTime } })
        .then(result => {
            if (result.deletedCount > 0) {
                console.log(`${result.deletedCount} expired bookings removed.`);
            }
        })
        .catch(err => {
            console.error('Error while removing expired bookings:', err);
        });
}


setInterval(removeExpiredBookings, 60 * 1000);

module.exports = Smart;
