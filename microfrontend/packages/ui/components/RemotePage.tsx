import { Typography } from "./Typography";

interface IProps {
  name: string;
  withHostApp?: boolean;
}

export const RemotePage = ({ name, withHostApp }: IProps) => {
  return (
    <div
      style={{
        border: "5px dotted transparent",
        padding: "1rem",
        ...(withHostApp
          ? {
              borderColor: "#065c15",
              background: "#d9ffe0",
              color: "#065c15",
            }
          : {
              borderColor: "#472404",
              background: "#f0bc8d",
              color: "#472404",
            }),
      }}
    >
      <Typography as="h2">Remote Page - {name}</Typography>
    </div>
  );
};
