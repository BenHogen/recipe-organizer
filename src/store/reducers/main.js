import { v4 as uuidv4 } from "uuid";

const checkNewName = (update, obj) => {
  console.log(update);
  console.log(obj);
  let result = false;
  if (update && update.length > 0) {
    result = true;
  }

  Object.keys(obj).forEach((item) => {
    if (obj[item].name === update) {
      result = false;
    }
  });

  return result;
};

const defaultState = {
  "79630696-3efc-4c20-9f76-a365eb08d4bb": {
    name: "Mexican",
    description: "Anything and Everything related to mexican quizine",
    sections: {
      "03ae921e-3877-4949-9e08-ed3fa2debeeb": {
        name: "Chicken",
        index: 1,
        recipies: {
          "d85f96cb-10fe-4a1b-bcc3-1c8b4ce310c5": {
            name: "Chicken Tacos",
            description: "The Best chicken tacos you could ever want",
            ingredients: [
              {
                id: "xalksjdklfj1",
                item: "Rice",
                amount: 2,
                measurement: "cups",
              },
              {
                id: "walksjdklfj1",
                item: "Beans",
                amount: 2,
                measurement: "cups",
              },
              {
                id: "4alksjdklfj1",
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
    name: "Italian",
    description: "Favorite homemade italian recipies from childhood",
    sections: {
      "fe3fe03b-349b-4c81-827d-7d449ec78c8b": {
        name: "Noodles",
        index: 2,
        recipies: {
          "d7aa4765-f1ba-443a-90a8-f6648eb9667f": {
            name: "Spaghetti",
            description: "This is so good it is basically from Italy",
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
          "d7aa4765-f1ba-443a-90a8-f6648eb96zzz": {
            name: "Ravioli",
            description: "This is okay i guess",
            ingredients: [
              {
                id: "balksjdklfjx",
                item: "Noodles",
                amount: 2,
                measurement: "cups",
              },
              {
                id: "balksjdklfjy",
                item: "Meatballs",
                amount: 1,
                measurement: "lbs",
              },
              {
                id: "balksjdklfjz",
                item: "marinara",
                amount: 2,
                measurement: "cups",
              },
            ],
          },
        },
      },
      "63db46b6-ba0a-430b-846b-f7d0c45ff8d7": {
        name: "Chicken",
        index: 1,
        recipies: {
          "703664e1-7a37-4589-9b07-2fe5347c8b63": {
            name: "Chicken Alfredo",
            description: "I love chicken",
            instructions: "I wonder if this will be hard to add",
            ingredients: [
              {
                id: "balksjdklfj1",
                item: "Noodles",
                amount: 2,
                measurement: "cups",
              },
              {
                id: "balksjdklfj2",
                item: "Meatballs",
                amount: 1,
                measurement: "lbs",
              },
              {
                id: "balksjdklfj3",
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

const recipieBookReducers = (state = defaultState, action) => {
  let payload = {};
  let book = undefined;
  let section = undefined;
  let recipie = undefined;
  switch (action.type) {
    case "TREE_SET":
      return action.payload;

    case "MAIN_BOOK_ADD":
      return { ...state, ...action.payload };

    case "MAIN_BOOK_NAME_UPDATE":
      payload = { ...state };
      book = payload[action.payload.book];
      if (book && checkNewName(action.payload.update, payload)) {
        book.name = action.payload.update;
      }
      return payload;

    case "MAIN_SECTION_ADD":
      payload = { ...state };
      const sections = payload[action.book].sections;

      if (sections) {
        sections[uuidv4()] = {
          name: action.name,
          recipies: [],
        };
      }
      return payload;

    case "MAIN_SECTION_NAME_UPDATE":
      payload = { ...state };
      book = payload[action.payload.book];
      if (
        book &&
        book.sections[action.payload.id] &&
        checkNewName(action.payload.update, book.sections)
      ) {
        book.sections[action.payload.id].name = action.payload.update;
      }
      return payload;

    case "MAIN_RECIPIE_ATTRIBUTE_UPDATE":
      payload = { ...state };
      const attributeBookID = action.bookID;
      const attributeSectionID = action.sectionID;
      const attributeRecipieID = action.recipieID;
      const attribute = action.attribute;
      book = payload[attributeBookID];
      if (
        book &&
        book.sections[attributeSectionID] &&
        book.sections[attributeSectionID].recipies[attributeRecipieID]
      ) {
        section = book.sections[attributeSectionID];
        recipie = section.recipies[attributeRecipieID];
        recipie[attribute] = action.value;
      }

      return payload;

    default:
      return state;
  }
};

export default recipieBookReducers;
