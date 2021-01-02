/**
* Home Controller
*/

import { riverDetails } from '../resource/river';
import { weatherDetails } from '../resource/weather';
import { city, country } from '../settings';

const outside = async (req, res) => {

    const river = await riverDetails();
    const weather = await weatherDetails();

    res.status(200).json({
        location: {
            city: city,
            country: country
        },
        weather: weather,
        nearbyRiver: river
    })
}

export default { outside }