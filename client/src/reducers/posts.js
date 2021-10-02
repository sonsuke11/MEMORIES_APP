import * as actions from "../actions/actionType"
const reducer = (posts = [], action) => {
  switch (action.type) {
    case actions.FETCH_ALL:
      return action.payload;
    case actions.CREATE:
      return action.payload ? [...posts,action.payload]: posts;
    case actions.UPDATE:
    case actions.LIKE:
      return posts.map((post)=>post._id===action.payload._id ? action.payload : post)
    case actions.DELETE :
      return posts.filter(post=>post._id !== action.payload)
    default:
      return posts;
  }
};

export default reducer;
