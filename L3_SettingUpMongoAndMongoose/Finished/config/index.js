var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
         return 'mongodb://'
            + configValues.uname + ':' + configValues.pwd
            + '@YOUR_MONGO_URL';
     }
    
}
