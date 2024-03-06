import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import musicImg from "../../assets/music.jpg";

export default function SearchAlbums() {
  return (
    <div className="containerSearch">
      <h2>Browse all</h2>
      <div className="cardGenres">
        <Link className="musicCard GenreCard" to="/genre/Music">
          Music
          <img src={musicImg} />
        </Link>
        <Link className="podcusCard GenreCard" to="/genre/Podcuts">
          Podcuts
          <img src="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa" />
        </Link>
        <Link className="LiveCard GenreCard" to="/genre/Live Events">
          Live Events
          <img src="https://concerts.spotifycdn.com/images/live-events_category-image.jpg" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Made For You">
          Made For You
          <img src={musicImg} />
        </Link>
        <Link className="ReleasesCard GenreCard" to="/genre/New Releases">
          New Releases
          <img src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112" />
        </Link>

        <Link className="MerchCard GenreCard" to="/genre/Merch">
          Merch
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="PopCard GenreCard" to="/genre/Pop">
          Pop
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="Hip-HopCard GenreCard" to="/genre/Hip-Hop">
          Hip-Hop
          <img src="https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f" />
        </Link>
        <Link className="RockCard GenreCard" to="/genre/Rock">
          Rock
          <img src={musicImg} />
        </Link>
        <Link className="LatinCard GenreCard" to="/genre/Latin">
          Latin
          <img src="https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30" />
        </Link>
        <Link className="ChartsCard GenreCard" to="/genre/Charts">
          Podcast Charts
          <img src="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg" />
        </Link>
        <Link className="EducationalCard GenreCard" to="/genre/Educational">
          Educational
          <img src="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7" />
        </Link>
        <Link className="DocumentaryCard GenreCard" to="/genre/Documentary">
          Documentary
          <img src="https://i.scdn.co/image/ab6765630000ba8a2f514cde3ee9501e7ada4cf4" />
        </Link>
        <Link className="ComedyCard GenreCard" to="/genre/Comedy">
          Comedy
          <img src="https://i.scdn.co/image/ab6765630000ba8a77d267a5accb8911a92668e1" />
        </Link>
        <Link className="Charts2Card GenreCard" to="/genre/Charts">
          Charts
          <img src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg" />
        </Link>
        <Link
          className="DanceElectronicCard GenreCard"
          to="/genre/Dance&Electronic"
        >
          Dance/Electronic
          <img src="https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196" />
        </Link>
        <Link className="MoodCard GenreCard" to="/genre/Mood">
          Mood
          <img src="https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354" />
        </Link>
        <Link className="IndieCard GenreCard" to="/genre/Indie">
          Indie
          <img src="https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa" />
        </Link>
        <Link className="WorkoutCard GenreCard" to="/genre/Workout">
          Workout
          <img src="https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15" />
        </Link>
        <Link className="DiscoverCard GenreCard" to="/genre/Discover">
          Discover
          <img src="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg" />
        </Link>
        <Link className="CountryCard GenreCard" to="/genre/Country">
          Country
          <img src="https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" srcset="" />
        </Link>
      </div>
    </div>
  );
}
