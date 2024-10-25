import { posts as data } from "../data/posts.js";
import { generateId } from "../utils.js";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return [...posts]
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.filter((post) => post.userId === userId);
  }

export function getPostById(id) {
  //get a single post by id
  return posts.find((post) => post.id === id);
}

// function generateId(existingPosts) {
//   let newId = 1; 
//     while (existingPosts.some(post => post.id === newId)) {
//     newId++;
//   }

//   return newId;
// }
export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  const newId = generateId(posts);

  const newPost = {
    id: newId,
    ...post, 
  };

  posts.unshift(newPost);
  // posts = [newPost, ...posts];
  console.log("Adding New Post:", newPost); 

  return [...posts]; 
}

export function updatePostTitle(id, newTitle) {
  //update post title
  const post = posts.find(post => post.id === id);
  if (post){
    console.log("Existing Post Title:", post); 
    post.title= newTitle;
    console.log("Updated Post Title:", post); 
    return post; 
  }
}

export function updatePostBody(id, newBody) {
  //update post body
  const post = posts.find(post => post.id === id);
  if (post){
    console.log("Existing post Body:", post); 
    post.content= newBody;
    console.log("Updated post Body:", post); 
    return post; 
  }
}

export function updatePost(id, newPost) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  const existingPost = posts.find((p) => p.id === id);
  if (existingPost) {
  
    if (newPost.title) {
      existingPost.title =newPost.title;
    }

    
    if (newPost.content) {
      existingPost.content = newPost.content;
    }
    
    return existingPost; 
}
}
export function deletePostsById(id) {
  //delete post by id
  const existingPost = posts.find((p) => p.id === id);
  if (existingPost !== -1){
    posts.splice(existingPost,1)
    console.log( "Deleted Post by Id: ", existingPost)
  }
  else {
    console.log("Not found")
  }
return posts;
}

// export function deletePostsByUserId(userId) {
//   //delete all posts of a user by given userId
//   const existingPost = posts.filter((p) => p.userId === userId);
//   if (existingPost !== -1){
//     posts.splice(existingPost,1)
//     console.log( "Deleted Post by UserId: ", existingPost)
//   }
//   else {
//     console.log("Not found")
 
//  }
//  return posts;
// }
export function deletePostsByUserId(userId) {
  const initialLength = posts.length; // Get the initial number of posts
  const deletedPosts = posts.filter((post) => post.userId === userId); // Get the posts that will be deleted
  posts = posts.filter((post) => post.userId !== userId); // Filter out posts for the specified userId


  if (deletedPosts.length > 0) {
    console.log("Deleted Posts by UserId:", deletedPosts);
  } else {
    console.log("No posts found for the given UserId.");
  }

  return posts; // Return the updated posts array
}
  
