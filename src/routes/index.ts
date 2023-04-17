import express from "express";
/* import { translate } from "../controllers/translate"; */


const router = express.Router()



router.get("/", (_req, res) => {
    res.send("Backend of Google Translate Api")
})

router.post("/translate", async (_req, res) => {
    /* const {fromLanguage, toLanguage, text} = req.body */
    try {
        /* const response = await translate({fromLanguage, toLanguage, text})
        res.setHeader('Content-Type', 'application/json') */
        res.send(JSON.stringify({"Hola me llamo Victor desde el back :D"}))        
    } catch (error) {
      res.send(error)  
    }
})

export default router