import { useEffect, useState } from "react";

export function changeRoute(href) {
  return (e) => {
    if (e !== null) {
      if (e.metaKey || e.ctrlKey) {
        return;
      }
      e.preventDefault();
    }

    window.history.pushState({}, "", encodeURI(href));

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    window.scrollTo(0, 0);
  };
}

const Router = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Router;
