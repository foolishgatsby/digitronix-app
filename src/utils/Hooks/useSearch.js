import { useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState({
    keyword: "",
    category_id: 0,
    tag: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    // console.log("value", value);
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSelect = (value, name) => {
    console.log("value", value);
    console.log("name", name);
    setSearch({
      ...search,
      [name]: value,
    });
  };

  return [search, handleInput, handleSelect];
}
