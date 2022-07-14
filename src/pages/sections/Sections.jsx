import { useState } from "react";
import Tabs from "../../components/Tabs";

function Sections() {
  const [color, setColor] = useState("#DB073D");
  return (
    <div className="flex-center">
      <div>
        <Tabs colorSetter={setColor} />
        <div
          className="section-list"
          style={{ borderTop: `10px solid ${color}` }}
        />
      </div>
    </div>
  );
}

export default Sections;
