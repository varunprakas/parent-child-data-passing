import { useState } from "react";
import Child from "./child";
export default function Parent() {
  const [data, setData] = useState(
    "This message from parent component to child component"
  );
  const [pData, setPData] = useState("");
  return (
    <p>
      Parent component: {pData}
      <Child fromParent={data} toParent={setPData}></Child>
    </p>
  );
}
