/**
 * GET /
 * Homepage
 */
 exports.homepage = async(req, res) => {
    res.render('index', { title: 'Galaxy Atelier Bookings - Home'})
}