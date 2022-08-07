import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Description from "../../components/Description";
import { mainRecipieAttributeUpdateAction } from "../../store/actions";
import { useURLSearch, getAllUrlParams, addUrlParam } from "../../utils/Router";

const Recipie = ({ recipieID }) => {
  const [urlParams, setUrlParams] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState(true);
  const [editIngredients, setEditIngredients] = useState(true);
  const [editInstructions, setEditInstructions] = useState(true);
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
        setInstructions(mainRecipie.instructions);
        setIngredients(mainRecipie.ingredients);
      }
    }
    return () => {
      setDescription("");
      setInstructions("");
      setIngredients({});
      setTitle("");
    };
  }, [urlSearch]);

  return (
    <div className="recipie-page">
      <h2>{title}</h2>
      <Description
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
        edit={editDescription}
        setEdit={setEditDescription}
        defaultValue={description}
      />
      <h3>Ingredients</h3>
      <h3>Instructions</h3>
      <Description
        stateChange={(value) => {
          dispatch(
            mainRecipieAttributeUpdateAction(
              urlParams.book,
              urlParams.section,
              urlParams.recipie,
              "instructions",
              value
            )
          );
        }}
        edit={editInstructions}
        setEdit={setEditInstructions}
        defaultValue={instructions}
      />
    </div>
  );
};

export default Recipie;

// You will need to have a base setup for when an id is wrong.
