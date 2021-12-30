const User = require('../models/user')

const createUser = (req, res) => {
    console.log('createUser!!!!', req.body)
    const newUser = new User(req.body)
    newUser.save().then((user) => {
        console.log('user created successfuly')
        res.status(200).json({
            message: 'user created successfuly'
            , newUser: user
        })
    }).catch(err => {
        console.log('error')
        res.status(400).send(err.message)
    })
}

const updateUser = (req, res) => {
    User.findOneAndUpdate({ name: req.params.name },
        { password: req.body.password }, { new: true }).then((user) => {
            res.status(200).json({ message: "upDate successfuly", update: user })
        }).catch(error => {
            res.status(400).send(error.message)
        })
}

const deleteUser = (req, res) => {
    console.log('deleteUser!!!')
    User.findOneAndDelete({ password: req.params.password }, (err, user) => {
        if (err)
            res.status(400).send(error.message)
        else {
            res.status(200).json({ message: "delete successfuly", deleted: user })
        }
    })
}

const getAllUsers = (req, res) => {
    console.log('getAllUsers!!!')
    User.find().then((allUsers) => {
        res.status(200).json({ message: "all Users", allUsers: allUsers })
    }).catch(error => {
        res.status(400).send(error.message)
    })
}

const checkUser = (req, res) => {
    console.log('checkUser!!!')
    User.findOne({ name: req.params.username, password: req.params.password }).then((user) => {
        res.status(200).json({ message: "user", allUsers: user })
    }).catch(error => {
        res.status(400).send(error.message)
    })
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    checkUser
}