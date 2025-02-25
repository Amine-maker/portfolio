import React, { PropsWithChildren } from "react";
import Header from "../sections/hero/header";
import About from "../sections/about/about";

type Props = { test?: string };

const Home: React.FC<PropsWithChildren<Props>> = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header></Header>
      <About></About>
    </div>
  );
};

export default Home;
