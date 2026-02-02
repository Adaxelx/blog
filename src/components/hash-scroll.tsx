import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function HashScroll() {
  const { location } = useRouterState();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(0);

    // wait for MDX to render
    requestAnimationFrame(() => {
      const el = document.getElementById(`${id}`);
      console.log(el, `#${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });
  }, [location.pathname, location.hash]);

  return null;
}
