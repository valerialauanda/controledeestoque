const knex = require("knex")
const configuration = require("../../knexfile")
const environment = process.env.DB_ENV || "development"



const connection = knex(configuration.development)
module.exports = connection