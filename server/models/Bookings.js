const mongoose = require('mongoose')

const bookingsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    phone: {
        type: String,
        required: 'This field is required.'
    },
    carModel: {
        type: String,
        required: 'This field is required.'
    },
    carPlate: {
        type: String,
        required: 'This field is required.'
    },
    bookingTime: {
        type: String,
        required: 'This field is required.'
    }
});

bookingsSchema.index({ name: 'text', description: 'text' })



module.exports = mongoose.model('Bookings', bookingsSchema)