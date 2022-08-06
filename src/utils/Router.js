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

export const useURLSearch = () => {
  // Listens to parameters changing in the url search bar
  const [search, setSearch] = useState(window.location.search);
  const listenToPopstate = () => {
    const winSearch = window.location.search;
    setSearch(winSearch);
  };

  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      // removes listener when destroyed
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return search;
};

export const getAllUrlParams = (urlSearch = window.location.search) => {
  // returns object of all url params
  const urls = {};
  const search = new URLSearchParams(urlSearch);
  for (let param of search.keys()) {
    urls[param] = search.get(param);
  }
  return urls;
};

export const addUrlParam = (label, value) => {
  const url = new URL(window.location);
  url.searchParams.set(label, value);
  window.history.pushState({}, "", url);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};

const Router = ({ path, children }) => {
  // Used for changing the page when clicked.
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
