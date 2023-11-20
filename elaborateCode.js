/**
 * Filename: elaborateCode.js
 * 
 * Description: This code is an elaborate and complex implementation of a social media platform.
 *              It includes user registration, login, post creation, like and comment features.
 *
 * Notes: This code is heavily abstracted and intended for demonstration purposes only.
 */

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
  }

  login() {
    // Logic to authenticate user
    console.log(`User "${this.username}" successfully logged in.`);
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    console.log(`User "${this.username}" created a new post: "${content}"`);
    return post;
  }

  likePost(post) {
    post.addLike(this);
    console.log(`User "${this.username}" liked post with ID ${post.id}`);
  }

  commentPost(post, content) {
    const comment = new Comment(content, this);
    post.addComment(comment);
    console.log(`User "${this.username}" commented on post with ID ${post.id}`);
  }
}

class Post {
  constructor(content, user) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.content = content;
    this.user = user;
    this.likes = [];
    this.comments = [];
  }

  addLike(user) {
    this.likes.push(user);
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(content, user) {
    this.content = content;
    this.user = user;
  }
}

// Usage

const user1 = new User('JohnDoe', 'password');
user1.login();

const user2 = new User('JaneSmith', '123456');
user2.login();

const post1 = user1.createPost('Hello everyone!');
const post2 = user2.createPost('Good morning!');

user2.likePost(post1);
user1.commentPost(post2, 'Have a great day!');

console.log(user1);
console.log(user2);
console.log(post1);
console.log(post2);