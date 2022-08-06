import { useState, useEffect } from "react";

const RecipieDescription = ({ defaultValue, stateChange }) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    if (value !== defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  if (edit) {
    return (
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault();
            stateChange(value);
            setEdit(false);
          }
        }}
        className="description-box"
      />
    );
  } else {
    return <>{value}</>;
  }
};

export default RecipieDescription;
