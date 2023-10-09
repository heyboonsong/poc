import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HostPage } from "ui";

const MarketPage = dynamic<{ withHostApp: boolean }>(
  () => import("market/page"),
  {
    suspense: true,
    ssr: false,
  }
);

export default function MarketApplication() {
  return (
    <HostPage hostType="NextJS">
      <Suspense>
        <MarketPage withHostApp />
      </Suspense>
    </HostPage>
  );
}
