// const db = require ('../models/index');
// require ('dotenv').config ();
var axios = require("axios");
var cheerio = require("cheerio");
const CSVtoJSON = require("csvtojson");

module.exports = {
  scrape: (req, res) => {
    var obituaries = [];
    axios
      .get(
        "https://www.legacy.com/obit-messenger/alert-results.aspx?alertid=346270&date=1/14/2020&Page=1&EntriesPerPage=50"
      )
      .then(function(response) {
        var $ = cheerio.load(response.data);
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% "+response.data);
        $("div.obitName").each(function(i, element) {
          // console.log(
          //   "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% " +
          //     element
          // );

          var result = {};
          result.name = $(element)
            .find("a")
            .text();

          obituaries.push(result);
        });

        // res.json();

        res.json(obituaries);
      });
  },

  ownersCsvToJson: (req, res) => {
    CSVtoJSON()
      .fromFile("./csvFiles/LOD Data - Reeves.csv")
      .then(owners => {
        res.json(owners);
      });
  }
};
