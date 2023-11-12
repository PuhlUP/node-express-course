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

const deleteTask = async (req, res) => {
    // res.send('delete task')
    try {
        const { id: taskId } = req.params
        const task = await Task.findOneAndDelete({ _id: taskId })

        if (!task) {
            console.log(`No task with id: ${taskId}`);
            return res.status(404).json({ msg: `No task with id: ${taskId}` })
        }

        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json(({ msg: error }))
    }
}


const updateTask = async (req, res) => {
    // res.send('update task')

    try {
        const { id: taskId } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            console.log(`No task with id: ${taskId}`);
            return res.status(404).json({ msg: `No task with id: ${taskId}` })
        }

        res.status(200).json({ id: taskId, data: req.body })
    } catch (error) {
        res.status(500).json(({ msg: error }))
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}