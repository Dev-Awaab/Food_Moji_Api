import express from 'express';
import App from './services/ExpressApp'
import connectDB from './config/db';

const StartServer = async () => {
  const app = express()

  connectDB()

  await App(app)

  app.listen(8000, () => {
    console.log('Server listening on port 8000')
  })
}

StartServer()