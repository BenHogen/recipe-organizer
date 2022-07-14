const defaultState = {
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

const recipieBookReducers = (state = defaultState, action) => {
  let payload = {};
  switch (action.type) {
    case "TREE_SET":
      return action.payload;

    case "TREE_BOOKNAME_UPDATE":
      payload = { ...state };
      payload[action.payload.new] = payload[action.payload.current];
      delete payload[action.payload.current];
      return payload;

    case "TREE_SECTION_NAME_UPDATE":
      payload = { ...state };
      payload[action.payload.new] = payload[action.payload.current];
      delete payload[action.payload.current];
      return payload;

    default:
      return state;
  }
};

export default recipieBookReducers;
