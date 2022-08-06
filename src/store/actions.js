import { simpleActionTemplate, updateActionTemplate } from "./templates";

export const mainBookNameUpdateAction = (update, book) => {
  return (dispatch) => {
    dispatch({
      type: "MAIN_BOOK_NAME_UPDATE",
      payload: {
        update: update,
        book: book,
      },
    });
  };
};

export const mainSectionNameUpdateAction = (update, id, book) => {
  return (dispatch) => {
    dispatch({
      type: "MAIN_SECTION_NAME_UPDATE",
      payload: {
        update: update,
        id: id,
        book: book,
      },
    });
  };
};

export const mainRecipeNameUpdateAction = (update, current, book, section) => {
  return (dispatch) => {
    dispatch({
      type: "MAIN_SECTION_NAME_UPDATE",
      payload: {
        update: update,
        current: current,
        book: book,
        section: section,
      },
    });
  };
};

export const mainBookAddAction = simpleActionTemplate("MAIN_BOOK_ADD");

export const mainSectionAddAction = (name, book) => {
  return (dispatch) => {
    dispatch({
      type: "MAIN_SECTION_ADD",
      name: name,
      book: book,
    });
  };
};

export const mainRecipieAttributeUpdateAction = (
  bookID,
  sectionID,
  recipieID,
  attribute,
  value
) => {
  return (dispatch) => {
    dispatch({
      type: "MAIN_RECIPIE_ATTRIBUTE_UPDATE",
      bookID: bookID,
      sectionID: sectionID,
      recipieID: recipieID,
      attribute: attribute,
      value: value,
    });
  };
};

export const addBookAction = simpleActionTemplate("BOOKS_ADD");
export const updateBookAction = updateActionTemplate("BOOKS_UPDATE");
export const setBooksAction = simpleActionTemplate("BOOKS_SET");
export const deleteBookAction = simpleActionTemplate("BOOKS_DELETE");

export const addSectionAction = simpleActionTemplate("SECTIONS_ADD");
export const updateSectionAction = updateActionTemplate("SECTIONS_UPDATE");
export const setSectionAction = simpleActionTemplate("SECTIONS_SET");
export const deleteSectionAction = simpleActionTemplate("SECTIONS_DELETE");

// export const addRecipeAction = simpleActionTemplate("SECTIONS_ADD");
// export const updateRecipeAction = updateActionTemplate("SECTIONS_UPDATE");
// export const setRecipeAction = simpleActionTemplate("SECTIONS_SET");
// export const deleteRecipeAction = simpleActionTemplate("SECTIONS_DELETE");
