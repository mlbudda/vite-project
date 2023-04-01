const navigateTo = (url) => {
  history.pushState({}, "", url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: () => console.log("This is home page /"),
    },
    {
      path: "/about",
      view: () => console.log("This is About page /about"),
    },
    {
      path: "/contact",
      view: () => console.log("This is Contact /contact"),
    },
  ];

  const matchLocationRoute = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  // match route with routes
  let routeMatch = matchLocationRoute.find((path) => path.isMatch);

  // You can redirect to 404 or to home page
  if (!routeMatch) {
    routeMatch = {
      route: routes[0],
      isMatch: true,
    };
  }
  // populate on browser back/forward action
  window.addEventListener("popstate", router);

  //   show page content
  routeMatch.route.view();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
});
