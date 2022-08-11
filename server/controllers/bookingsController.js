require('../models/database');
const Category = require('../models/Category');
const Bookings = require('../models/Bookings');

/**
 * GET /
 * Homepage
 */
 exports.homepage = async(req, res) => {
    try {
        const limitNumber = 6
        const categories = await Category.find({}).limit(limitNumber)
        const latest = await Bookings.find({}).sort({_id: -1}).limit(limitNumber)

        const show = { latest }

        res.render('index', { title: 'Galaxy Atelier - Home', categories, show} )
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
}




/**
 * GET /submit-bookings
 * Submit Bookings
 */
 exports.submitBookings = async(req, res) => {
    const infoErrorsObj = req.flash('infoErrors')
    const infoSubmitObj = req.flash('infoSubmit')
    res.render('submit-bookings', { title: 'Galaxy Atelier - Submit Bookings', infoErrorsObj, infoSubmitObj} )

}

/**
 * POST /submit-bookings
 * Submit Bookings
 */
 exports.submitBookingsOnPost = async(req, res) => {

    try {

        const newBooking = new Bookings({
            name: req.body.name,
            phone: req.body.phone,
            carModel: req.body.carModel,
            carPlate: req.body.carPlate,
            bookingTime: req.body.bookingTime,
        })

        await newBooking.save()

        req.flash('infoSubmit', 'Booking has been added, please await confirmation.')
        res.redirect('/submit-bookings')
    } catch (error) {
        req.flash('infoErrors', error)
        res.redirect('/submit-bookings')
    }
  
}

/**
 * GET /show-bookings/:id
 * Bookings
 */
 exports.exploreBookings = async(req, res) => {
    try {
        let bookingId = req.params.id
        const showBookings = await Bookings.findById(bookingId)
        res.render('show-bookings', { title: 'Galaxy Atelier - Bookings', showBookings} )
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
}


/**
 * PUT /edit-bookings/:id
 * Bookings
 */
 exports.updateBookings = async(req, res) => {
    try {
        let bookingId = req.params.id
        const editBookings = await Bookings.findById(bookingId)
        res.render('edit-bookings', { title: 'Galaxy Atelier - Bookings', editBookings} )
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
}


// async function updateBookings() {
//     try {
//         const res = await Bookings.updateOne({ name: 'Nibiew' }, { name: 'Wei Bin' })
//         res.n // Display number of document matched
//         res.nModified // Display number of documents modified
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateBookings()



// // Delete Bookings
// async function deleteBooking() {
//     try {
//         await Bookings.deleteOne( { name: 'Wei Bin' } )
//     } catch (error) {
//         console.log(error)
//     }
// }
// deleteBooking()











// async function insertDummyCategoryData(){
//     try {
//         await Category.insertMany([
//             {
//                 "name": "Exterior Detailing",
//                 "image": "exterior.jpeg"
//             },
//             {
//                 "name": "Interior Detailing",
//                 "image": "interior.jpeg"
//             },
//             {
//                 "name": "Coating",
//                 "image": "coating.jpeg"
//             },
//             {
//                 "name": "Tinting",
//                 "image": "tinting.webp"
//             },
//             {
//                 "name": "Wrapping",
//                 "image": "wrapping.jpeg"
//             },
//             {
//                 "name": "Buy or Sell",
//                 "image": "trading.jpeg"
//             } 
//         ])
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyCategoryData();