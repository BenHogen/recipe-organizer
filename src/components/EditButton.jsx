import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const EditButton = ({ active = false, setActive = () => {} }) => {
  const iconButton = (icon, bool) => {
    return (
      <FontAwesomeIcon
        className="icon-button"
        onClick={() => {
          console.log("uhhhh");
          console.log(bool);
          setActive(bool);
        }}
        icon={icon}
      />
    );
  };

  const editSwitch = () => {
    if (active) {
      return iconButton(faCircleCheck, false);
    } else {
      return iconButton(faEdit, true);
    }
  };

  return editSwitch();
};

export default EditButton;
