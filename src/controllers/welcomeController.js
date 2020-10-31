/**
* Example Controller
* 
* Compile all relevant functions into a common controller
* to better manage application structure
*/

import { appName } from '../settings';

const view = (req, res) => {
    res.status(200).json({
        appName: appName,
        message: 'Hi. Time to build!'
    })
};

export default { view }