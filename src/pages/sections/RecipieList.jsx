import { addUrlParam } from "../../utils/Router";
import ListItem from "../../components/ListItem";

const RecipieList = ({ list, active, setActive = () => {}, color }) => {
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
            <ListItem
              key={item.id}
              className="vertical-list__item"
              style={{
                ...styles,
              }}
              onClick={() => {
                // switch (e.detail) {
                //   case 1:
                setActive(item.id);
                addUrlParam("recipie", item.id);
                //     break;
                //   case 2:
                // }
              }}
            >
              {item.name}
            </ListItem>
          );
        })}
      </ul>
    );
  };

  return generateRecipies(list);
};

export default RecipieList;
