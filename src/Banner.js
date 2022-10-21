import React, { useState, useEffect } from 'react'
import axios from "./axios"
import requests from './request'
import "./Banner.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md"

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center",
            }}
        >
            <div className='banner__contents'>
                <h1>
                    {movie?.name || movie?.original_name || movie?.title || movie?.original_title || " "}
                </h1>

                <h1 className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className='banner__buttons'>
                    <div className='banner__button__play'>
                        <div>
                            <BsFillCaretRightFill />
                        </div>
                        <div>
                            Reproducir
                        </div>

                    </div>
                    <div className='banner__button__info '>
                        <div><MdInfoOutline /></div>
                        <div>Mas información</div>

                    </div>
                </div>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>

    )
}

export default Banner