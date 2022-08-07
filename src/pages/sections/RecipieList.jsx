import { useState } from "react";
import Tab from "../../components/Tab";
import { addUrlParam, getAllUrlParams } from "../../utils/Router";

const RecipieList = ({ list, active, setActive = () => {}, color }) => {
  const [edit, setEdit] = useState("");
  const generateRecipies = (recipies) => {
    return (
      <ul className="vertical-list">
        {recipies.map((item, i) => {
          let styles = {};
          if (item.id === active) {
            styles["backgroundColor"] = color;
            styles["color"] = "White";
          }

          return (
            <Tab
              className="vertical-list__item"
              style={styles}
              key={item.id}
              id={item.id}
              title={item.name}
              edit={edit}
              setEdit={setEdit}
              setActive={(value) => {
                setActive(value);
                addUrlParam("recipie", value);
              }}
              // dispatchAction={(title) => {
              //   if (title !== item.name) {
              //     dispatch(mainSectionNameUpdateAction(title, item.id, book));
              //   }
              // }
              // }
            />
          );
        })}
      </ul>
    );
  };

  return generateRecipies(list);
};

export default RecipieList;
