import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  // call this hook to take data from tmdb api and than add this data to app redux store.
  useNowPlayingMovies();


  return (<div>
    <Header />
    <MainContainer />
    <SecondaryContainer/>
  </div>);
};

export default Browse;
