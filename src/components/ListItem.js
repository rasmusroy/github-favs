import { useDispatch } from "react-redux";
import React from "react";

import { starItem, removeStar } from "../store/actions";

const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <article className="ListItem-Wrapper">
      <div className="ListItem-LeftSide">
        <span className="ListItem-Language">{item.language}</span>
        <h2 className="ListItem-Name"><a href={item.html_url}>{item.name}</a></h2>
        <p className="ListItem-Description">{item.description}</p>
      </div>
      <div className="ListItem-RightSide">
        <button
          className={
            item.starred
              ? "ListItem-StartButton--Active"
              : "ListItem-StarButton"
          }
          onClick={() =>
            dispatch(item.starred ? removeStar(item.id) : starItem(item.id))
          }
        >
          ⭐ {item.starred ? "Remove Star" : "Star"}
        </button>
        {item.stargazers_count}
      </div>
    </article>
  );
};

export default ListItem;
