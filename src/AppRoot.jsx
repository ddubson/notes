import React, {PureComponent} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {TableOfContents} from "./TableOfContents";
import {Note} from "./notes/Note";

export class AppRoot extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top">
          Engineering Notes
        </nav>
        <Router>
          <Route path={"/"} exact={true} render={() => <TableOfContents />} />
          <Route path={"/notes/java/flatten-list-of-lists"} exact={true} render={() => <Note />} />
        </Router>
        <footer>
          Made with love in NY.
        </footer>
      </React.Fragment>
    )
  }
}
