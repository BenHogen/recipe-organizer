import { useState } from "react";
import { useRef } from "react";
import clsx from "clsx";

const activeClass = "tab-item--active";

function Tab({ title, activeTab, color, titleSetter, colorSetter }) {
  const [edit, setEdit] = useState(false);
  const [tabTitle, setTabTitle] = useState(title);
  const ref = useRef(null);

  const escapeInputEntry = (e) => {
    if (e.target.value.length > 0) {
      setTabTitle(e.target.value);
      setEdit(false);
    } else {
      ref.current.focus();
    }
  };

  const tabTitleGen = () => {
    if (edit) {
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
        [activeClass]: title === activeTab,
      })}
      onClick={(e) => {
        switch (e.detail) {
          case 1:
            titleSetter(title);
            colorSetter(color);
            break;
          case 2:
            setEdit(true);
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
