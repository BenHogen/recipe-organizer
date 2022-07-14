import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Search from "../../components/Search";
import FormInput from "../../components/FormInput";
import colorGenorator from "../../utils/colorGenerator";
import { changeRoute } from "../../utils/Router";
import PopupPrompt from "../../components/PopupPrompt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare as plusButton } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const folderColors = ["#ABD699", "#ffe26a", "#75c9b7", "#c7ddcc", "#16123f"];

const testData = {
  "79630696-3efc-4c20-9f76-a365eb08d4bb": {
    title: "Mexican",
    description: "Anything and Everything related to mexican quizine",
    sections: {
      "03ae921e-3877-4949-9e08-ed3fa2debeeb": {
        title: "Chicken",
        recipies: {
          "d85f96cb-10fe-4a1b-bcc3-1c8b4ce310c5": {
            title: "Chicken Tacos",
            ingredients: [
              {
                item: "Rice",
                amount: 2,
                measurement: "cups",
              },
              {
                item: "Beans",
                amount: 2,
                measurement: "cups",
              },
              {
                item: "Beans",
                amount: 2,
                measurement: "cups",
              },
            ],
          },
        },
      },
    },
  },
  "0750fb68-f253-4db5-9d2d-045fdbe46f4b": {
    title: "Italian",
    description: "Favorite homemade italian recipies from childhood",
    sections: {
      "fe3fe03b-349b-4c81-827d-7d449ec78c8b": {
        title: "Noodles",
        recipies: {
          "d7aa4765-f1ba-443a-90a8-f6648eb9667f": {
            title: "Spaghetti",
            ingredients: [
              {
                item: "Noodles",
                amount: 2,
                measurement: "cups",
              },
              {
                item: "Meatballs",
                amount: 1,
                measurement: "lbs",
              },
              {
                item: "marinara",
                amount: 2,
                measurement: "cups",
              },
            ],
          },
        },
      },
      "63db46b6-ba0a-430b-846b-f7d0c45ff8d7": {
        title: "Chicken",
        recipies: {
          "703664e1-7a37-4589-9b07-2fe5347c8b63": {
            title: "Chicken Alfredo",
            ingredients: [
              {
                item: "Noodles",
                amount: 2,
                measurement: "cups",
              },
              {
                item: "Meatballs",
                amount: 1,
                measurement: "lbs",
              },
              {
                item: "marinara",
                amount: 2,
                measurement: "cups",
              },
            ],
          },
        },
      },
    },
  },
};

// console.log(uuidv4());

const listPanelGenerator = (data) => {
  let counter = 0;
  return (
    <div className="thin-card-grid">
      {Object.keys(data).map((item) => {
        if (counter >= folderColors.length - 1) {
          counter = 0;
        }
        let result = (
          <div
            key={item}
            className="folder-card"
            onClick={changeRoute(`/book/section?book=${item}`)}
          >
            <div
              className="folder-card__header"
              style={{
                backgroundColor: colorGenorator(),
              }}
            >
              <div
                className="folder-card__folder"
                style={{
                  backgroundColor: folderColors[counter],
                }}
              >
                <div className="folder-card__folder__paper" />
                <div className="folder-card__folder__paper" />
                <div
                  className="folder-card__folder__front"
                  style={{ backgroundColor: folderColors[counter] }}
                >
                  <h4 className="folder-card__title">{data[item].title}</h4>
                </div>
              </div>
            </div>
            <p className="folder-card__description">{data[item].description}</p>
          </div>
        );
        counter++;
        return result;
      })}
    </div>
  );
};

const addBook = (data, setter, title, description) => {
  const newBook = {
    [uuidv4()]: {
      title: title,
      description: description,
      sections: {},
    },
  };
  setter({ ...data, ...newBook });
};

function Books() {
  const cookBooks = useSelector((state) => state.recipieBooks);
  const [bookCollection, setBookCollection] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");

  useEffect(() => {
    if (searchValue.length > 0) {
      const bookOptions = {};

      for (let id in cookBooks) {
        if (
          cookBooks[id].title.toUpperCase().includes(searchValue.toUpperCase())
        ) {
          bookOptions[id] = cookBooks[id];
        }
      }
      setBookCollection(bookOptions);
    } else {
      setBookCollection(cookBooks);
    }
  }, [searchValue, cookBooks]);

  return (
    <div className="section-about">
      <div className="section-book-box">
        <div className="section-top-header">
          <div className="search-header">
            <Search
              placeholder="Search CookBooks"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={plusButton}
              className="plus-button"
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
        </div>
        {listPanelGenerator(bookCollection)}
      </div>
      <PopupPrompt open={open}>
        <div className="form-vertical">
          <div className="title-primary">Create a new cookbook</div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              addBook(
                cookBooks,
                // setcookBooks,
                () => {},
                newBookTitle,
                newBookDescription
              );
              setNewBookTitle("");
              setNewBookDescription("");
              setOpen(false);
            }}
          >
            <FormInput
              label="CookBook Title"
              onChange={(e) => {
                setNewBookTitle(e.target.value);
              }}
              value={newBookTitle}
              maxLength="31"
              required={true}
              autoComplete="off"
            />
            <FormInput
              label="Description"
              onChange={(e) => {
                setNewBookDescription(e.target.value);
              }}
              maxLength="70"
              required={true}
              value={newBookDescription}
              autoComplete="off"
            />
            <div className="flex">
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setNewBookTitle("");
                  setNewBookDescription("");
                  setOpen(false);
                }}
              >
                Cancel
              </button>
              <button className="btn" type="submit">
                Add Books
              </button>
            </div>
          </form>
        </div>
      </PopupPrompt>
    </div>
  );
}

export default Books;
