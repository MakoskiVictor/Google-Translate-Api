import express from "express"
/* import routes from "./routes/index" */
import cors from "cors"
import { WHITELIST } from "./constants"
import { translate } from "./controllers/translate"

const app = express()
const router = express.Router()

/* app.use(cors({
    origin: WHITELIST,
    optionsSuccessStatus: 200
})) */
app.use(express.json())

const corsOptions = {
    origin: WHITELIST,
    optionsSuccessStatus: 200
  }

const PORT = process.env.PORT || 3000

/* app.use("/", routes) */

router.get("/", (_req, res) => {
    res.send("Backend of Google Translate Api")
})

router.post("/translate", cors(corsOptions), async (req, res) => {
    const {fromLanguage, toLanguage, text} = req.body
    try {
        const response = await translate({fromLanguage, toLanguage, text})
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify(response))        
    } catch (error) {
      res.send(error)  
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})