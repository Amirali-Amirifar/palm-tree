import * as express  from "express";
import * as path from "path";

const app = express();

app.get("/", (req, res) => {
    
    res.end("Hello world");
});

app.get("/page", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
});
