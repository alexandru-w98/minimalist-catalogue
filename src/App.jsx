import React from "react";
import styles from "./App.module.scss";
import Button from "./components/button";
import "./normalize.module.scss";

const App = () => {
  return (
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
    </div>
  );
};

export default App;
