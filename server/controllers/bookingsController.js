require('../models/database');
const Category = require('../models/Category');

/**
 * GET /
 * Homepage
 */
 exports.homepage = async(req, res) => {
    try {
        const limitNumber = 6
        const categories = await Category.find({}).limit(limitNumber)
        res.render('index', { title: 'Galaxy Atelier - Home', categories} )
    } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" })
    }
}




/**
 * GET /submit-bookings
 * Submit Bookings
 */
 exports.submitBookings = async(req, res) => {
  
    res.render('submit-bookings', { title: 'Galaxy Atelier - Submit Bookings'} )

}





















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