export const checkNew = (update, obj) => {
  let result = false;
  if (update && update.length > 0 && !Object.keys(obj).includes(update)) {
    result = true;
  }

  return result;
};

export const arrayOfKeysReducerTemplate = (name, defaultState) => {
  return (state = defaultState, action) => {
    let payload = [];
    switch (action.type) {
      case `${name}_ADD`:
        return [...state, action.payload];

      case `${name}_DELETE`:
        payload = [...state];
        if (payload.includes(action.payload)) {
          return payload.filter((item) => {
            return item !== action.payload;
          });
        }
        return payload;

      case `${name}_UPDATE`:
        payload = [...state];
        if (checkNew) {
          return payload.map((item) => {
            if (item !== action.payload.current) {
              return item;
            } else {
              return action.payload.update;
            }
          });
        }
        return payload;

      case `${name}_SET`:
        return action.payload;

      default:
        return state;
    }
  };
};
