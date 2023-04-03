import Home from "./pages/Home.js";
import PostsList from "./pages/PostsList.js";
import PostView from "./pages/PostView.js";

const navigateTo = (url) => {
  history.pushState({}, "", url);
  router();
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => match.result[1]?.match(/\d+/g)?.[0] || null;

const router = async () => {
  const routes = [
    {
      path: "/vite-project/",
      view: Home,
    },
    {
      path: "/vite-project/about",
      view: Home,
    },
    {
      path: "/vite-project/contact",
      view: Home,
    },
    {
      path: "/vite-project/posts",
      view: PostsList,
    },
    {
      path: "/vite-project/posts/:id",
      view: PostView,
    },
  ];

  const matchLocationRoute = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  // match route with routes
  let routeMatch = matchLocationRoute.find((path) => path.result !== null);

  // You can redirect to 404 or to home page
  if (!routeMatch) {
    routeMatch = {
      route: routes[0],
      result: true,
    };
  }
  // populate on browser back/forward action
  window.addEventListener("popstate", router);

  //   show page content
  const view = new routeMatch.route.view(getParams(routeMatch));

  // select div where you want to insert html and
  const content = document.querySelector("#content");
  content.innerHTML = await view.getHtml();
  // routeMatch.route.view(getParams(routeMatch));
};

// Listen for events after all elementas are loaded
document.addEventListener("DOMContentLoaded", () => {
  // listen for click events on data-link atributes (navigation)
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
});
