const { Album } = require("../models/album.model");

const getAlbums = async(req, res) =>{
    try {
        const query = req.query;
        const albums =  await Album.find({ ...query });
        res.send({status: "Got albums succesfully", data: albums});
    } catch (error) {
        res.status(400).send("Error");
    }
}

module.exports = { getAlbums }