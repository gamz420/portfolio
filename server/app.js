const express = require("express");
const cors = require("cors");
const { Telegraf } = require("telegraf");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bot = new Telegraf(process.env.BOT_TOKEN);

const root = path.join(__dirname, "../", "client", "build");

app.use(express.static(root));

bot.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    await ctx.reply("Что-то случилось нужно заглянуть в сервер");
  }
});

bot.start(async (ctx) => {
  ctx.reply("Система запущена");
});

app.get("/check", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Ваш сайт посетили");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/buttoncontact", (req, res) => {
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

app.get("/aboutme", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Обо мне'");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/downloadresume", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Скачали резюме");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/skills", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Технологии'");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/contact", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Перешли в 'Контакты'");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/github", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "GitHub");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/linkedin", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "LinkedIn");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/facebook", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Facebook");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/telegram", (req, res) => {
  try {
    bot.telegram.sendMessage(process.env.BOT_ID, "Telegram");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.post("/message", (req, res) => {
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

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(process.env.PORT, () => {
  console.log("Server App");
  bot.launch();
});

module.exports = bot;
