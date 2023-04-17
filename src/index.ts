import express from "express"
import routes from "./routes/index"
/* import cors from "cors" */
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
/* import { WHITELIST } from "./constants" */

const app = express()

/* app.use(cors({
    origin: WHITELIST,
    optionsSuccessStatus: 200
})) */

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://google-translate-clonned.vercel.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

const PORT = process.env.PORT || 3000

app.use("/", routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})