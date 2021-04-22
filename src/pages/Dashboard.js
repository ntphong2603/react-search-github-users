import React from "react";
import { Navbar, Repos, Search, User } from "../components";
import UserInfo from "../components/Info";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loading" />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <UserInfo />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
