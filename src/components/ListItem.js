import { useDispatch } from "react-redux";
import styled from "styled-components";
import React from "react";

import { starItem, removeStar } from "../store/actions";

const ListItemWrapper = styled.article`
  background-color: #fefefe;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const ListItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
`;

const ListItemRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const ListItemLanguage = styled.span`
  font-size: 12px;
  font-weight: 400;
  display: block;
`;

const ListItemName = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;

  a {
    color: #2a2a2a;
  }
`;

const ListItemDescription = styled.p`
  font-size: 16px;
  margin: 0;
`;

const ListItemButton = styled.button`
  padding: 8px;
  background: ${({starred}) => starred ? '#000' : '#fff'};
  color: ${({starred}) => starred ? '#fff' : '#000'};
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;

const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ListItemWrapper>
      <ListItemLeft>
        <ListItemLanguage>{item.language}</ListItemLanguage>
        <ListItemName>
          <a href={item.html_url}>{item.name}</a>
        </ListItemName>
        <ListItemDescription>{item.description}</ListItemDescription>
      </ListItemLeft>
      <ListItemRight>
        <ListItemButton
          starred={item.starred}
          onClick={() =>
            dispatch(item.starred ? removeStar(item.id) : starItem(item.id))
          }
        >
          ⭐ {item.starred ? "Remove Star" : "Star"}
        </ListItemButton>
        {item.stargazers_count}
      </ListItemRight>
    </ListItemWrapper>
  );
};

export default ListItem;
