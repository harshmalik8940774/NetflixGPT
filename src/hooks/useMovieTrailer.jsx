import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  // fetch trailer video && updating the store with trailer video data.

  const dispatch = useDispatch();

// If store slice already have data than not do unnecessary api call(this concept is called Memoization)
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    // filter the trailer movie among all the movies.

    const filterData = json.results.filter((video) => video.type === "Trailer");
   

    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {

    //if store slice is empty than only called API to fetch the data.
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;

