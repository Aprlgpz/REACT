import { users as data } from "../data/users.js";
import { generateId } from "../utils.js";

//private
let users = [...data];

export function getAllUsers() {
  // get all users
  return [...users];
}

export function getUserById(id) {
  //get single user by id
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  //update user (userInfo is an object which can optionally contain properties of a user)
  users = users.map((user) => {
    if (user.id === id) {
      const existingUser = {
        ...user
      }
      const updatedUser = {
        ...user,
        ...userInfo,
      };
      console.log("Existing user", existingUser, 
        "Updating user :", updatedUser ); 
      return updatedUser;
    }
    return user;
  });
}

// const c = comments.find(c => c.id === id);
//   if (c){
//     c.body= newBody;
//     console.log("Updated Comment Body:", c); 
//     return c; 
//   }

export function addUser(userInfo) {
  // add user (userInfo is an object which can optionally contain properties of a user)
  // use generateId function and pass users array as the argument to generate a unique id.
  const newId = generateId(users);
    const newUser = {
    id: newId,
    ...userInfo, 
  };
   users.push(newUser);
   console.log("Adding a new User ", newUser);
  return users; 
}
