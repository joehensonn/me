/**
* Music Controller
*/

import axios from "axios";

import { lastFmUrl, lastFmUser, lastFmApiKey } from '../settings';

const validPeriods = ['overall', '7day', '1month', '3month', '6month', '12month'];

const currentlyListening = (req, res) => {
    axios.get(lastFmUrl, {
        params: {
            method: 'user.getrecenttracks',
            user: lastFmUser,
            api_key: lastFmApiKey,
            format: 'json'
        }
    }).then(function (response) {
        const data = {
            details: response.data.recenttracks['@attr'],
            song: response.data.recenttracks.track[0]
        }

        respondToUser(res, response.status, data);

    }).catch(function (error) {
        respondToUser(res, error.response.status, {message: 'Oops, unknown error occured'})
    });
};

const topSongs = (req, res) => {
    if (req.query.period) {
        if (!validPeriods.includes(req.query.period)) {
            respondToUser(res, 400, {message: `Invalid query parameters. ${req.query.period} isn't a valid period.`})
        }
    }

    if (req.query.limit && isNaN(req.query.limit)) {
        respondToUser(res, 400, {message: `Invalid query parameters. ${req.query.limit} isn't a valid limit.`})
    }

    axios.get(lastFmUrl, {
        params: {
            method: 'user.gettoptracks',
            user: lastFmUser,
            api_key: lastFmApiKey,
            format: 'json',
            period: req.query.period ?? 'overall',
            limit: req.query.limit ?? 20
        }
    }).then(function (response) {
        const tracks = response.data.toptracks.track;

        respondToUser(res, response.status, tracks)

    }).catch(function (error) {
        respondToUser(res, error.response.status, {message: 'Oops, unknown error occured.'})
    });
};

function respondToUser(res, status, data) {
    res.status(status).json(data);
}

export default { currentlyListening,  topSongs }