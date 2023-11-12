const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    // res.send('get all tasks')

    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json(({ msg: error }))
    }
}

const createTask = async (req, res) => {
    // res.send('create task')
    // res.json(req.body)

    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json(({ msg: error }))
    }
}

const getTask = async (req, res) => {
    // res.send('get task')
    // res.json({ id: req.params.id })

    try {
        const { id: taskId } = req.params
        const task = await Task.findOne({ _id: taskId })

        if (!task) {
            console.log(`No task with id: ${taskId}`);
            return res.status(404).json({ msg: `No task with id: ${taskId}` })
        }

        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json(({ msg: error }))
    }
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