const express = require('express')
const mysql = require('mysql2/promise')
const { Client } = require('pg')
const os = require('os')
const dns = require('dns').promises

const app = express()
const PORT = 3000

app.get('/', async (req, res) => {
  // IP самого Node.js контейнера
  const ip = Object.values(os.networkInterfaces())
    .flat()
    .find((net) => net.family === 'IPv4' && !net.internal)?.address

  let mysqlData, pgData
  let mysqlIP, pgIP

  try {
    // Получаем IP MySQL контейнера через DNS
    const mysqlLookup = await dns.lookup('mysql_db')
    mysqlIP = mysqlLookup.address

    // Подключение к MySQL
    const mysqlConn = await mysql.createConnection({
      host: 'mysql_db',
      user: 'student',
      password: 'studpass',
      database: 'testdb',
    })
    ;[mysqlData] = await mysqlConn.query('SELECT NOW() as time')
    await mysqlConn.end()
  } catch (e) {
    mysqlData = { error: e.message }
  }

  try {
    // Получаем IP PostgreSQL контейнера через DNS
    const pgLookup = await dns.lookup('pg_db')
    pgIP = pgLookup.address

    // Подключение к PostgreSQL
    const pgClient = new Client({
      host: 'pg_db',
      user: 'student',
      password: 'pgpass',
      database: 'testdb',
    })

    await pgClient.connect()
    const result = await pgClient.query('SELECT NOW()')
    pgData = result.rows
    await pgClient.end()
  } catch (e) {
    pgData = { error: e.message }
  }

  res.json({
    node_container_ip: ip,
    mysql: {
      ip: mysqlIP,
      data: mysqlData,
    },
    postgres: {
      ip: pgIP,
      data: pgData,
    },
  })
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})
