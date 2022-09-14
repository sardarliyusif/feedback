import { filter, map } from "lodash";
import data from "../../data/data.json";
import { nanoid } from "nanoid";

// All users
let users = [];
map(
  filter(
    map(data.productRequests, (d) => d.comments),
    (c) => c
  ),
  (e) => (users = [...users, ...e])
);

console.log(users);

// Users for us
const initialUsers = map(users, (c) => ({
  id: nanoid(),
  image: c.user.image,
  name: c.user.name,
  username: c.user.username,
}));

const uniqueIds = [];

const uniqueUsers = initialUsers.filter(element => {
  const isDuplicate = uniqueIds.includes(element.username);

  if (!isDuplicate) {
    uniqueIds.push(element.username);

    return true;
  }

  return false;
});

console.log(uniqueUsers);


export const userReducer = (state = { ...uniqueUsers }, action) => {
  switch (action) {
    default:
      return state;
  }
};
