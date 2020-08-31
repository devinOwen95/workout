const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.Name, 'postgress', process.env.PASS,
{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
        console,log('connected to workoutLog database');
    },
    function(err){
        console.log(err);
    }
);
module.exports=sequelize