const Song = require("../routes/song.routes");

exports.getAllSongs = async (req, res) => {
  const songs = await Song.find({});
  try {
    res.status(200).json({
      status: "success",
      data: {
        songs,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
