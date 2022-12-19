const manager = require('../maneger/maneger')


let Register = async (req, res, next) => {
      console.log("reached controller");
      return manager.Register(req.body)
            .then(data => {
                  let result = {
                        status: 200,

                        AdminDetails: data.a,
                        token: data.b,
                        token: data.authtoken,
                        userId: data.userId


                  }
                  return res.json(result);

            }).catch(next);
}


let login = async (req, res, next) => {
      console.log("reached controller");
      return manager.login(req)
            .then(data => {
                  let result = {
                        status: 200,
                        data: data,
                        userId: data.userid,
                        token: data.token,
                        status: data.status

                  }
                  return res.json(result);

            }).catch(next);
}

let Project = async (req, res, next) => {
      console.log("reached controller");
      return manager.Project(req.body)
            .then(data => {
                  let result = {
                        status: 200,
                        data: data.id,
                        findPoject: data.findPoject


                  }
                  return res.json(result);

            }).catch(next);
}

let getUser = async (req, res, next) => {
      console.log("reached controller");
      return manager.getUser(req.body, req.params.id)
            .then(data => {
                  let result = {
                        status: 200,
                        finduser: data.finduser,
                        findpro: data.findpro




                  }
                  return res.json(result);

            }).catch(next);
}

let updateUser = async (req, res, next) => {
      console.log("reached controller");
      return manager.updateUser(req.body, req.params.id)
            .then(data => {
                  let result = {
                        status: 200,
                        finduser: data.finduser,
                        findpro: data.findpro




                  }
                  return res.json(result);

            }).catch(next);
}


let getAllUser = async (req, res, next) => {
      console.log("reached controller");
      return manager.getAllUser(req)
            .then(data => {
                  let result = {
                        status: 200,
                        data: data.findAllUsers,
                        getProductCount: data.getProductCount





                  }
                  return res.json(result);

            }).catch(next);
}

let deleteUser = async (req, res, next) => {
      console.log("reached controller");
      return manager.deleteUser(req.body, req.params.id)
            .then(data => {
                  let result = {
                        status: 200,
                        data: data.findAllUsers,





                  }
                  return res.json(result);

            }).catch(next);
}

module.exports = { Register, login, Project, getUser, getAllUser, updateUser, deleteUser }