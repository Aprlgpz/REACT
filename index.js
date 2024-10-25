import { getPosts, getPostsByUser, getPostById, addPost, updatePostTitle, updatePost, deletePostsById, deletePostsByUserId,updatePostBody}from "./services/posts.js";
import { updateUser, getAllUsers, getUserById, addUser } from "./services/users.js";
import { getCommentById, getCommentsByPostId, updateCommentBody, addComment, deleteCommentById, getComments } from "./services/comments.js";





console.log("--------------------USERS--------------------")
// get all users
console.log("GET ALL USERS: ",getAllUsers());

// Update a user
console.log("--UPDATE USER--");
updateUser(1, { email: "roger@77.com" });

// Add a new user
console.log("--ADD USER--");
addUser({ name: "John Doe", email: "john@example.com" });
// console.log(getAllUsers()); 


// get user by id
console.log("--GET USER BY ID--");
console.log(getUserById(10001)); 

console.log("--GET ALL USERS INCLUDING ADDED USER--");
console.log(getAllUsers()); 



console.log("--------------------POST--------------------")



// GET ALL POSTS
console.log("GET ALL POSTS:" ,getPosts());


//add new post 
console.log("---------ADD POST -----------------")
addPost({ userId:101, title: "First Post", content: "This is my first post!" });
console.log("Get post using id = 101", getPostById(101));
console.log("---------UPDATE POST -----------------")
updatePostTitle(101,"My Changed First Post");
updatePostBody(101,"This is my changed first post!");
deletePostsById(101)
console.log("New List of Posts:" , getPosts());

console.log("---------ADD 2 NEW POST -----------------")
addPost({ userId:101, title: "Second Post", content: "This is my second post!" });
addPost({ userId:101, title: "Third Post", content: "This is my third post!" });
console.log("GET ALL POSTS (to show that the added posts are on the top):" ,getPosts());
console.log("Get Post by UserId = 101: ", getPostsByUser(101));

console.log("---------update post -----------------")
// Title Only
const titleOnlyUpdate = updatePost(101, {
    title: "Updated Title Second Post"
  });
  console.log("Updated Title post:", titleOnlyUpdate); 
// Body Only
const bodyOnlyUpdate = updatePost(102, {
    content: "Updated Third body post."
    });
    console.log("Updated Body post:", bodyOnlyUpdate); 
console.log("Get Post by UserId = 101: ", getPostsByUser(101));
deletePostsByUserId(101);
console.log("Get Post by UserId = 101: ", getPostsByUser(101));
console.log(getPosts());


console.log("----------------COMMENTS------------------------------------")


console.log("GET ALL COMMENTS", getComments())
addComment({postId: 101, name: "First Comment", body: "First Body" });
console.log("Get comment by PostId = 101",getCommentsByPostId(101))
updateCommentBody(501,"New Body")
console.log("Get comment by Id = 501",getCommentById(501))
deleteCommentById(501)
console.log("GET ALL COMMENTS", getComments())


