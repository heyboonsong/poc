import { PropsWithChildren } from "react";
import { Typography } from "./Typography";

interface IProps extends PropsWithChildren {
  hostType: string;
}

export const HostPage = ({ hostType, children }: IProps) => {
  return (
    <main
      style={{
        background: "#999",
        height: "100%",
      }}
    >
      <section
        style={{
          background: "white",
          padding: "1rem 2rem",
          color: "#555",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography as="h1">Host Page - {hostType}</Typography>
      </section>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/market">Market</a>
        </li>
        <li>
          <a href="/cafe">Cafe’</a>
        </li>
        <li>
          <a href="/trade">Trade</a>
        </li>
        <li>
          <a href="/e-service">E-Service</a>
        </li>
        <li>
          <a href="/api-portal">API Portal</a>
        </li>
      </ul>
      <section style={{ padding: "1rem" }}>{children}</section>
    </main>
  );
};
