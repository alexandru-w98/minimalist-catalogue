import React from "react";
import styles from "./App.module.scss";
import Navbar from "./components/navbar/navbar";
import Button from "./components/button";

import "./normalize.module.scss";

const App = () => {
  // ********* SEARCH *********
  // const [items, setItems] = useState([
  //   { id: "1", label: "Category 1" },
  //   { id: "2", label: "Category 2" },
  //   { id: "3", label: "Category 3" },
  // ]);

  // const [isLoading, setIsLoading] = useState(false);

  // const getRandomInt = (max) => {
  //   return Math.floor(Math.random() * max);
  // };

  // const resultTemplate = (item) => {
  //   return (
  //     <div>
  //       {item.id} {item.label}
  //     </div>
  //   );
  // };

  // const timeout = (ms) => {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // };

  // const sleep = async (ms) => {
  //   await timeout(ms);
  // };

  // const onSearch = async (value) => {
  //   const newItem = { id: getRandomInt(1000), label: value };

  //   setIsLoading(true);

  //   await sleep(1000);

  //   setIsLoading(false);

  //   setItems((prev) => {
  //     return [...prev, newItem];
  //   });
  // };

  const links = {
    leftLinks: [
      { id: 1, href: "#", label: "Collections" },
      { id: 2, href: "#", label: "Shop Men" },
      { id: 3, href: "#", label: "Shop Women" },
      { id: 4, href: "#", label: "Vision" },
    ],
    rightLinks: [
      { id: 5, href: "#", label: "Sign In" },
      { id: 6, href: "#", label: "Cart (0)" },
    ],
  };

  return (
    <>
      <Navbar links={links} isBurgerMenu />
      <div className={styles["test"]}>
        {/* <Input
        placeholder="Email"
        primary
        type="password"
        icon="default"
        size="normal"
      /> */}

        <Button className={styles["button"]} size="normal">
          Login
        </Button>

        {/* <Checkbox
        label={"Remember me"}
        checked={true}
        onChange={() => {
          console.log("asd");
        }}
      /> */}

        {/* <Dropdown label={"Sort by:"} header={"Category"} items={items} /> */}
        {/* <SearchBar
          placeholder={"Search"}
          results={items}
          onSearch={onSearch}
          isLoading={isLoading}
          resultTemplate={resultTemplate}
          options={{ searchOnType: true }}
        /> */}
      </div>
    </>
  );
};

export default App;
