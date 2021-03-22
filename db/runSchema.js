const express = require('express');
// const routes = require('./routes');
const sequelize = require('sequelize'); 
const schema = require('schema.sql');

const app = express();
const PORT = process.env.PORT || 3001;  

///////////NEED HELP BELOW TO RUN Deploy DATABASE in db runschema file
const deploy = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- synced -----\n');
  
    
    await
    process.exit(0);
  };
  
  deploy();