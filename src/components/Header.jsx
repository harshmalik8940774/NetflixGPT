import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR ,SUPPORTED_LANGUAGES} from "../utils/constants";
import { toggleGptSearchView ,clearGptMovieResult} from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  //once user sign in/sign up,than it will navigate to browser page

  // And then updates the user redux store.

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle GPT Search Button

    dispatch(toggleGptSearchView());


      if (showGptSearch) {
    // User is currently in GPT Search mode and going back to Homepage
    dispatch(clearGptMovieResult());
  }



  };
  const handleLanguageChange = (e) => {

    dispatch(changeLanguage(e.target.value));
  }

  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center space-x-4 p-2">
          { showGptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}
 >
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key = {lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}

          
        
          </select>)}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
          <img
            className="w-16 h-16 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
            alt="usericon"
            src={user?.photoURL || USER_AVATAR}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded font-semibold transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
