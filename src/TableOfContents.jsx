import React from "react";
import {Link, NavLink} from "react-router-dom";

export const TableOfContents = (props) => (
  <div className="container">
    <section className="note-section">
      <h5>Java 8+</h5>
      <div className="note-section-body">
        <ul>
          <li><NavLink to="/notes/java/flatten-list-of-lists">Flatten a list of lists</NavLink></li>
          <li>Merge two lists</li>
        </ul>
      </div>
    </section>
  </div>
);