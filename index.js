// Подключение Express
const express = require ('express');
const app = express ();
// Обработка параметров ссылки
app.get('/index', function (req, res) {
    res.send("Главная страница /index");
});
app.get('/about', function (req, res) {
    res.send("Страница описания /about");
});
app.get('/settings', function (req, res) {
    res.send("Страница настроек /settings");
});
app.get('/settings/:messageId', function(req,res){
    // Вывод сообщения на страницу
    res.send('<h1>Страница настроек /settings</h1>' + 'Привет ' + req.params['messageId'])
});
app.listen(8080);
