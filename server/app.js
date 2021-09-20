const express = require("express");
const cors = require("cors");
const { Telegraf } = require("telegraf");
const path = require("path");
const mongoose = require("mongoose");
const checkRouter = require("./routes/checkRouter");
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

app.use("/", checkRouter);

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

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(process.env.PORT, () => {
  console.log("Server App");
  mongoose.connect(process.env.MONGO_CONNECT, console.log("DB Started"));
  try {
    bot.launch();
    console.log("Bot launch");
  } catch (error) {
    console.log("Bot not lounch", error);
  }
});

module.exports = bot;
