/**
 * IMPORTS
 */
import axios from 'axios';


/**
 * CODE
 */
const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
});


/**
 * EXPORTS
 */
export {api};
