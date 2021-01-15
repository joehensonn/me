import dotenv from 'dotenv';

dotenv.config();

export const lastFmUrl = process.env.LAST_FM_URL;
export const lastFmUser = process.env.LAST_FM_USER;
export const lastFmApiKey = process.env.LAST_FM_API_KEY;

export const govRiverStation = process.env.GOV_RIVER_STATION;
export const lowRiverSeverity = process.env.GOV_LOW_SEVERITY;
export const mediumRiverSeverity = process.env.GOV_MEDIUM_SEVERITY;
export const highRiverSeverity = process.env.GOV_HIGH_SEVERITY;

export const city = process.env.LOCATION_CITY;
export const country = process.env.LOCATION_COUNTRY;

export const weatherApiKey = process.env.OPENWEATHER_API_KEY;
export const weatherApiCityId = process.env.OPENWEATHER_CITY_ID;