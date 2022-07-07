import clsx from "clsx";

const close = "close";

function PopupPrompt({ open = false, children }) {
  return (
    <div className={clsx("popup", { [close]: !open })}>
      <div className="popup__box">
        <div className="popup__content">{children}</div>
      </div>
    </div>
  );
}

export default PopupPrompt;
