require('dotenv').config()
const express = require('express')
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
const notFound = require('./middlewares/not-found.js')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('./public'))
app.use(notFound)

//routes
app.use('/api/v1/tasks', tasks)

const start = async function () {
  try {
    await connectDB(process.env.MONGO_URL + process.env.DATABASE_NAME)
    console.log('db is connected ....')
    app.listen(PORT, () => {
      console.log(`server listening on ${PORT} .....`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
