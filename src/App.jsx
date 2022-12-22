import React from "react";
import styles from "./App.module.scss";
import Checkbox from "./components/checkbox";
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

      {/* <Button className={styles["button"]} size="normal">
        Login
      </Button> */}

      <Checkbox
        label={"Remember me"}
        checked={true}
        onChange={() => {
          console.log("asd");
        }}
      />
    </div>
  );
};

export default App;
