import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HostPage } from "ui";

const TradePage = dynamic<{ withHostApp: boolean }>(
  () => import("trade/page"),
  {
    suspense: true,
    ssr: false,
  }
);

export default function MarketApplication() {
  return (
    <HostPage hostType="NextJS">
      <Suspense>
        <TradePage withHostApp />
      </Suspense>
    </HostPage>
  );
}
