// const db = require ('../models/index');
// require ('dotenv').config ();
var axios = require("axios");
var cheerio = require("cheerio");
const CSVtoJSON = require("csvtojson");
const puppeteer = require("puppeteer");
const fs = require("fs");
const cookies = require("./cookies.json");

module.exports = {
  scrape: (req, res) => {
    // const IMDB_URL = (movie_id) => `https://www.imdb.com/title/${movie_id}/`;
    // const MOVIE_ID = `tt6763664`;
    (async () => {
      /* Initiate the Puppeteer browser */
      const browser = await puppeteer.launch({ headless: false });

      const page = await browser.newPage();

      if (Object.keys(cookies).length) {
        await page.setCookie(...cookies);

        await page.goto(
          "https://www.legacy.com/obit-messenger/alert-results.aspx?alertid=346270&date=1/14/2020&Page=1&EntriesPerPage=50",
          { waitUntil: "networkidle2" }
        );
      } else {
        await page.goto(
          "https://www.legacy.com/obit-messenger/default.aspx?login=1&pageid=5&alertid=346270&date=1/14/2020",
          { waitUntil: "networkidle0" }
        );

        await page.type("#signIn_UserName", "estebanmorellb@gmail.com", {
          delay: 30
        });
        await page.type("#signIn_Password", "Sobral-59ml", { delay: 30 });

        await page.click("#signIn_btnSignIn");

        await page.waitForNavigation({ waitUntil: "networkidle0" });
        await page.waitFor(15000);

        try {
          await page.waitFor('[data-click="profile_icon"]');
        } catch (error) {
          console.log("Fail login");
          process.exit(0);
        }

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

        let currentCookies = await page.cookies();
        fs.writeFileSync("./cookies.json", JSON.stringify(currentCookies));
      }
    })();

    ////////////////////////////////////////////////////////////////////

    // const request = require("request");
    // request(
    //   "https://www.legacy.com/obit-messenger/alert-results.aspx?alertid=346270&date=1/14/2020&Page=1&EntriesPerPage=50",
    //   function(error, response, body) {
    //     // console.error('error:', error); // Print the error if one occurred
    //     console.log("statusCodeeeeeeeeeeee:", response && response.statusCode); // Print the response status code if a response was received
    //     console.log("bodyyyyyyyyyyyyyyyyy:", body); // Print the HTML for the Google homepage.
    //   }
    // ).auth('estebanmorellb@gmail.com', 'Sobral-59ml', false);

    ///////////////////////////////////////////////////////////////////////
    // var request = require("request");

    // var j = request.jar();
    // request = request.defaults({ jar : j }) //it will make the session default for every request
    // //...
    // request({
    //     url:"https://www.legacy.com/obit-messenger/default.aspx?login=1&amp;pageid=5&amp;alertid=346270&amp;date=1/15/2020",
    //     method:"POST",
    //     form:{UNENTRY:"estebanmorellb@gmail.com",PWENTRY:"Sobral-59ml"}
    // },
    // function(error,response,body){

    //     console.log("bodyyyyyyyyyyyyyyyyy:", body); // Print the HTML for the Google homepage.

    //     //Do your logic here or even another request like
    //     // request({
    //     //     url:"<ANOTHER LINK>",
    //     //     method:"GET",
    //     // }, function(error, response, body){
    //     //     //Some logic
    //     // });
    // });

    /////////////////////////////////////////////////////////////////

    var obituaries = [];
    axios
      .get(
        "https://www.legacy.com/obit-messenger/alert-results.aspx?alertid=346270&date=1/14/2020&Page=1&EntriesPerPage=50"
      )
      .then(function(response) {
        var $ = cheerio.load(response.data);
        // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% "+response.data);
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
