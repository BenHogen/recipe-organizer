import { useState } from "react";
import { useRef } from "react";

function Tab({
  id,
  title,
  edit,
  setEdit,
  color = "",
  setActive,
  setColor = () => {},
  dispatchAction = () => {},
  ...props
}) {
  const [tabTitle, setTabTitle] = useState(title);
  const ref = useRef(null);

  const escapeInputEntry = (e) => {
    if (e.target.value.length > 0) {
      setTabTitle(e.target.value);
      setEdit("");
      setActive(id);
      dispatchAction(e.target.value);
    } else {
      ref.current.focus();
    }
  };

  const tabTitleGen = () => {
    if (edit === id) {
      return (
        <input
          ref={ref}
          type="text"
          autoFocus={true}
          defaultValue={tabTitle}
          required
        />
      );
    } else {
      return tabTitle;
    }
  };

  return (
    <li
      {...props}
      // style={{ backgroundColor: color, ...style }}
      onClick={(e) => {
        switch (e.detail) {
          case 1:
            setActive(id);
            break;
          case 2:
            setEdit(id);
            break;
          default:
            return;
        }
      }}
      onBlur={(e) => {
        escapeInputEntry(e);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          escapeInputEntry(e);
        }
      }}
      // autoFocus={true}
    >
      {tabTitleGen()}
    </li>
  );
}

export default Tab;
