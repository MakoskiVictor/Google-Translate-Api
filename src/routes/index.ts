import express from "express";
import { translate } from "../controllers/translate";

const router = express.Router()

router.get("/", (_req, res) => {
    res.send("Backend of Google Translate Api")
})

router.post("/translate", (req, res) => {
    try {
        const [fromLanguage, toLanguage, text] = req.body
        res.send(translate({fromLanguage, toLanguage, text}))        
    } catch (error) {
      res.send(error)  
    }
})

export default router