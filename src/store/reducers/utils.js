export const arrayOfKeysReducerTemplate = (name, defaultState) => {
  return (state = defaultState, action) => {
    switch (action.type) {
      case `${name}_ADD`:
        return [...state, action.payload];

      case `${name}_DELETE`:
        return state.filter((item) => {
          return item !== action.payload;
        });

      case `${name}_UPDATE`:
        return state.map((item) => {
          if (item !== action.payload.current) {
            return item;
          } else {
            return action.payload.new;
          }
        });
      case `${name}_SET`:
        return action.payload;
      default:
        return state;
    }
  };
};


