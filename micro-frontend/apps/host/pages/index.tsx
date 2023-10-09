import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HostPage } from "ui";

const HomePage = dynamic<{ withHostApp: boolean }>(() => import("home/page"), {
  suspense: true,
  ssr: false,
});

export default function HomeApplication() {
  return (
    <HostPage hostType="NextJS">
      <Suspense>
        <HomePage withHostApp />
      </Suspense>
    </HostPage>
  );
}
