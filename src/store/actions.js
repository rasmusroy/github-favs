export const CREATE_LIST = "CREATE_LIST";
export const STAR_ITEM = "STAR_ITEM";
export const REMOVE_STAR = "REMOVE_STAR";

export function createList(items) {
  return {
    type: CREATE_LIST,
    items,
  };
}

export function starItem(id) {
  return {
    type: STAR_ITEM,
    starred: true,
    id,
  }
}

export function removeStar(id) {
  return {
    type: REMOVE_STAR,
    starred: false,
    id,
  }
}