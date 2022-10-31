//config do servidor
const express = require('express')
const app = express()
const porta = process.env.PORT || 2020                                                                                                                                                                                                                                                                                                 
app.use(express.json())
app.set('view engine', 'ejs')
app.set('view engine', 'html')

//exportar os dados de conexão do servidor
module.exports = {app,porta}
