import { Link } from 'react-router-dom';

import React, { useState } from "react";
const Mains =() =>{
    return(
        <div className='header' >
               
                   
                       <Link to="/"> Home</Link>
                       <Link to="/movie">movie</Link>
                       <Link to="/search">search</Link>
                       <Link to="/add">Addmovie</Link>
                   
                

                
        </div>
    )
}
export default Mains ;