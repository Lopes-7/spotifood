/**
 * IMPORTS
 */
import React from 'react';
import {useSelector} from 'react-redux';


/**
 * STYLES
 */
import './styles/playlist.css'


/**
 * CODE
 */
function Playlist (props) {
    // data state
    const data = props.playlist;

    // display type state
    const {displayBy} = useSelector(state => state.display);

    // function to open playlist
    function openPlaylist() {
        // open playlist URL in new window
        window.open(data.external_urls.spotify);
    }

    return (
        <div className={displayBy === 'grid' ? "playlist": "playlistrow"} onClick={openPlaylist}>
            {displayBy === 'grid' && (<p className="p">PLAYLIST</p>)}
            <img alt="img"
                 className={displayBy === 'grid' ? "img": "imgrow"}
                 height="120"
                 width="120" 
                 src={data.images[0].url}></img>
            <div className={displayBy === 'grid' ? "container": "containerrow"} >
                {displayBy === 'list' && (<p className="prow">PLAYLIST</p>)}
                <h1 className={displayBy === 'grid' ? "title": "titlerow"}>{data.name}</h1>
                <p className={displayBy === 'grid' ? "desc": "descrow"}>{data.description}</p>
                {displayBy === 'list' && (
                    <p className="footer">Created by {data.owner.display_name} {data.tracks.total} songs</p>
                )}
            </div>
            
        </div>
    )
}

/**
 * EXPORTS
 */
export {Playlist};
