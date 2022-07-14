import debounce from "../utils/debounce";

function Search({ placeholder, onChange }) {
  return (
    <div>
      <input
        className="box-input box-input__lg"
        type="text"
        id="search"
        placeholder={placeholder}
        onChange={debounce(onChange)}
      />
    </div>
  );
}

export default Search;
