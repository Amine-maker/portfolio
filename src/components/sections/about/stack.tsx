import React, { PropsWithChildren } from "react";

type StackProps = {} & PropsWithChildren;

const Stack: React.FC<StackProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Stack;
