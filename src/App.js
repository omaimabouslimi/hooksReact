import { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import SearchList from "./components/Search";

const App = ()=>{
    const movies = [{title:"Luca" ,picture:"https://hoodzpahdesign.com/wp-content/uploads/2021/03/Luca-Movie-Title-Treatment-Unchosen-Concepts-by-Hoodzpah-for-Disney-Pixar-04.jpg"  ,rate: 7 },{title: "PigHéro ", picture:"https://worth1000.s3.amazonaws.com/submissions/635846193481836800/635846193481836763_c84a.jpg",rate :8},{title: "HomeAlone" ,picture : "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A9E422A47FEBF6DF9152CF6BC6E488CBA26DD0D12A25BB9EE136986128D4E365/scale?width=1200&aspectRatio=1.78&format=jpeg",rate : 9 }]
    const [film,setFilm] = useState(movies)
   // fonction heya ill bech tasna3lik movie jdid
   const AddNewMovie = (newMovie)=>{
    setFilm ([...film, newMovie])

 }



 const SearchFiltrer = (newsearch)=>{
    setFilm([...film].filter((el,index)=>el.title===newsearch))
 }
    return (
        <div>
            <SearchList SearchFiltrer = {SearchFiltrer}/>
              <AddMovie AddNewMovie = {AddNewMovie} />
        <MovieList video = {film}/>
        
        </div>

        






    )
}
export default App;