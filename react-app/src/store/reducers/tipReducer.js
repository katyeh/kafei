export const GIVE_TIP = 'GIVE_TIP';
export const GET_TIPS = 'GET_TIPS';

const tipReducer = (state = [], action) => {
  switch (action.type) {
    case GIVE_TIP:
      return [
        action.tip,
        ...state
        // transaction_id: action.transaction_id
      ]
    case GET_TIPS:
      return action.transactions
    default:
      return state;
  }
}

export default tipReducer;
