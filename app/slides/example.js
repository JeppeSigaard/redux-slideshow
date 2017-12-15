import React, { Component } from "react";
import slideWrapper from "../components/slidewrapper";

class Slide extends Component {
  constructor() {
    super();
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    e.preventDefault();
    this.props.login(!this.props.loggedIn);
  }

  render() {
    const { loggedIn } = this.props;
    let appClass = "login-app";
    if (loggedIn) appClass += " logged-in";

    return (
      <div className="slide-content">
        <div className={appClass}>
          <header className="login-header">
            <div className="login-logo">CoolLogo</div>
            <div className="login-header-user">
              <div className="user-icon" />
              {loggedIn && <div className="user-name">UserName</div>}
            </div>
          </header>
          <div className="login-content">
            <main>
              {!loggedIn && (
                <div className="main-container">
                  <div className="item">
                    <header />
                    <span>Any ol' Article</span>
                  </div>
                  <div className="item">
                    <header />
                    <span>Any ol' Article</span>
                  </div>
                  <div className="item">
                    <header />
                    <span>Any ol' Article</span>
                  </div>
                  <div className="item">
                    <header />
                    <span>Any ol' Article</span>
                  </div>
                </div>
              )}
              {loggedIn && (
                <div className="main-container">
                  <div className="item">
                    <header />
                    <span>User specific Article</span>
                  </div>
                  <div className="item">
                    <header />
                    <span>User specific Article</span>
                  </div>
                  <div className="item">
                    <header />
                    <span>User specific Article</span>
                  </div>
                  <div className="item">
                    <header />
                    <span>User specific Article</span>
                  </div>
                </div>
              )}
            </main>
            <aside>
              <a href="#" className="login-button" onClick={this.onLogin}>
                {loggedIn ? "sign out" : "sign in"}
              </a>
              {loggedIn && (
                <ul className="user-menu">
                  <li>User specific content</li>
                  <li>User specific content</li>
                  <li>User specific content</li>
                  <li>User specific content</li>
                </ul>
              )}
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default slideWrapper(Slide);
