import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare as plusButton } from "@fortawesome/free-solid-svg-icons";
import Tab from "../../components/Tab";
import ListItem from "../../components/ListItem";
import Recipie from "./Recipie";
import { addUrlParam, getAllUrlParams } from "../../utils/Router";
import RecipieList from "./RecipieList";

import {
  mainSectionAddAction,
  mainSectionNameUpdateAction,
} from "../../store/actions";

const tabColors = ["#DB073D", "#BEDB39", "#26A69A", "#020873"];

const getAllSections = (obj, book) => {
  const results = [];
  let sections = obj[book].sections;
  for (let id in sections) {
    results.push({
      id: id,
      name: sections[id].name,
      index: sections[id].index,
    });
  }
  return results;
};

function Sections() {
  const main = useSelector((state) => state.main);
  const [urlParams, setUrlParams] = useState({});
  const [book, setBook] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [options, setOptions] = useState([]);
  const [activeSection, setActiveSection] = useState("");
  const [activeRecipie, setActiveRecipie] = useState({});
  const [edit, setEdit] = useState("");
  const [color, setColor] = useState("#DB073D");
  const dispatch = useDispatch();

  useEffect(() => {
    const params = getAllUrlParams();
    setUrlParams(params);
    setBook(params.book);
  }, []);

  useEffect(() => {
    // Pulling the values and pulling the state through the url
    if (urlParams.book) {
      const newOptions = getAllSections(main, urlParams.book);

      if (options.length > 0 && options.length !== newOptions.length) {
        const oldTabIds = options.map((item) => {
          return item.id;
        });

        newOptions.forEach((tab) => {
          if (!oldTabIds.includes(tab.id)) {
            setEdit(tab.id);
            setActiveSection(tab.id);
            addUrlParam("section", tab.id);
          }
        });
      }
      setOptions(getAllSections(main, urlParams.book));
    }
  }, [main, urlParams]);

  useEffect(() => {
    if (book && activeSection) {
      const recipiesObj = main[book].sections[activeSection].recipies;
      const results = Object.keys(recipiesObj).map((id) => {
        return {
          id: id,
          name: recipiesObj[id].name,
          ingredients: recipiesObj[id].ingredients,
        };
      });
      setRecipies(results);
    }
  }, [activeSection]);

  const generateTabs = (tabs) => {
    return (
      <>
        {tabs.map((item, i) => {
          return (
            <Tab
              key={item.id}
              id={item.id}
              title={item.name}
              active={activeSection}
              edit={edit}
              setEdit={setEdit}
              color={tabColors[i]}
              setActive={(value) => {
                setActiveSection(value);
                addUrlParam("section", value);
              }}
              setColor={setColor}
              dispatchAction={(title) => {
                if (title !== item.name) {
                  dispatch(mainSectionNameUpdateAction(title, item.id, book));
                }
              }}
            />
          );
        })}
      </>
    );
  };

  // const generateRecipies = (recipies) => {
  //   return (
  //     <ul className="vertical-list">
  //       {recipies.map((item, i) => {
  //         let styles = {};
  //         if (item.id === activeRecipie) {
  //           styles["backgroundColor"] = color;
  //           styles["color"] = "White";
  //         }

  //         return (
  //           <ListItem
  //             className="vertical-list__item"
  //             style={{
  //               ...styles,
  //             }}
  //             onClick={(e) => {
  //               switch (e.detail) {
  //                 case 1:
  //                   setActiveRecipie(item.id);
  //                   addUrlParam("recipie", item.id);
  //                   break;
  //                 case 2:

  //               }
  //             }}
  //           >
  //             {item.name}
  //           </ListItem>
  //         );
  //       })}
  //     </ul>
  //   );
  // };

  return (
    <div>
      <div className="flex-center">
        <div className="sections-primary">
          <ul className="tab-list">
            {generateTabs(options)}
            <li className="plus-test">
              <FontAwesomeIcon
                icon={plusButton}
                className="plus-button plus-button--tab"
                onClick={() => {
                  dispatch(mainSectionAddAction("", book));
                }}
              />
            </li>
          </ul>
          <div
            className="section-box"
            style={{ borderTop: `10px solid ${color}` }}
          >
            <div
              className="section-recipies"
              style={{ borderRight: `3.5px solid ${color}` }}
            >
              {/* {generateRecipies(recipies)} */}
              <RecipieList
                list={recipies}
                active={activeRecipie}
                setActive={(value) => setActiveRecipie(value)}
                color={color}
              />
            </div>
            <Recipie recipieID={activeRecipie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
