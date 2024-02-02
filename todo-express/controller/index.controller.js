const data = require('../data')
function getHomePage(req, res) {
    res.send('Hello World!')
}

function getLists(req, res) {
    const x = data;
    res.send(x)
}

function getList(req, res) {
    const { id } = req.params
    const x = data[id];
    res.send(x)
}

function deleteList(req, res) {
    const { id } = req.params
    let todo = data.filter((todo) => todo.id !== parseInt(id));
    res.send(todo)
}

function updateList(req, res) {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        let todo = data.find((todo) => todo.id === parseInt(id));
        todo.title = title
        todo.description = description
        res.json(todo)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getHomePage, getLists, getList, deleteList, updateList }