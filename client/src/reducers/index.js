import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Settings from "./Settings";
import Auth from "./Auth";
import Main from "./Main";

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    main: Main,
    auth: Auth
  });
