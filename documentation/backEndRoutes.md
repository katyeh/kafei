# Back End Routes

* auth
  * POST /auth/signup => create a new user
  * PUT /auth/:id/profile_pic => update profile photo
  * PUT /auth/:id/cover_pic => update cover photo
  * DELETE /auth/:id => delete a user

* users

  * GET /users => gets all users
  * GET /users/:id => get a single users info
  * PUT /users/:id => update user bio
  * GET /users/:id/home => gets featured and suggested creators for homepage

* posts

  * GET /posts/:id => gets a single post
  * GET /users/:id/posts => gets all posts from a specific user
  * POST /users/:id/posts => create a new post
  * PUT /posts/:id => update a post
  * DELETE /posts/:id => delete a post

* comments

  * GET /posts/:id/comments => gets all comments for a single post
  * POST /posts/:id/comments => create a new comment
  * DELETE /comments/:id => delete a comment

* likes

  * GET /posts/:id/likes => gets all likes for a post
  * GET /photos/:id/likes => gets all likes for a photo
  * POST /posts/:id/likes => adds a like to a post
  * POST /photos/:id/likes => adds a like to a photo
  * DELETE /likes/:id => remove like from post

* photos

  * GET /users/:id/photos => gets all photos for a single user
  * POST /users/:id/photos => post a new photo
  * DELETE photos/:id => delete a photo


* transactions

  * GET /users/:id/transactions => gets all tips and corresponding comments for a single user
  * PUT /users/:id/tips => tip a user
  * POST /users/:id/tips => tip a user
  * DELETE /transactions/:id => delete a transaction and associated comment


* followers

  * GET /users/:id/followers => gets all followers for a user
  * GET /users/:id/following => gets all users a single user is following
  * POST /users/:id/following => follow a user
  * DELETE /users/:id/followers/:id => unfollow a user


* search

  * GET, POST /search/users => searches for users
