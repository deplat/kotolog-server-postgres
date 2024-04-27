import {User} from "./User.js";
import {Role} from "./Role.js";
import dbCats from "../database.js"

User.belongsToMany(Role, {through:'user_roles'})
Role.belongsToMany(User, {through:'user_roles'})

export default {
  User,
  Role,
}