// App.js
import React from "react";
import PageLayout from "./PageLayout";
import "./../styles/App.css";

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<h3>© 2023 My Website. All rights reserved.</h3>}
    >
      <h2>This is the content of my website</h2>
    </PageLayout>
  );
};

export default App;
