import React, {useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {  API_KEY, imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'
const RowPost = (props) => {
const [movies,setMovies] = useState([])

const [urlId,setUrlId] = useState('')
  useEffect(() => {
   axios.get(props.url).then((response)=>{ //ithil irikkunna url statelott store cheyyum
    console.log(response.data);
    setMovies(response.data.results)
   }).catch(err=>{
    alert("network error")
   })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const handleMovie = (id) =>{
    console.log(id);
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Trailer not available");
      }
    })

  }
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>

        {movies.map((poster,index)=>{
       return( <img onClick={()=>handleMovie(poster.id)}className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl + poster.backdrop_path}`} alt="poster" />)
        })}


      </div>
     {urlId && <Youtube videoId={urlId.key} opts={opts}></Youtube>}
    </div>
  )
}

export default RowPost
