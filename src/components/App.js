import React from "react";
import PageLayout from "./PageLayout";
import "./../styles/App.css";

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      children={<p>This is the content of my website</p>}
      footer={<h3>© 2023 My Website. All rights reserved.</h3>}
    ></PageLayout>
  );
};

export default App;
