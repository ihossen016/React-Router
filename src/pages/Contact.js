import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;

  const queryPrams = new URLSearchParams(queryString);
  const name = queryPrams.get("name");

  return (
    <div>
      <h2> {name}, Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        voluptatem beatae quas. Laudantium necessitatibus animi quaerat, quis
        eligendi repellat dolores hic, iste, in ab sint exercitationem vitae
        illo! Pariatur, consequatur?
      </p>
    </div>
  );
}
