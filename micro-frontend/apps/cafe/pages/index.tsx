import { RemotePage } from "ui";

interface IProps {
  withHostApp?: boolean;
}

export default function RemoteApplication({ withHostApp = false }: IProps) {
  return <RemotePage name="Cafe’" withHostApp={withHostApp} />;
}
