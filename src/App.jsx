import React from "react";
import styles from "./App.module.scss";
import Navbar from "./components/navbar/navbar";
import Button from "./components/button";

import "./normalize.module.scss";
import Foooter from "./components/foooter";

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

  const footerLinks = [
    { id: 1, href: "#", label: "IT" },
    { id: 2, href: "#", label: "CONTACTS" },
    { id: 3, href: "#", label: "PRIVACY & COOKIE POLICY" },
    { id: 4, href: "#", label: "TERMS OF USE" },
    { id: 6, href: "#", label: "ECO-AWARE" },
    { id: 7, href: "#", label: "NEWSLETTER" },
    { id: 8, href: "#", label: "ECO-AWARE" },
    { id: 9, href: "#", label: "COOKIE PREFERENCES" },
    { id: 10, href: "#", label: "INSTAGRAM" },
    { id: 11, href: "#", label: "FACEBOOK" },
  ];

  const subText =
    "OWENSCORP ITALIA SPA, VIA M. PONZA N 4, 10121, TORINO, ITALY, VAT IT07725270016, REA- TO915864, 1.000.000 I.V., PH +390115818697 CUSTOMERCARE@RICKOWENS.EU";

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
      <Foooter links={footerLinks} subText={subText} />
    </>
  );
};

export default App;
