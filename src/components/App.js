import React from "react";
import PageLayout from "./PageLayout";
import "./../styles/App.css";

const App = () => {
  return (
    <PageLayout
      header={<div className="header">Welcome to my website</div>}
      footer={
        <div className="footer">© 2023 My Website. All rights reserved.</div>
      }
      children={<p>This is the content of my website </p>}
    ></PageLayout>
  );
};

export default App;
