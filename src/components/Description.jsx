import { useState, useEffect } from "react";
import EditButton from "./EditButton";

const Description = ({
  defaultValue,
  stateChange,
  edit = true,
  setEdit = () => {},
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const descriptionBox = () => {
    if (edit) {
      return (
        <div className="edit-box">
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
        </div>
      );
    } else {
      return <div>{value}</div>;
    }
  };

  return (
    <>
      <EditButton
        active={edit}
        setActive={(bool) => {
          stateChange(value);
          setEdit(false);
          setEdit(bool);
        }}
      />
      {descriptionBox()}
    </>
  );
};

export default Description;
