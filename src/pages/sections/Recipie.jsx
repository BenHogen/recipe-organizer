import { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux/es/exports";
import RecipieDescription from "../../components/RecipieDescription";
import { mainRecipieAttributeUpdateAction } from "../../store/actions";
import { useURLSearch, getAllUrlParams, addUrlParam } from "../../utils/Router";

const Recipie = () => {
  const [urlParams, setUrlParams] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState({});
  const urlSearch = useURLSearch();
  const main = useSelector((state) => state.main);
  const dispatch = useDispatch();

  useEffect(() => {
    // getting and setting state from url
    const params = getAllUrlParams(urlSearch);
    setUrlParams(params);
    const book = main[params.book];
    if (book) {
      const section = book.sections[params.section];
      if (section && section.recipies[params.recipie]) {
        const mainRecipie = section.recipies[params.recipie];
        setDescription(mainRecipie.description);
        setTitle(mainRecipie.name);
        setIngredients(mainRecipie.ingredients);
      }
    }
  }, [urlSearch]);

  return (
    <div className="recipie-page">
      <h2>{title}</h2>
      <RecipieDescription
        stateChange={(value) => {
          dispatch(
            mainRecipieAttributeUpdateAction(
              urlParams.book,
              urlParams.section,
              urlParams.recipie,
              "description",
              value
            )
          );
        }}
        defaultValue={description}
      />
    </div>
  );
};

export default Recipie;
