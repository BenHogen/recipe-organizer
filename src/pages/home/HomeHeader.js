import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faListCheck,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { changeRoute } from "../../utils/Router";

function HomeHeader() {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="header-primary">
          <span className="header-primary--main">Cook & Save</span>
          <span className="header-primary--secondary">
            take control of your recipes
          </span>
        </h1>
      </div>
      <div className="header__cards-box">
        <div className="grid">
          <div className="box-1-of-3" onClick={changeRoute("/book")}>
            <div className="feature-box feature-box--animated">
              <div className="feature-box__icon">
                <FontAwesomeIcon icon={faBookOpen} size="6x" />
              </div>
              <h3 className="heading-tertiary">Explore</h3>
              <p className="paragraph">
                Search through your recipies so you can find the perfect recipe
                for the perfect moments
              </p>
            </div>
          </div>
          <div
            className="box-1-of-3"
            onClick={changeRoute("/recipies?edit=true")}
          >
            <div className="feature-box feature-box--animated">
              <div className="feature-box__icon">
                <FontAwesomeIcon icon={faEdit} size="6x" />
              </div>
              <h3 className="heading-tertiary">Create</h3>
              <p className="paragraph">
                Find a new recipie you can't live with out? Quickly add it to
                one of your cookbooks so you never lose it.
              </p>
            </div>
          </div>
          <div className="box-1-of-3" onClick={changeRoute("/grocery-list")}>
            <div className="feature-box feature-box--animated">
              <div className="feature-box__icon">
                <FontAwesomeIcon icon={faListCheck} size="6x" />
              </div>
              <h3 className="heading-tertiary">Organize</h3>
              <p className="paragraph">
                Add the recipies you plan to make to your shopping list so you
                know exactly what you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;

/* <div className="btn__box">
          <button className="btn btn--white btn--animated">Sign Up</button>
        </div> */
