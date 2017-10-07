const express = require('express');
const app = express();
const FBBotFramework = require('fb-bot-framework');
const PORT = process.env.PORT || 1515;

const bot = new FBBotFramework({
  page_token: 'EAABZBzeQXPZAoBACpC6GrAHnNPiORe2ZAR0CGBoteyL8FhIBpEZC8nQHeY6Kb8WjMgvmvkOI4nkNfFjbAuSxAjIa8thJXkwJ8MkKhVqyEcivRyXCCaDe6cnjrIP1pU7HzckfjxiUrnYZBvc4x3I8DMVvGwqOr2ZCgebIiegHsZCiAZDZD',
  verify_token: 'x_kalawang_1'
});

app.use('/webhook', bot.middleware());

bot.on('message', function (userId, message) {
  if (message) {
    return bot.sendTextMessage(userId, "Hi, I am Lots and I'm so ecstatic to deal with you.");
  }
});

app.get('/', function (req, res) {
  res.send('hello node bot');
});

app.listen(PORT);
