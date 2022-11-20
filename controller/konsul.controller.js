const dataKonsul = require("../models/konsul");


module.exports = {
    
    addKonsul: (req, res) => {
        const newKonsul = req.body
        const konsul = new dataKonsul(newKonsul)
    
        konsul.save()

        res.status(201).json({
          message: "data has been created!",
        })
    },

    getAllKonsul: async (req, res) => {
      try {
        const konsul = await dataKonsul.find({}, "-__v").populate("pasien", "name").populate("dokter", "name")
  
        res.status(200).json({
          message: "Getting Data",
          data: konsul
        })
      } catch (error) {
        res.status(500).json({message : "Server Error"})
      }

    },

    getKonsulByID: async (req, res) => {
      try {
        const konsul = await dataKonsul.findById(req.params.id, "-__v")
  
        if(!rekmed){
          res.status(404).json({
            message : "Could not Found"
          });
      } else{
        res.status(200).json({
          message: "You Searched for",
          data: rekmed
        })
      }
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    },

    deleteKonsulByID: async (req, res) => {
    try {
      const konsul = await dataKonsul.findById(req.params.id)

        if(!konsul){
          res.status(404).json({
            message : "Could not Found"
          });
      } else{
        konsul.deleteOne()
        res.json({message: "Succes deleted data"})
      }
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    },

    updateKonsulByID: async (req, res) => {
      try {
        const konsul = await dataKonsul.findById(req.params.id, "-__v")
  
        Object.assign(konsul, req.body)
        konsul.save();
        res.status(201).send({ 
          message : "Todo updated",
          data : konsul })
     
      } catch (error) {
        res.status(500).json({ message: "Server Error" })
      }
    }
}