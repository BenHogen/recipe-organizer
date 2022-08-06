function About() {
  return (
    <>
      <section className="section-about">
        <div className="u-center-text">
          <header className="about-heading">Recipes made simple</header>
        </div>
        <div className="grid">
          {/* <div className="grid__row"> */}
          <div className="box-1-of-2">
            <h3 className="heading-tertiary">
              Store all your recipes in one place
            </h3>
            <p className="paragraph">
              Create cookbooks with detailed section tabs to easily organize and
              find your recipies when you need them
            </p>
            <h3 className="heading-tertiary">Automate your shopping list</h3>
            <p className="paragraph">
              When you know what recipies you want to make add them to the
              shopping list. The web app will know exactly what ingredients you
              need and how much you should get.
            </p>
          </div>
          <div className="box-1-of-2">
            <h3 className="heading-tertiary">
              Information about this portfolio project
            </h3>
            <p className="description">
              This personal project was made to demonstrate my frontend and
              backend skills. The frontend uses Javascript, HTML and SASS for
              styling. The frontend framework is React with Redux. I used Python
              as the backend language with fastAPI as the backend API framework
              and Postgres as the database.
            </p>
            <a href="https://github.com/BenHogen/recipe-organizer" className="btn-clear">
              Git Repo &rarr;
            </a>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default About;
