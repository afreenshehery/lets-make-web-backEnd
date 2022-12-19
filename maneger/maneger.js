const auth = require('../models/auth')
const singUp = require('../models/signUp')
const project = require('../models/projects')
const BadRequestError = require('../errorHandler/BadRequestError')



let Register = async (body) => {

      console.log("manager reached");
      // if (!req.body.AdminName || !req.body.AdminEmail || !req.body.AdminMobile || !req.body.AdminType || !req.body.AdminAddress || !req.body.AdminPassword) {

      //     throw new BadRequestError("Field Missing")
      // }
      let newuser = {


            Name: body.Name,
            LastName: body.LastName,
            Email: body.Email,
            Password: body.Password
      }

      console.log(body);

      let Users = await singUp.create(newuser);

      console.log(Users);
      // let admin1 = a.AdminName;

      let authtoken = { token: Math.random(10), userId: Users.id, status: 0 }

      let b = await auth.create(authtoken);


      return { authtoken: authtoken.token, userId: authtoken.userId }

}
let login = async (req) => {

      console.log("reached manager function");
      console.log(req.body);
      if (!req.body.Email) {
            throw new BadRequestError("Please enter your name");

      }
      if (!req.body.Password) {

            throw new BadRequestError("Please Enter password");

      }
      let findData = {};



      findData["$and"] = [
            { Email: { $eq: req.body.Email } },

            { Password: { $eq: req.body.Password } },



      ]




      let Admin = await singUp.findOne({ where: findData, raw: true });

      let authtoken = { token: Math.random(10), userId: Admin.id }



      let b = await auth.update(authtoken, { where: { userId: Admin.id } });
      let c = await auth.findOne({ where: { userId: Admin.id }, raw: true })
      // console.log(c.token)
      // console.log(c.userId)
      console.log("successfully logedin")
      return { userid: c.userId, token: c.token, status: c.status }

}

let Project = async (body) => {
      console.log("manager reached");
      let newuser = {
            website: body.website,
            discription: body.discription,
            slote: body.slote,
            userId: body.id

      }

      console.log(newuser);

      let ProjectDetails = await project.create(newuser);
      console.log(ProjectDetails.id);
      let findPoject = await project.findOne({ where: { id: ProjectDetails.id }, raw: true });
      console.log(findPoject)
      return { id: ProjectDetails.id, findPoject: findPoject }






}
let getUser = async (body, id) => {
      console.log(body, id);
      console.log("manager reached");


      let finduser = await singUp.findOne({ where: { id: id }, raw: true });
      console.log(finduser);
      let findpro = await project.findOne({ where: { userId: finduser.id }, raw: true })
      console.log(findpro);

      return { finduser: finduser, findpro: findpro }






}





let updateUser = async (body, id) => {
      console.log("manager reached");

      let findData = { userId: id }
      console.log(findData)

      let isExist = await auth.findOne({ where: findData, raw: true })
      if (!isExist) {
            throw new BadRequestError("This entry is not belongs to you")
      }


      console.log(body)


      // let body = JSON.parse(req.body.body);

      let EditeUser = {
            userId: id,
            Name: body.Name,
            LastName: body.website,
            Email: body.patientAge,
            password: body.password,





      }

      console.log(EditeUser);



      let exp = await singUp.update(EditeUser, { where: { id: id } });
      return exp;



}



let getAllUser = async (req) => {
      console.log("manager reachedcccfc");
      console.log(req.body);
      let limit = (req.body.limit) ? parseInt(req.body.limit) : 2;
      let page = req.body.page || 1;
      let offset = (page - 1) * limit;
      let findAllUsers = await singUp.findAll({ raw: true, attributes: ["id", "Name", "LastName", "Email", "Password"], limit, offset, order: [["id", "ASC"]] })
      let getProductCount = await singUp.findAndCountAll({ raw: true })

      console.log(getProductCount);


      if (req.body.search) {
            findData = {
                  Name: req.body.search
            }
            let data = await singUp.findOne({ where: findData, raw: true, })

            console.log(data);
            return { findAllUsers: data }
      }

      if (req.body.order) {

            let data = await singUp.findAll({
                  raw: true,
                  limit,
                  offset,
                  order: [["id", "DESC"]],
                  attributes: ["id", "Name", "LastName", "Email", "Password"],
            });
            console.log(data);
            return { findAllUsers: data }
      } else {
            return { findAllUsers: findAllUsers, getProductCount: getProductCount }
      }










}

let deleteUser = async (body, id) => {
      console.log(body, id);
      console.log("manager reached");


      let findAllUsers = await singUp.destroy({ where: { id: id } });
      console.log(findAllUsers);
      return { findAllUsers: findAllUsers }

}
module.exports = { Register, login, Project, getUser, updateUser, getAllUser, deleteUser }