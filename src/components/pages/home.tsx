import React, { PropsWithChildren } from "react";
import Header from "../header/Header";

type Props = { test?: string };

const Home: React.FC<PropsWithChildren<Props>> = () => {
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Home;
