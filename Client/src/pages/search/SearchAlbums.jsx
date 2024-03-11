import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import musicImg from "../../assets/music.jpg";

export default function SearchAlbums() {
  return (
    <div className="containerSearch">
      <h2>Browse all</h2>
      <div className="cardGenres">
        <Link
          className="musicCard GenreCard"
          to="/genre/65e8594577fadefcf1f6c781/Music"
        >
          Music
          <img src={musicImg} />
        </Link>
        <Link
          className="podcusCard GenreCard"
          to="/genre/65e8595477fadefcf1f6c783/Podcasts"
        >
          Podcasts
          <img src="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa" />
        </Link>
        <Link
          className="LiveCard GenreCard"
          to="/genre/65e859b577fadefcf1f6c785/Live Events"
        >
          Live Events
          <img src="https://concerts.spotifycdn.com/images/live-events_category-image.jpg" />
        </Link>
        <Link
          className="madeForYouCard GenreCard"
          to="/genre/65e859bc77fadefcf1f6c787/Made For You"
        >
          Made For You
          <img src={musicImg} />
        </Link>
        <Link
          className="ReleasesCard GenreCard"
          to="/genre/65e859c577fadefcf1f6c789/New Releases"
        >
          New Releases
          <img src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112" />
        </Link>

        <Link
          className="MerchCard GenreCard"
          to="/genre/65e859cd77fadefcf1f6c78b/Merch"
        >
          Merch
          <img src={musicImg} alt="" />
        </Link>
        <Link
          className="PopCard GenreCard"
          to="/genre/65e859d577fadefcf1f6c78d/Pop"
        >
          Pop
          <img src={musicImg} alt="" />
        </Link>
        <Link
          className="Hip-HopCard GenreCard"
          to="/genre/65e859dc77fadefcf1f6c78f/Hip-Hop"
        >
          Hip-Hop
          <img src="https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f" />
        </Link>
        <Link
          className="RockCard GenreCard"
          to="/genre/65e859e277fadefcf1f6c791/Rock"
        >
          Rock
          <img src={musicImg} />
        </Link>
        <Link
          className="LatinCard GenreCard"
          to="/genre/65e859e977fadefcf1f6c793/Latin"
        >
          Latin
          <img src="https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30" />
        </Link>
        <Link
          className="ChartsCard GenreCard"
          to="/genre/65e859ef77fadefcf1f6c795/Podcast Charts"
        >
          Podcast Charts
          <img src="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg" />
        </Link>
        <Link
          className="EducationalCard GenreCard"
          to="/genre/65e859f577fadefcf1f6c797/Educational"
        >
          Educational
          <img src="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7" />
        </Link>
        <Link
          className="DocumentaryCard GenreCard"
          to="/genre/65e859fe77fadefcf1f6c799/Documentary"
        >
          Documentary
          <img src="https://i.scdn.co/image/ab6765630000ba8a2f514cde3ee9501e7ada4cf4" />
        </Link>
        <Link
          className="ComedyCard GenreCard"
          to="/genre/65e85a0577fadefcf1f6c79b/Comedy"
        >
          Comedy
          <img src="https://i.scdn.co/image/ab6765630000ba8a77d267a5accb8911a92668e1" />
        </Link>
        <Link
          className="Charts2Card GenreCard"
          to="/genre/65e85a0b77fadefcf1f6c79d/Charts"
        >
          Charts
          <img src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg" />
        </Link>

        <Link
          className="DanceElectronicCard GenreCard"
          to="/genre/65e85a1277fadefcf1f6c79f/Dance/Electronic"
        >
          Dance/Electronic
          <img src="https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196" />
        </Link>
        <Link
          className="MoodCard GenreCard"
          to="/genre/65e85a1877fadefcf1f6c7a1/Mood"
        >
          Mood
          <img src="https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354" />
        </Link>
        <Link
          className="IndieCard GenreCard"
          to="/genre/65e85a1d77fadefcf1f6c7a3/Indie"
        >
          Indie
          <img src="https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa" />
        </Link>
        <Link
          className="WorkoutCard GenreCard"
          to="/genre/65e85a2477fadefcf1f6c7a5/Workout"
        >
          Workout
          <img src="https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15" />
        </Link>
        <Link
          className="DiscoverCard GenreCard"
          to="/genre/65e85a2977fadefcf1f6c7a7/Discover"
        >
          Discover
          <img src="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg" />
        </Link>

        <Link
          className="CountryCard GenreCard"
          to="/genre/65eedb9d74bb29fd53dc2591/Country"
        >
          Country
          <img src="https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e" />
        </Link>
        <Link
          className="K-popCard GenreCard"
          to="/genre/65eedba674bb29fd53dc2593/K-pop"
        >
          K-pop
          <img
            src="https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a"
            alt=""
          />
        </Link>
        <Link
          className="mChillCard GenreCard"
          to="/genre/65eedbae74bb29fd53dc2595/Chill"
        >
          Chill
          <img
            src="https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170"
            alt=""
          />
        </Link>
        <Link
          className="SleepCard GenreCard"
          to="/genre/65eedbb574bb29fd53dc2597/Sleep"
        >
          Sleep
          <img
            src="https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0"
            alt=""
          />
        </Link>
        <Link
          className="AtHomeCard GenreCard"
          to="/genre/65eedbba74bb29fd53dc2599/At Home"
        >
          At Home
          <img src={musicImg} alt="" />
        </Link>
        <Link
          className="MetalCard GenreCard"
          to="/genre/65eedbc074bb29fd53dc259b/Metal"
        >
          Metal
          <img
            src="https://i.scdn.co/image/ab67fb8200005cafefa737b67ec51ec989f5a51d"
            alt=""
          />
        </Link>
        <Link
          className="JazzCard GenreCard"
          to="/genre/65eedbc574bb29fd53dc259d/Jazz"
        >
          Jazz
          <img
            src="https://i.scdn.co/image/ab67fb8200005cafe289743024639ea8f202364d"
            alt=""
          />
        </Link>
        <Link
          className="TrendingCard GenreCard"
          to="/genre/65eedbcb74bb29fd53dc259f/Trending"
        >
          Trending
          <img
            src="https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd"
            alt=""
          />
        </Link>
        <Link
          className="WellnessCard GenreCard"
          to="/genre/65eedbd374bb29fd53dc25a1/Wellness"
        >
          Wellness
          <img
            src="https://i.scdn.co/image/ab67fb8200005caf8dec632effd9735fa8aba06e"
            alt=""
          />
        </Link>
        <Link
          className="AnimeCard GenreCard"
          to="/genre/65eedbd974bb29fd53dc25a3/Anime"
        >
          Anime
          <img
            src="https://i.scdn.co/image/ab67706f00000002c19c5f13f8b3ff2d73ff00bc"
            alt=""
          />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
        <Link className="madeForYouCard GenreCard" to="/genre/Music">
          Made For You
          <img src={musicImg} alt="" />
        </Link>
      </div>
    </div>
  );
}
