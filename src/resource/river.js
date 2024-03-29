/**
* .GOV River Resource
*/
import axios from "axios";

import { govRiverStation, lowRiverSeverity, mediumRiverSeverity, highRiverSeverity } from '../settings';

export async function riverDetails() 
{
    try {
        const river = await axios.get(`https://environment.data.gov.uk/flood-monitoring/id/stations/${govRiverStation}`);

        const currentHeight = river.data.items.measures.latestReading.value;
        let severity = 1;

        if (currentHeight > highRiverSeverity) {
            severity = 3
        } else if (currentHeight > mediumRiverSeverity && currentHeight < highRiverSeverity) {
            severity = 2;
        }
        
        return {
            riverName: river.data.items.riverName,
            currentHeight: currentHeight,
            severity: severity,
        }

    } catch(error) {
        return {
            error: error
        }
    }
}