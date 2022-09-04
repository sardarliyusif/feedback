import { filter , map } from "lodash";
import data from "../../data/data.json";


// All users
let users =[]
map(filter(map(data.productRequests, (d) => d.comments 
), (c) => c) , (e) => users=[...users , ...e])
// Users for us
const initialUsers = map(users , (c) => ({
    image: c.user.image,
    name: c.user.name,
    username: c.user.username
}))

export const userReducer = (state = {...initialUsers}, action) => {
  switch (action) {
    default:
      return state;
  }
};
