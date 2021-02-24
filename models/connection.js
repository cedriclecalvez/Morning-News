var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect(process.env.MONGODB,
    options,
    function(err){
        if(err){
        console.log(err);
        } else {
        console.log("connection ok")
        }
    }
)

module.exports = mongoose