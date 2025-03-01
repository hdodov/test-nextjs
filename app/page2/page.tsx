import { Icon } from "../Icon";
import { Button } from "./Button";

export default function Home() {
  return (
    <h1 className="text-6xl">
      hello world <Button icon={<Icon />} />
    </h1>
  );
}
