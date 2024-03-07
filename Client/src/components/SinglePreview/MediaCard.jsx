// import React, { useState, useEffect } from "react";
// import MediaCard from "./MediaCard";
// import styles from "./MediaCard.module.css";
// import { apiUrl } from "../../config/apiConfig";

// const MediaContainer = () => {
//   const [songs, setSongs] = useState([]);
//   const [albums, setAlbums] = useState([]);
//   const [playlists, setPlaylists] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch songs
//         const songsResponse = await fetch(`${apiUrl}songs`);
//         const songsData = await songsResponse.json();
//         // console.log("Songs:", songsData.data.songs); // Log the fetched songs data
//         setSongs(songsData.data.songs);

//         // Fetch albums
//         const albumsResponse = await fetch(`${apiUrl}albums`);
//         const albumsData = await albumsResponse.json();
//         // console.log("Albums:", albumsData); // Log the fetched albums data
//         setAlbums(albumsData.data.albums);

//         // Fetch playlists
//         const playlistsResponse = await fetch(`${apiUrl}playlists`);
//         const playlistsData = await playlistsResponse.json();
//         // console.log("Playlists:", playlistsData); // Log the fetched playlists data
//         setPlaylists(playlistsData);
//       } catch (error) {
//         console.error("Fetching media failed:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={styles.mediaContainer}>
//       {songs?.map((song) => (
//         <MediaCard
//           key={song._id}
//           imageUrl={song.imageUrl}
//           title={song.title}
//           year={new Date(song.release_date).getFullYear()}
//           type="Song"
//         />
//       ))}
//       {albums?.map((album) => (
//         <MediaCard
//           key={album._id}
//           imageUrl={album.coverUrl}
//           title={album.title}
//           year={new Date(album.release_date).getFullYear()}
//           type="Album"
//         />
//       ))}
//       {playlists?.map((playlist) => (
//         <MediaCard
//           key={playlist._id}
//           imageUrl={playlist.imageUrl}
//           title={playlist.title}
//           year={new Date(playlist.release_date).getFullYear()}
//           type="Playlist"
//         />
//       ))}
//     </div>
//   );
// };

// export default MediaContainer;
