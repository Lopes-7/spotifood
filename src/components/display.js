/**
 * IMPORTS
 */
import React from 'react';
import {useSelector} from 'react-redux';
import {Playlist} from './playlist.js';


/**
 * STYLES
 */
import './styles/display.css'


/**
 * CODE
 */
function Display (props) {
    // get search value from store
    const search = useSelector(state => state.search);
    const {searchValue} = search;

    // initialize list of playlists
    const selectedPlaylists = [];

    // playslist data is not null: filter playlists
    if (props.playlists !== null)
    {
        for (const p of props.playlists.items)
        // filter playslist and show only those that match the search value as substring
        if (p.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1)
            selectedPlaylists.push(p);
    }
    
    return (
        <div>
            <h1 className="displaytitle">Playlists</h1>
            <div className="display">
                {selectedPlaylists.map(p => {
                    return <Playlist key={p.name} playlist={p} ></Playlist>
                })}
            </div>
        </div>
    )
}

/**
 * EXPORTS
 */
export {Display};
