const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}
/*const dbConnection = async() => { 
    const username = "yerson";
    const password = "8nYiORCGLqLVwg0S";
    const cluster = "cluster0.unc8kf1";
    const dbname = "proyectonode"
    try {
        await mongoose.connect( `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}  */


module.exports = {
    dbConnection
}