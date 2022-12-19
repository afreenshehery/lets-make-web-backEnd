// const Employee = require("../model/employee");
// const manager = require('../manager/manager');
// const BadRequestError = require('../errorHandler/BadRequestError')


const auth = require("../models/auth")
const BadRequestError = require('../errorHandler/BadRequestError')
// login---
// let uservalidateToken = async (req, res, next) => {
//     console.log(req.headers.token)
//     let token = req.headers.token
//     let Admin = await auth.findOne({ where: { token: token }, raw: true });
//     console.log(Admin);
//     if (!Admin) {
//         throw new BadRequestError("User Invalid")
//     }
//     // req.HospitalId = Admin.HospitalId
//     next()
// }

let validateUser = async (req, res, next) => {
    console.log("gggg")

    try {

        console.log(req.headers.token);
        let token = req.headers.token;


        let type = await auth.findOne({ where: { token: token }, raw: true });
        console.log(type);
        if (!type) {
            throw new BadRequestError("User Invalid")
        }
        // req.HospitalId = type.hospitalId,
        // req.AdminType = type.adminType
        next()
    }
    catch (e) {
        console.log(e);
        next(e);
    }
}







module.exports = { validateUser }
