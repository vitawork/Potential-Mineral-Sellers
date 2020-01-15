import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { showAuthMessage, hideMessage } from "actions";
import { START_SCRAPING_MATCHING_P } from "constants/ActionTypes";

import MainAPI from "../api/MainAPI";

const Scrape = async payload =>
  await MainAPI.scrape(payload)
    .then(result => result.data)
    .catch(error => error);

const Owners = async payload =>
  await MainAPI.ownersJson(payload)
    .then(result => result.data)
    .catch(error => error);

function* startScrapingMatchingGF({ payload }) {
  try {
    const obituaries = yield call(Scrape); //////////////
    console.log("ssssssssssssssss " + JSON.stringify(obituaries)); ///////////

   
    // const owners = yield call(Owners); //////////////
    // console.log("ssssssssssssssss " + JSON.stringify(owners)); ///////////


  } catch (error) {
    yield put(showAuthMessage(error));
    yield put(hideMessage());
  }
}

export function* startScrapingMatchingListen() {
  yield takeEvery(START_SCRAPING_MATCHING_P, startScrapingMatchingGF);
}

export default function* rootSaga() {
  yield all([fork(startScrapingMatchingListen)]);
}
