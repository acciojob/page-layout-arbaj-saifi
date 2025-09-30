import React from "react";
import PageLayout from "./PageLayout";
import "./../styles/App.css";

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<h3>© 2023 My Website. All rights reserved.</h3>}
    >
      <p>This is the content of my website</p>
    </PageLayout>
  );
};

export default App;
