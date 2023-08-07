import React, { useCallback, useState } from "react";
import * as utsuho from "utsuho";

export const App: React.FC = () => {
  const [text, setText] = useState("hello");

  const handleClick = useCallback(() => {
    setText(`add(2, 3) = ${utsuho.add(2, 3)}`);
  }, []);

  return (
    <>
      <button onClick={handleClick}>Button</button>
      <pre>{text}</pre>
    </>
  );
};
