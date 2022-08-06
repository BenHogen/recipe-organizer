import { useState } from "react";
import { useRef } from "react";
import clsx from "clsx";

const activeClass = "tab-item--active";

function Tab({ id, title, active, edit, setEdit, color, setActive, setColor , dispatchAction}) {
  const [tabTitle, setTabTitle] = useState(title);
  const ref = useRef(null);
  

  const escapeInputEntry = (e) => {
    if (e.target.value.length > 0) {
      setTabTitle(e.target.value);
      setEdit("");
      setColor(color);
      setActive(id)
      dispatchAction(e.target.value)
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
      style={{ backgroundColor: color }}
      className={clsx("tab-item", {
        [activeClass]: id === active,
      })}
      onClick={(e) => {
        switch (e.detail) {
          case 1:
            setActive(id);
            setColor(color);
            break;
          case 2:
            setEdit(id);
            break;
          case 3:
            console.log("triple click");
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
