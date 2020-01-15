import { START_SCRAPING_MATCHING_P } from "constants/ActionTypes";

export const startScrapingMatching = payload => {
  return {
    type: START_SCRAPING_MATCHING_P,
    payload: payload
  };
};
