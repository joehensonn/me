/**
* Music Controller
*/

import axios from "axios";

import { lastFmUrl, lastFmUser, lastFmApiKey } from '../settings';

const currentlyListening = (req, res) => {
    axios.get(lastFmUrl, {
        params: {
            method: 'user.getrecenttracks',
            user: lastFmUser,
            api_key: lastFmApiKey,
            format: 'json'
        }
    }).then(function (response) {
        if (response.status === 200) {
            const details = response.data.recenttracks;
            const song = response.data.recenttracks.track[0];
            
            const data = {
                currently_listening: isset(details['@attr']['nowplaying'] ? 1 : 0),
                artist: song['artist']['#text'],
                album: song['album']['#text'],
                title: song['name'],
                artwork: song['image'][2]['#text']
            }

            console.log(data);
        }
    });
};

const recentlyPlayed = (req, res) => {};

export default { currentlyListening,  recentlyPlayed}