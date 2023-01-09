import React, { useState } from "react";
import styles from "./App.module.scss";
import SearchBar from "./components/search-bar";
import "./normalize.module.scss";

const App = () => {
  const [items, setItems] = useState([
    { id: "1", label: "Category 1" },
    { id: "2", label: "Category 2" },
    { id: "3", label: "Category 3" },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  // const [items, setItems] = useState(["item1", "item2", "item3"]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const resultTemplate = (item) => {
    return (
      <div>
        {item.id} {item.label}
      </div>
    );
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const sleep = async (ms) => {
    await timeout(ms);
  };

  const onSearch = async (value) => {
    const newItem = { id: getRandomInt(1000), label: value };

    setIsLoading(true);

    await sleep(1000);

    setIsLoading(false);

    setItems((prev) => {
      return [...prev, newItem];
    });
  };

  return (
    <div className={styles["test"]}>
      {/* <Input
        placeholder="Email"
        primary
        type="password"
        icon="default"
        size="normal"
      /> */}

      {/* <Button className={styles["button"]} size="normal">
        Login
      </Button> */}

      {/* <Checkbox
        label={"Remember me"}
        checked={true}
        onChange={() => {
          console.log("asd");
        }}
      /> */}

      {/* <Dropdown label={"Sort by:"} header={"Category"} items={items} /> */}
      <SearchBar
        placeholder={"Search"}
        results={items}
        onSearch={onSearch}
        isLoading={isLoading}
        resultTemplate={resultTemplate}
        options={{ searchOnType: true }}
      />
    </div>
  );
};

export default App;
