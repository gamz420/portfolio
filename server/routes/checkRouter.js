const router = require("express").Router();
const { Telegraf } = require("telegraf");
const root = require("../app");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

router.get("/check", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Ваш сайт посетили");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/buttoncontact", (req, res) => {
  try {
    bot.telegram.sendMessage(
      process.env.BOT_ID,
      "Нажали на кнопку 'Связаться со мной'"
    );
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/checkaboutme", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Обо мне'");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/downloadresume", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Скачали резюме");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/checkskills", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Технологии'");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/checkcontact", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Контакты'");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/github", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "GitHub");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/linkedin", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "LinkedIn");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/facebook", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Facebook");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.get("/telegram", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Telegram");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

router.post("/message", (req, res) => {
  if (req.body.from && req.body.message) {
    try {
      bot.telegram.sendMessage(
        process.env.BOT_ID,
        `Сообщение! \n От: ${req.body.from} \n ${req.body.message}`
      );
      res.sendStatus(200);
    } catch {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
  }
});

router.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

module.exports = router;
