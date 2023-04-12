import express from "express"
import routes from "./routes/index"
import cors from "cors"

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use("/", routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})