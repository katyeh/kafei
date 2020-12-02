# Back End Routes

* users

  * GET /users => gets all users
  * GET /users/:id => get a single users info
  * GET /users/:id/home => gets featured and suggested creators for homepage
  * POST /users => create a new user
  * PUT /users/:id/profile_pic => update profile photo
  * PUT /users/:id/cover_pic => update cover photo
  * DELETE /users/:id => delete a user

* posts

  * GET /posts/:id => gets a single post
  * GET /users/:id/posts => gets all posts from a specific user
  * POST /users/:id/posts => create a new post
  * PUT /users/:id/posts => update a post
  * DELETE /posts/:id => delete a post

* comments

  * GET /users/:id/comments => gets all comments from a single user
  * POST /users/:id/comments => create a new comment
  * DELETE /comments/:id => delete a comment

* likes

  * GET /posts/:id/likes => gets all likes for a post
  * GET /photos/:id/likes => gets all likes for a photo
  * POST /posts/:id/likes => adds a like to a post
  * POST /photos/:id/likes => adds a like to a photo
  * DELETE /posts/:id/likes => remove like from post
  * DELETE /photos/:id/likes => remove like from photo

* photos

  * GET /users/:id/photos => gets all photos for a single user
  * POST /users/:id/photos => post a new photo
  * DELETE photos/:id => delete a photo

* tips

  * PUT /users/:id/tips => tip a user

* followers

  * GET /users/:id/followers => gets all followers for a user
  * POST /users/:id/followers => follow a user
  * DELETE /users/:id/followers => unfollow a user

* search

  * GET, POST /search/users => searches for users
