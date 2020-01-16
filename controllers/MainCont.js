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
      const browser = await puppeteer.launch();

      const page = await browser.newPage();

      if (Object.keys(cookies).length) {
        await page.setCookie(...cookies);

        await page.goto(
          "https://www.legacy.com/obit-messenger/alert-results.aspx?alertid=346270&date=1/14/2020&Page=1&EntriesPerPage=50",
          { waitUntil: "networkidle2" }
        );
      } else {
        await page.goto(
          "https://www.legacy.com/obit-messenger/alert-results.aspx?alertid=346270&date=1/14/2020&Page=1&EntriesPerPage=50",
          { waitUntil: "networkidle0" }
        );

        await page.type("#signIn_UserName", "estebanmorellb@gmail.com", {
          delay: 30
        });
        await page.type("#signIn_Password", "Sobral-59ml", { delay: 30 });

        await page.click("#signIn_btnSignIn");

        // await page.waitForNavigation({ waitUntil: "networkidle0" });
        await page.waitFor(15000);

        // try {
        //   await page.waitFor('[data-click="profile_icon"]');
        // } catch (error) {
        //   console.log("Fail login");
        //   process.exit(0);
        // }

        let currentCookies = await page.cookies();
        // fs.writeFileSync("./cookies.json", JSON.stringify(currentCookies));

        const obituaries = await page.evaluate(() => {
          const obituary = [];

          const nodes = document.querySelectorAll(".obitName");
          Array.from(nodes).forEach(node => {
            let name = node.innerText;

            let index = name.indexOf("(");
            index =
              name.indexOf("*") !== -1 && name.indexOf("*") < index
                ? name.indexOf("*")
                : index;

            obituary.push({
              name: index === -1 ? name : name.slice(0, index)
            });
          });
          // obituary.push({ name: "SHAIDA JOHN H" });/////////////
          return obituary;
        });
        res.json(obituaries);
      }
    })();
  },

  ownersCsvToJson: (req, res) => {
    CSVtoJSON()
      .fromFile("./csvFiles/LOD Data - Reeves.csv")
      .then(owners => {
        res.json(owners);
      });
  }
};
