// import "./styles/styles.css";
import "./styles/main.scss";
import HomeHeader from "./pages/home/HomeHeader";
import About from "./pages/home/About";
import Books from "./pages/books/Books";
import Sections from "./pages/sections/Sections";
import Route from "./utils/Router";

function App() {
  return (
    <>
      <Route path="/">
        <HomeHeader />
        <main>
          <About />
        </main>
      </Route>
      <Route path="/book">
        <Books />
      </Route>
      <Route path="/book/section">
        <Sections />
      </Route>
      <Route path="/groceries">
        <div>Here is a grocery list.</div>
      </Route>
    </>
  );
}

export default App;
