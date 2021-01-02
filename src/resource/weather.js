/**
* Weather Resource
*/
import axios from "axios";

import { weatherApiKey, weatherApiCityId } from '../settings';

export async function weatherDetails() 
{
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${weatherApiCityId}&appid=${weatherApiKey}&units=metric`);
        const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${weatherApiCityId}&appid=${weatherApiKey}&units=metric&cnt=8`);

        const rainTypes = [2, 3, 5]
        let willRain = 0;

        forecast.data.list.every(function (item) {
            let rainType = Number(String(item.weather[0].id).charAt(0));

            willRain = rainTypes.includes(rainType);

            if (willRain) {
                return false;
            }

            return true;
        })

        return {
            temperature: weather.data.main.temp,
            feelsLike: weather.data.main.feels_like,
            willRain: willRain
        }

    } catch(error) {
        return {
            error: error
        };
    }
}