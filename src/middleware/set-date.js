// Crude regex test based on ni.json 
const CRUDE_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
module.exports = (req, res, next) => {
    const taxYear = req.header('x-run-date')
    if (!taxYear) return next(); // Do not error, pass empty date to function
    if (typeof taxYear !== 'string') return next(new Error('type of x-run-date is not a string'))
    if (!CRUDE_DATE_REGEX.test(taxYear)) return next(new Error('x-run-date is not valid date construct'))
    req.taxYear = taxYear
    return next()
};
