export const LOAD_USER = "LOAD_USER";

const signupReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_USER:
      return {
        ...state,
        id: action.id,
        fullName: action.fullName,
        username: action.username,
        email: action.email,
        bio: action.bio,
        profileImageUrl: action.profile_image_url,
        coverImageUrl: action.cover_image_url,
        wallet: action.wallet,
        tips: action.tips
      }
    default:
      return state;
  }
};

export default signupReducer;
