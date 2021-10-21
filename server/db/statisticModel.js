const { Schema, model, pluralize } = require("mongoose");

pluralize(null);

const statisticsSchema = new Schema({
  main: Number,
  clickButtonMainContact: Number,
  aboutMe: Number,
  clickButtonDownloadResume: Number,
  technologies: Number,
  contacts: Number,
  clickGitHub: Number,
  clickLinkedin: Number,
  clickFacebook: Number,
  clickTelegram: Number,
  sendMessage: Number,
  changeTheme: Number,
  changeLanguage: Number,
});

module.exports = model("statistics", statisticsSchema);
