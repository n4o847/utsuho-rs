import React, { type ChangeEvent, useCallback, useState } from "react";
import * as utsuho from "utsuho";

export const App: React.FC = () => {
  const [code, setCode] = useState("");
  const [program, setProgram] = useState("");

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setCode(event.currentTarget.value);
    },
    []
  );

  const handleClick = useCallback(() => {
    setProgram(utsuho.parse(code));
  }, [code]);

  return (
    <>
      <textarea value={code} onChange={handleChange} />
      <button onClick={handleClick}>Parse</button>
      <pre style={{ whiteSpace: "pre-wrap" }}>{program}</pre>
    </>
  );
};
