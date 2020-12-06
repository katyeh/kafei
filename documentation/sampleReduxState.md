# Sample Redux State

let reduxState = {

  session: {
  currentUserId: 3
  }

  ui: {
    profileDropdown: T/F,
    loginModal: T/F,
    signupModal: T/F,
    tipModal: T/F
  }

  errors: {
    authenticationError: 'Authentication failed'
  }

  entities: {

    users: {
      1: {id:1, name:'Kat'},
      2: {},
    },

    posts: {
      1: {id:1, body:'Welcome to my page.' userId: 1, commentIds: [1, 2,]},
      2: {id:2, ...}
    },

    transactions: {
      1: {id:1, amount:2, sender_id:1, recipient_id: 2},
      2: {}
    },

    followers: {
      1: {id:1, follower_id:1, followed_id: 2},
      2: {},
    },

    comments: {
      1: {id:1, body: 'Love your work.', sender_id: 1, recipient_id: 2,   transaction_id: 2, post_id: null}
      2: {id:2, ...}
    },

    photos: {
      1: {id: 1, pic_url: '', user_id: 1},
      2: {}
    },

    likes: {
      1: {id: 1, post_id: 1, photo_id: none, user_id: 1},
      2: {}
    },

    tags: {
      1: {id: 1, name: 'Art'},
      2: {}
    },

    user_tags: {
      1: {id: 1, tag_id: 2, user_id: 6}
      2: {}
    }
  }
}
