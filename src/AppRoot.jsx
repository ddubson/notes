import React, { PureComponent } from "react";

export class AppRoot extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-fixed-top">
          Engineering Notes
        </nav>
        <div className="container">
          <section className="note-section">
            <h5>Java</h5>
            <div className="note-section-body">
              <ul>
                <li>Flatten a list of lists</li>
              </ul>
            </div>
          </section>
        </div>
      </React.Fragment>
    )
  }
}
