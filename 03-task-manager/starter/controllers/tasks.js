

const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    // res.send('create task')
    res.json(req.body)
}

const getTask = (req, res) => {
    // res.send('get task')
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}