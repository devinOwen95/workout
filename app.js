let express= require('express');
let app = express();
let sequelize = require('./db');
let journal = require('./controllers/journalcontroller');


sequelize.sync();

app.use('/journal', journal)

app.listen(3000, function(){
    console.log('App is listening one port 3000');
})