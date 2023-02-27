import React from "react";
import { Inter } from "@next/font/google";
import { Button } from "antd";
import { Checkbox } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isChecked, hasIsChecked] = React.useState(true);
  return (
    <div>
      <Button type={"primary"}>Button</Button>
      <Checkbox
        checked={isChecked}
        onChange={() => hasIsChecked((prev) => !prev)}
      />
    </div>
  );
}
