import express from "express";
import { translate } from "../controllers/translate";


const router = express.Router()



router.get("/", (_req, res) => {
    res.send("Backend of Google Translate Api")
})

router.post("/translate", async (req, res) => {
    const {fromLanguage, toLanguage, text} = req.body
    try {
        const response = await translate({fromLanguage, toLanguage, text})
        res.status(200).json(response)        
    } catch (error) {
      res.send(error)  
    }
})

export default router