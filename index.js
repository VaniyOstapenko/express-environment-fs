const express = require('express');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('./service')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    const data = getAllEnvironment();
    res.status(200).send(data);
})

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = getEnvironmentById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.post('/', (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = createEnvironment(label, category, priority);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = updateEnvironment(id, label, category, priority)
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = deleteEnvironment(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})