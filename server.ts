import express from 'express'
import CsvRoute from './app/component/csv/csv.route';
import GithubRoute from './app/component/github/github.route';

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json({ limit: '50mb' }))
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use("/github", GithubRoute())
app.use("/csv", CsvRoute())

try {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
  })
} catch (error) {
  console.log(error.message)
}
