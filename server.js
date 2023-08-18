const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator';

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.status(200).json("Hello world!");
});

baseRouter.post('/add', (req, res) => {
    const input = req.body;
    const ans = input.first + input.second;
    res.status(200).json({"result": ans});
});

baseRouter.post('/subtract', (req, res) => {
    const input = req.body;
    const ans = input.first - input.second;
    res.status(200).json({"result": ans});
});

app.use(baseUrl, baseRouter);

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
