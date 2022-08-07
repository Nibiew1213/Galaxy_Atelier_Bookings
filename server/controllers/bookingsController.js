require('../models/database');
const Bookings = require('../models/Bookings');

/**
 * GET /
 * Homepage
 */
 exports.homepage = async(req, res) => {
    res.render('index', { title: 'Galaxy Atelier Bookings - Home'})
}

async function insertDummyBookingData(){
    try {
        await Bookings.insertMany([
            {
                "name": "Nibiew",
                "image": "car1.jpg"
            },
            {
                "name": "Hakim",
                "image": "car2.jpg"
            },
            {
                "name": "WeiYang",
                "image": "car3.jpg"
            },
            {
                "name": "Casper",
                "image": "car4.jpg"
            },
            {
                "name": "Sherlock",
                "image": "car5.jpg"
            },
            {
                "name": "Moses",
                "image": "car6.jpg"
            } 
        ])
    } catch (error) {
        console.log('err', + error)
    }
}

insertDummyBookingData();