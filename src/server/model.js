const mongoose = require('mongoose');
mongoose.Promise=require('bluebird');
const DBURL = "mongodb://172.17.3.24:27017/bosschat";
//DBURL = process.env.DBURL;
const options = {
    useNewUrlParser: true,
    keepAlive: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 0, 
    family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(DBURL,options);


db = mongoose.connection;
db.on('error', err => {
  console.log('There was a db connection error');
});
db.once('connected', () => {
  console.log('Successfully connected to ' + DBURL);
});
db.once('disconnected', () => {
  console.log('Successfully disconnected from ' + DBURL);
});
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('dBase connection closed due to app termination');
    process.exit(0);
  });
});

const models = {
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'type':{type:String,require:true},
        'avatar':{type:String,require:true},
        'desc':{type:String,require:true},
        'title':{type:String,require:true},
        'company':{type:String,require:true},
        'money':{type:String,require:true}
    }
};

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}