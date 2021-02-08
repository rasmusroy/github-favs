import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import "./App.css";

import List from "./components/List";
import { createList } from "./store/actions";

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
    <div className="App">
      <h1>Github Repos</h1>
      <List items={items} />
    </div>
  );
}

export default App;
