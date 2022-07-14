const generalActionTemplate = (type) => {
  return (payload) => {
    return (dispatch) => {
      dispatch({
        type: type,
        payload: payload,
      });
    };
  };
};

export const addBookAction = generalActionTemplate("BOOKS_ADD");
export const updateBookAction = generalActionTemplate("BOOKS_UPDATE");
export const setBooksAction = generalActionTemplate("BOOKS_SET");
export const deleteBookAction = generalActionTemplate("BOOKS_DELETE");

export const addSectionAction = generalActionTemplate("SECTIONS_ADD");
export const updateSectionAction = generalActionTemplate("SECTIONS_UPDATE");
export const setSectionssAction = generalActionTemplate("SECTIONS_SET");
export const deleteSectionAction = generalActionTemplate("SECTIONS_DELETE");
