import React, { useState } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const ListFilterButton = styled.button`
  padding: 8px;
  background: #fff;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 16px;
  margin-right: 16px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover {
    box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.1);
  }
`;

const ListFilterSelect = styled.select`
  padding: 8px;
  background: #fff;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 16px;
  margin-right: 16px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover {
    box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.1);
  }
`;

const List = ({ items }) => {
  const [onlyShowStarred, setOnlyShowStarred] = useState(false);
  const [languageFilter, setLanguageFilter] = useState("");
  const languages = items
    ?.filter((item) => item.language !== null)
    .map(function (item) {
      return item.language;
    });
  const filterLanguages = [...new Set(languages)];

  const handleSelect = (filter) => {
    setLanguageFilter(filter);
  };

  if (languageFilter.length > 0) {
    items = items.filter((item) => item.language === languageFilter);
  }

  if (onlyShowStarred) {
    items = items.filter((item) => item.starred === true);
  }

  return (
    <>
      <ListFilterButton
        className="List-FilterButton"
        onClick={() => setOnlyShowStarred(!onlyShowStarred)}
      >
        Only Show {onlyShowStarred ? "all" : "⭐"} Repositories
      </ListFilterButton>

      <ListFilterSelect
        className="List-FilterSelect"
        name="languageFilter"
        id="languages"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">None</option>
        {filterLanguages.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </ListFilterSelect>

      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default List;
