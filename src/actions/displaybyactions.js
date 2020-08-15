/**
 * CODE
 */

// action creator for set display action
function setDisplay(display) {
    return {payload: display,
            type: 'SET_DISPLAY'};
}


/**
 * EXPORTS
 */
export {
    setDisplay
};
