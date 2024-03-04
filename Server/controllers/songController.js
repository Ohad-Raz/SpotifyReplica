const Song = require("../routes/song.routes");


exports.createSong = async (req, res) => {
  try {
    const { title, artist_id, album_id, genre, release_date, duration, lyrics, rating } = req.body;
    const song = new Song({
      title,
      artist_id,
      album_id,
      genre,
      release_date,
      duration,
      lyrics,
      rating
    });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


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

exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const { title, artist_id, album_id, genre, release_date, duration, lyrics, rating } = req.body;
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    song.title = title;
    song.artist_id = artist_id;
    song.album_id = album_id;
    song.genre = genre;
    song.release_date = release_date;
    song.duration = duration;
    song.lyrics = lyrics;
    song.rating = rating;
    song.updated_at = Date.now();
    await song.save();
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    await song.remove();
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};