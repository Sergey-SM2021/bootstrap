import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);
  const handlerClick = (action: "-" | "+") => {
    if (action === "+") {
      setValue((prev) => prev + 1);
    } else {
      setValue((prev) => prev - 1);
    }
  };
  return (
    <div>
      {value}
      <div>
        <button onClick={() => handlerClick("+")}>+</button>
        <button onClick={() => handlerClick("-")}>-</button>
      </div>
    </div>
  );
};
