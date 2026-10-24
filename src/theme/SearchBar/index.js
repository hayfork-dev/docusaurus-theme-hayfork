import React, { useEffect, useRef } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

const MOUNT_ID = "hayfork-searchbar";

// The widget builds its search box once per page load and keeps its listeners on the document.
// Docusaurus remounts the navbar on every route change, which detaches the box along with the old
// container, so keep a reference and move the same box into each new container. Loading the
// script again would add a second box and a second keyboard shortcut.
let box = null;
let loading = false;

export default function SearchBar() {
  const options = usePluginData("docusaurus-theme-hayfork");
  const ref = useRef(null);

  useEffect(() => {
    if (box) {
      ref.current.appendChild(box);
      return;
    }
    if (loading) return; // The script is still loading and will find #hayfork-searchbar itself.
    loading = true;
    const script = document.createElement("script");
    script.src = options.scriptUrl;
    script.async = true;
    script.onload = () => {
      box = document.querySelector("[data-hayfork-search]");
    };
    script.setAttribute("data-key", options.key);
    script.setAttribute("data-collection", options.collection);
    script.setAttribute("data-target", "#" + MOUNT_ID);
    script.setAttribute("data-placeholder", options.placeholder);
    script.setAttribute("data-theme", options.theme);
    script.setAttribute("data-results", String(options.results));
    script.setAttribute("data-shortcut", String(options.shortcut));
    document.body.appendChild(script);
  }, []);

  return React.createElement("div", { id: MOUNT_ID, ref });
}
