import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare as plusButton } from "@fortawesome/free-solid-svg-icons";
import Tab from "./Tab";

const tabColors = ["#DB073D", "#BEDB39", "#26A69A", "#020873"];

function Tabs({ colorSetter }) {
  const [tabTitles, setTabTitles] = useState(["Chicken", "Beef", "Veggie"]);
  const [activeTab, setActiveTab] = useState("");

  const generateTabs = (tabs) => {
    return (
      <>
        {tabs.map((item, i) => {
          return (
            <Tab
              title={item}
              activeTab={activeTab}
              color={tabColors[i]}
              titleSetter={setActiveTab}
              colorSetter={colorSetter}
            />
          );
        })}
      </>
    );
  };

  return (
    <ul className="tab-list">
      {generateTabs(tabTitles)}
      <li className="plus-test">
        <FontAwesomeIcon
          icon={plusButton}
          className="plus-button plus-button--tab"
          onClick={() => {
            // setOpen(true);
            console.log("abnout to add a tab");
            setTabTitles([...tabTitles, "Test"]);
          }}
        />
      </li>
    </ul>
  );
}

export default Tabs;
