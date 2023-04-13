import express from "express"
import routes from "./routes/index"
import cors from "cors"
import { LINKED_FRONT } from "../constants"

const app = express()

app.use(cors({
    origin: LINKED_FRONT
}))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use("/", routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})