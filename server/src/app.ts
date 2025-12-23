import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    limit: "50mb",
    extended: true
}))

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default app;