require("dotenv").config()
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const path = require("path")

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})

app.use(limiter)

// API
app.get("/api/status", (req, res) => {
  res.json({ message: "Backend funcionando correctamente 🚀" })
})

// Servir frontend en producción
app.use(express.static(path.join(__dirname, "../frontend/build")))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})
node_modules
frontend/node_modules
backend/node_modules
frontend/build
.env
