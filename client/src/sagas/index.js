import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import mainSagas from "./Main";

export default function* rootSaga(getState) {
  yield all([authSagas(), mainSagas()]);
}
