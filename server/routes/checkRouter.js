const router = require("express").Router();
const { Telegraf } = require("telegraf");
const Statistics = require("../db/statisticModel");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

router.get("/check", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.main += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "Ваш сайт посетили");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/buttoncontact", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.clickButtonMainContact += 1;
    statistic.save();
    bot.telegram.sendMessage(
      process.env.BOT_ID,
      "Нажали на кнопку 'Связаться со мной'"
    );
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/checkaboutme", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.aboutMe += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Обо мне'");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/downloadresume", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.clickButtonDownloadResume += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "Скачали резюме");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/checkskills", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.technologies += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Технологии'");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/checkcontact", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.contacts += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Контакты'");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/github", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.clickGitHub += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "GitHub");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/linkedin", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.clickLinkedin += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "LinkedIn");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/facebook", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.clickFacebook += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "Facebook");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get("/telegram", async (req, res) => {
  try {
    const statistic = await Statistics.findOne();
    statistic.clickTelegram += 1;
    statistic.save();
    bot.telegram.sendMessage(process.env.BOT_ID, "Telegram");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/message", async (req, res) => {
  if (req.body.from && req.body.message) {
    try {
      const statistic = await Statistics.findOne();
      statistic.sendMessage += 1;
      statistic.save();
      bot.telegram.sendMessage(
        process.env.BOT_ID,
        `Сообщение! \n От: ${req.body.from} \n ${req.body.message}`
      );
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
