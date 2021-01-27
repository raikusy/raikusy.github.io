/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";

// onPreRouteUpdate() and onRouteUpdate() are called before onInitialClientRender,
// use initialized flag to ensure that window.onGatsbyPreRouteUpdate() and
// window.onGatsbyRouteUpdate() will not be called before
// window.onGatsbyInitialClientRender() has run
let initialized = false;

export const onInitialClientRender = () => {
  initialized = true;
  if ("onGatsbyInitialClientRender" in window && typeof window.onGatsbyInitialClientRender === "function") {
    window.onGatsbyInitialClientRender();
  }
  if ("onGatsbyRouteUpdate" in window && typeof window.onGatsbyRouteUpdate === "function") {
    window.onGatsbyRouteUpdate();
  }
};

export const onRouteUpdate = () => {
  if (initialized && "onGatsbyRouteUpdate" in window && typeof window.onGatsbyRouteUpdate === "function") {
    window.onGatsbyRouteUpdate();
  }
};

export const onPreRouteUpdate = () => {
  if (initialized && "onGatsbyPreRouteUpdate" in window && typeof window.onGatsbyPreRouteUpdate === "function") {
    window.onGatsbyPreRouteUpdate();
  }
};
