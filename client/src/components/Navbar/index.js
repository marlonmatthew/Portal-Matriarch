import React from "react";
import { useStateContext } from "../../utils/GlobalState";
import Pay from "../Pay/index";
import Time from "../Time/index";
import "./style.css";
import { useStateContext } from "../../utils/GlobalState";

const Index = () => {
  const [state, dispatch] = useStateContext();
  return (
    <nav class="mynav navbar navbar-expand-lg navbar-dark">
      <img class="logo" src="/assets/bubbles.svg"></img>
      <a class="navbar-brand" id="appName" href="#">
        Bubbles
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <button
                type="button"
                class="btn btn-dark btn-circle btn-sm"
                onClick={() => dispatch({ type: "open-news" })}
              >
                News
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                class="btn btn-dark btn-circle btn-sm"
                onClick={() => dispatch({ type: "open-time" })}
              >
                Time
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                class="btn btn-dark btn-circle btn-sm "
                onClick={() => dispatch({ type: "open-pay" })}
              >
                Pay
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button
                type="button"
                class="btn btn-dark btn-circle btn-sm"
                onClick={
                  !state.openDirectory
                    ? () => dispatch({ type: "open-directory" })
                    : null
                }
              >
                Directory
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button type="button" class="btn btn-dark btn-circle btn-sm">
                Logout
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
