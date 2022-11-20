const Psikolog = require("../models/psikolog")
const UserPsikolog = require("../models/user.psikolog")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    getAllPsikolog: async (req, res) => {
        const psikolog = await Psikolog.find().populate("name")

    res.json({
    message: "success get data",
    data: psikolog
    })
},
    getPsikologByID: async (req, res) => {    
    try {
        const psikolog = await Psikolog.findById(req.params.id)
        res.status(200).json({
        message:"managed to get data",
        data:psikolog
    })
    } catch (error) {
    res.status(400).json({
        message:"failed to get data"
    })
    }
},

    addPsikolog: (req, res) => {
        const data = req.body
        const psikolog = new Psikolog(data)
        psikolog.save()

        res.json({
            message: "successfully added data"
    })
},

    deletePsikologByID: async (req, res) => {
    try{
        const psikolog = await Psikolog.deleteOne(req.params.id);
        res.status(200).json({
            message:"successfully deleted data",
            data:psikolog
        })
        } catch (error) {
        res.status(400).json({
            message:"failed deleted data"
        })
        }
},

    updatePsikologByID: async(req, res) => {
        try {
            const psikolog = await Psikolog.findById(req.params.id);

            Object.assign(psikolog, req.body)
            psikolog.save();

            res.status(200).json({
                message:"successfully updated data"
        })
        } catch (error) { 
            res.status(400).json({
                message:"failed updated data"
        })
        }
    },


    loginPsikolog: async (req, res) => {
        const data = req.body
        const user = await UserPsikolog.findOne({email: data.email})  
        const checkPassword = bcrypt.compareSync(data.password, user.password)
        const token = jwt.sign({user}, process.env.SECRET_KEY)
    
        if (checkPassword) {
          res.header('auth-psikolog',token).status(200).json({
            message: "Login Succesfull!",
            token 
          })
        } else {
          res.status(400).json({
            message: "Incorrect email or password enterted",
          })
        }
      }
}