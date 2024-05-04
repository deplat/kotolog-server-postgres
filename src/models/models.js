import {User} from "./User.js";
import {Role} from "./Role.js";
import {Cat} from "./Cat.js";
import {CatAlbum} from "./CatAlbum.js";
import {CatInfo} from "./CatInfo.js";
import {Color} from "./Color.js";


User.belongsToMany(Role, {through:'user_roles'})
Role.belongsToMany(User, {through:'user_roles'})

Cat.hasOne(CatAlbum)
CatAlbum.belongsTo(Cat)

Cat.hasOne(CatInfo)
CatInfo.belongsTo(Cat)

Cat.belongsToMany(Color, {through: 'cat_colors'})
Color.belongsToMany(Cat, {through: 'cat_colors'})

export {
  User,
  Role,
  Cat,
  CatAlbum,
    CatInfo
}