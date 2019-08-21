import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <footer className="sub_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p className="sub-footer-text text-center">
                Contact :{" "}
                <a href="mailto:birnagerald.pro@gmail.com">
                  birnagerald.pro@gmail.com
                </a>
              </p>
            </div>
            <div className="col-md-8">
              <p className="sub-footer-text text-center">
                Designed & Code by Gérald Birna All rights reserved ©
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
