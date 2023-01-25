import { useState } from "react";

function UseInput() {
  const [value, setValue] = useState("");

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

export default UseInput;
