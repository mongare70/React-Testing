import { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && (
        <Output>Greetings it's so nice to finally meet you!</Output>
      )}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changedTextHandler}>Changed Text</button>
    </div>
  );
};

export default Greetings;
