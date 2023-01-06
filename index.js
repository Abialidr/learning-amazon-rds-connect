const app = require('express');
const { sequelize, connectionCheck } = require('./connection');
connectionCheck();
