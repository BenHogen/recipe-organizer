import { useState } from "react";
import Tab from "./Tab";

function Tabs() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <ul className="tab-list">
      <Tab title="tab1" activeTab={activeTab} setter={setActiveTab} />
      <Tab title="tab2" activeTab={activeTab} setter={setActiveTab} />
      <Tab title="tab3" activeTab={activeTab} setter={setActiveTab} />
    </ul>
  );
}

export default Tabs;
