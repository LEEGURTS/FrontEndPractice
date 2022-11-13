import React from "react";
import Home from "../components/Home/Home";
import Layout from "../components/Layout/Layout";

const HomePage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Layout bgColor="EEEEEE">
        <Home />
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
