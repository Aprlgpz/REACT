import { comments as data } from "../data/comments.js";
import { generateId } from "../utils.js";

//private
let comments = [...data];

export function getComments(){
  return [...comments]
}

export function getCommentById(id) {
  //get comment by id
  return comments.find((c) => c.id === id);
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.find((c) => c.postId === postId);
}

export function updateCommentBody(id, newBody) {
  //update comment body
  const c = comments.find(c => c.id === id);
  if (c){
    console.log("Existing Comment Body:", c); 
    c.body= newBody;
    console.log("Updated Comment Body:", c); 
    return c; 
  }

}

export function deleteCommentById(id) {
  //delete comment by id
  const existingComment = comments.find((c) => c.id === id);
  if (existingComment !== -1){
    comments.splice(existingComment,1)
    console.log( "Deleted Comment", existingComment)
  }
  else {
    console.log("Not found")
  }

}


export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  const newId = generateId(comments)
  
  
  const newComment = {
    id: newId,
    ...comment, 
  };
  comments.push(newComment);
    console.log("Adding comment:", newComment); 

  return [...comments]; 
}
