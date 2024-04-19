const notifier = require('node-notifier');
const path = require('path');

console.log(path.join(__dirname, 'img/logo.jpg'));

notifier.notify({
  title: process.env.title,
  message: process.env.message,
  icon: path.join(__dirname, 'img/logo.jpg'),
});
