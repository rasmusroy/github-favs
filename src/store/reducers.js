import { CREATE_LIST, STAR_ITEM, REMOVE_STAR } from "./actions";

const initialState = { items: [] };

export default function list(state = initialState, action) {
  switch (action.type) {
    case CREATE_LIST:
      return Object.assign({}, state, {
        items: [...state.items, ...action.items],
      });
    case STAR_ITEM:
      return Object.assign({}, state, {
        ...state,
        items: state.items.map(item => item.id === action.id ? {...item, starred: action.starred, stargazers_count: item.stargazers_count + 1} : item)
      })
    case REMOVE_STAR:
      return Object.assign({}, state, {
        ...state,
        items: state.items.map(item => item.id === action.id ? {...item, starred: action.starred, stargazers_count: item.stargazers_count - 1} : item)
      })
    default:
      return state;
  }
}
