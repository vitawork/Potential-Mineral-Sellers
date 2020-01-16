const controller = require("../controllers/index");

module.exports = (app, upload) => {
  app.get("/api/scrape", controller.MainCont.scrape);

  app.get("/api/ownersJson", controller.MainCont.ownersCsvToJson);

  app.post("/api/saveMatchesCsv", controller.MainCont.saveMatchesCsv);
};
