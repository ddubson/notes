import React, {PureComponent} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {TableOfContents} from "./TableOfContents";

export class AppRoot extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top">
          Engineering Notes
        </nav>
        <Router>
          <Route path={"/"} exact={true} render={() => <TableOfContents />} />
        </Router>
      </React.Fragment>
    )
  }
}
