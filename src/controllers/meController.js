/**
* Me Controller
*/

const hello = (req, res) => {
    res.status(200).json({
        greeting: "Hi, I'm Joe 👋🏻",
        jobTitle: "Software Developer & Freelance Digital Designer"
    })
};

export default { hello }