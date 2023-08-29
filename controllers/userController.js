const User = require('../models/userModel');

const getUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getUser = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({message: `User with the id ${id} not found`});
        }

        res.json(user);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteUser  = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            return res.status(404).json({message: `User with the id ${id} not found`});
        }

        res.json(user);

    } catch (error) {
        res.status(505).json({message: error.message});
    }
}

const updateUser  = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body );
        if(!user) {
            return res.status(404).json({message: `User with the id ${id} not found`});
        }

        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(505).json({message: error.message});
    }
}

const createUser  = async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
        console.log('user created');
    } catch (error) {
        res.status(505).json({message: error.message});
    }
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
}