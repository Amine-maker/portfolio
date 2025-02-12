import React, { PropsWithChildren } from "react";
import Header from "../sections/hero/header";

type Props = { test?: string };

const Home: React.FC<PropsWithChildren<Props>> = () => {
  return (
    <div className="flex flex-col gap-8">
      <Header></Header>
    </div>
  );
};

export default Home;

