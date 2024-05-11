import Input from "../components/Input";
import { useState } from "react";

const InputTest = () => {
  const [text, setText] = useState("");
  const [texting, setTexting] = useState("");
  const handleText = (e) => {
    console.log(e.target);
    setText(e.target.value);
  };
  const handleTexting = (e) => {
    console.log(e.target);
    setTexting(e.target.value);
  };
  return (
    <div>
      <Input
        label={text}
        type={text}
        name={text}
        id={text}
        value={text}
        onChange={handleText}
      />
      <input
        type="text"
        name="texting"
        id="texting"
        value={texting}
        onChange={handleTexting}
        className="border border-black"
      ></input>
    </div>
  );
};

export default InputTest;
