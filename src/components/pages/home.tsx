import React, { PropsWithChildren } from "react";

type Props = { test?: string };

const Home: React.FC<PropsWithChildren<Props>> = () => {
  return <div>home</div>;
};

export default Home;

