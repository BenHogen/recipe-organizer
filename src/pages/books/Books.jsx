import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../components/Search";
import FormInput from "../../components/FormInput";
import colorGenorator from "../../utils/colorGenerator";
import { changeRoute } from "../../utils/Router";
import PopupPrompt from "../../components/PopupPrompt";
import { mainBookAddAction } from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare as plusButton } from "@fortawesome/free-solid-svg-icons";

import { v4 as uuidv4 } from "uuid";

const folderColors = ["#ABD699", "#ffe26a", "#75c9b7", "#c7ddcc", "#16123f"];

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
                  <h4 className="folder-card__title">{data[item].name}</h4>
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

// const addBook = (data, setter, title, description) => {
//   const newBook = {
//     [uuidv4()]: {
//       name: title,
//       description: description,
//       sections: {},
//     },
//   };
//   setter({ ...data, ...newBook });
// };


function Books() {
  const cookBooks = useSelector((state) => state.main);
  const [bookCollection, setBookCollection] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue.length > 0) {
      const bookOptions = {};

      for (let id in cookBooks) {
        if (
          cookBooks[id].name.toUpperCase().includes(searchValue.toUpperCase())
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
              // addBook(
              //   cookBooks,
              //   // setcookBooks,
              //   useDispatch(mainBookAddAction())
              //   newBookTitle,
              //   newBookDescription
              // );
              dispatch(
                mainBookAddAction({
                  [uuidv4()]: {
                    name: newBookTitle,
                    description: newBookDescription,
                    sections: {},
                  },
                })
              )
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
