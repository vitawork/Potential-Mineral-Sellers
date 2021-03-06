import axios from "axios";

export default {
  // Gets the obituaries json info
  scrape: function() {
    return axios.get("/api/scrape/");
  },

  // Gets the owners json  info
  ownersJson: function() {
    return axios.get("/api/ownersJson/");
  },

  // Save matches to a csv file
  saveMatches: function(matchesData) {
    return axios.post("/api/saveMatchesCsv/", matchesData);
  }
};
