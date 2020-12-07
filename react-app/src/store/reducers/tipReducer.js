export const GIVE_TIP = 'GIVE_TIP';
export const GET_TIPS = 'GET_TIPS';

const tipReducer = (state = [], action) => {
  switch (action.type) {
    case GIVE_TIP:
      return {
        ...state,
        id: action.id,
        amount: action.amount,
        sender_id: action.sender_id,
        recipient_id: action.recipient_id,
        body: action.body,
        // transaction_id: action.transaction_id
      }
    case GET_TIPS:
      return action.tips
  }
}
