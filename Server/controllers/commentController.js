const { Comment } = require("../models/comment.model");

const getComments = async(req, res) =>{
    try {
        const query = req.query;
        const comments =  await Comment.find({ ...query });
        res.send({status: "Got comments succesfully", data: comments});
    } catch (error) {
        res.status(400).send("Error");
    }
}

const getSongComments = async(req, res) => {
    const {id} = req.params;
    try {
        const songComments = await find({song_id: id});
        if(songComments) return res.send({data: songComments});
        res.send("Couldn't find song's comments");
    } catch (error) {
        res.status(400).send({error: error.message});
    }
}
