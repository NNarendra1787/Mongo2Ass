const express = require("express")
const route = express.Router();
const userCont = require("../Controller/userCont")

route.post("/createUser", userCont.addNewUser)
route.post("/createAllUser", userCont.addAllNewUser)
route.get("/finduser", userCont.findUser)
route.get("/findsalary", userCont.findSlary)
route.get("/findexp", userCont.findExperience)
route.get("/findge", userCont.findGradExp)
route.put("/updatesal", userCont.UpdateUser)
route.delete("/delsing", userCont.DeleteSingUser)
route.delete("/delall", userCont.DeleteAllUser)
module.exports = route