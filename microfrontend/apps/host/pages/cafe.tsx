import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { HostPage } from "ui";

const CafePage = dynamic<{ withHostApp: boolean }>(() => import("cafe/page"), {
  suspense: true,
  ssr: false,
});

export default function CafeApplication() {
  const router = useRouter();
  useEffect(() => {
    console.log("route change with dependency", router.pathname);
  }, [router]);
  return (
    <HostPage hostType="NextJS">
      <Suspense>
        <CafePage withHostApp />
      </Suspense>
    </HostPage>
  );
}
