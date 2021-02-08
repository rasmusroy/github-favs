import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import styled from "styled-components";

import List from "./components/List";
import { createList } from "./store/actions";

const AppWrapper = styled.div`
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.list.items);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        "https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc"
      )
        .then((response) => response.json())
        .then((data) => dispatch(createList(data.items)))
        .catch((error) => console.error("Error:", error));
    };

    if (items.length === 0) {
      fetchData();
    }
  }, [items, dispatch]);

  return (
    <AppWrapper>
      <h1>Github Repos</h1>
      <List items={items} />
    </AppWrapper>
  );
}

export default App;
