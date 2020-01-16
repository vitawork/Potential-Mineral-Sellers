import { START_SCRAPING_MATCHING_P, LOAD_OWNERS_AND_OBITUARIES } from "constants/ActionTypes";

export const startScrapingMatching = payload => {
  return {
    type: START_SCRAPING_MATCHING_P,
    payload: payload
  };
};
export const loadOwnersAndObituaries = payload => {
  return {
    type: LOAD_OWNERS_AND_OBITUARIES,
    payload: payload
  };
};
