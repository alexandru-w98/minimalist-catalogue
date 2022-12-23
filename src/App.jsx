import React from "react";
import styles from "./App.module.scss";
import Dropdown from "./components/dropdown";
import "./normalize.module.scss";

const App = () => {
  const items = [
    { id: "1", label: "Category 1" },
    { id: "2", label: "Category 2" },
    { id: "3", label: "Category 3" },
  ];

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

      <Dropdown label={"Sort by:"} header={"Category"} items={items} />
    </div>
  );
};

export default App;
