import React from "react";
import styles from "./App.module.scss";
import Input from "./components/input";

const App = () => {
  return (
    <div className={styles["test"]}>
      <Input placeholder="Email" type="password" icon="default" />
    </div>
  );
};

export default App;
