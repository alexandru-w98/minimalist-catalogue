import React from "react";
import styles from "./App.module.scss";
import Input from "./components/input";
import "./normalize.module.scss";

const App = () => {
  return (
    <div className={styles["test"]}>
      <Input
        placeholder="Email"
        primary
        type="password"
        icon="default"
        size="normal"
      />
    </div>
  );
};

export default App;
