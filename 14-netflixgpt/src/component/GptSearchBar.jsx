import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/LanguageConst";
import axios from "axios"
import {useRef} from "react"
import client from "../utils/OpenAi/OpenAi"
import {API_OPTIONS} from "../utils/constants"
import { addGptMovieResult } from "../utils/reducer/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch=useDispatch()
  const searchText =useRef(null)
 const getTmdbMOvies =async (movies) =>{
  const result =await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
   return result

 }
  const handleGPTSearch= async ()=>{
      const query =`Act as a movie Recomendation System and suggest 5 movies for the query :${searchText.current.value} separated by commas like for example : lagan,chakde india,ironman,thor,avengers please dont add any numbers before it just stick to the format etc `
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: query }],
        model: 'gpt-3.5-turbo',
      });
      // handle error here if(!chatCompletion.choices?.[0]?.message?.content){lawda lassun}
     
      const getMovies =chatCompletion.choices?.[0]?.message?.content.split(",").map(movie => movie.trim());
      
      const tmdbSearchAPi = getMovies.map((movies)=>getTmdbMOvies(movies)) 

     
      //it will take some tome to return this result for time being it gives us 5 promises 
      //but we neede agreegate of those promises thats why promise.all

      const tmdbRawResults= await Promise.all(tmdbSearchAPi)
     
      const tmdbResult = tmdbRawResults.map(response => ({
        data: response?.data?.results || "Unknown",
      }));
      dispatch(addGptMovieResult({movieNames :getMovies ,movieResults :tmdbResult}))
      
      searchText.current.value =""

  }
  return (
    <div className="mt-20 relative z-40 flex justify-center px-4">
  <form 
    className="w-full max-w-3xl flex"
    onClick={(e) => e.preventDefault()}
  >
    <input
      className="p-4 sm:p-5 border border-black w-full sm:w-3/4 md:w-8/12 rounded-l-full bg-white text-lg sm:text-2xl"
      type="text"
      ref={searchText}
      placeholder={lang[langKey].pLaceHolder}
    />
    <button
      className="text-lg sm:text-2xl bg-amber-600 text-white px-4 sm:p-5 rounded-r-full font-bold border border-white"
      onClick={handleGPTSearch}
    >
      {lang[langKey].search}
    </button>
  </form>
</div>

  );
};

export default GptSearchBar;
