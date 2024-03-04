const { Like } = require("../models/like.model");

const getUserLikes = async(req, res) =>{
    const {id} = req.params;
    try {
        const query = { user_id: id};
        const userLikes = await Like.find(query);
        req.send({status: "Got user likes succesfully", data: userLikes});
    } catch (error) {
        res.status(400).send("Error");
    }
}

const addUserLike = async (req, res) => {
    const { id } = req.params;
    const { type, user_id} = req.body;

    try {
        let likeData = { user_id: user_id };
        switch (type) {
            case "song":
                likeData.song_id = id;
                break;
            case "album":
                likeData.album_id = id;
                break;
            case "playlist":
                likeData.playlist_id = id;
                break;
            default:
                return res.status(400).send("Invalid entity type");
        }
        const newLike = new Like(likeData);
        await newLike.save();

        res.send({ status: "Added like successfully", data: newLike });
    } catch (error) {
        console.error(error);
        res.status(400).send("Error");
    }
}

const removeUserLike = async (req, res) => {
    const { id } = req.params;
    const { type, user_id } = req.body; 
    
    try {
        let query = { user_id: user_id };
        switch (type) {
            case "song":
                query.song_id = id;
                break;
            case "album":
                query.album_id = id;
                break;
            case "playlist":
                query.playlist_id = id;
                break;
            default:
                return res.status(400).send("Invalid entity type");
        }

        const removedLike = await Like.findOneAndRemove(query);

        if (!removedLike) {
            return res.status(404).send("Like not found");
        }
        res.send({ status: "Removed like successfully", data: removedLike });
    } catch (error) {
        console.error(error);
        res.status(400).send("Server Error");
    }
}


module.exports = { getUserLikes, addUserLike, removeUserLike };