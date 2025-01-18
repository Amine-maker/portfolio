import React, { PropsWithChildren } from "react";
import { useParams } from "react-router";

type Props = { test?: string };

const Project: React.FC<PropsWithChildren<Props>> = () => {
  const params = useParams<{ id: string }>();

  console.log(params.id);

  return <div>testest</div>;
};

export default Project;

