const mongoose = require('mongoose');
const DatabaseConstants = require('../constants/database.constants');
mongoose.Promise = global.Promise;

const onOpen = (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(DatabaseConstants.DBMessageConstants.DATABASE_CONNECTION_SUCCESSFUL);
};

module.exports = (configuration) => {
    mongoose.connect(configuration.connectionString);

    let database = mongoose.connection;

    database.once('open', onOpen);

    require('../schemas/product');
    require('../schemas/category');
};
