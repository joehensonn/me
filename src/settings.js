import dotenv from 'dotenv';

dotenv.config();

export const lastFmUrl = process.env.LAST_FM_URL;
export const lastFmUser = process.env.LAST_FM_USER;
export const lastFmApiKey = process.env.LAST_FM_API_KEY;