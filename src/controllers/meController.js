/**
* Me Controller
*/

const hello = (req, res) => {
    res.status(200).json({
        greeting: "Hi, I'm Joe 👋🏻",
        jobTitle: 'Software Developer & Freelance Digital Designer',
        endpoints: {
          home: '/',
          outsideInformation: '/home/outside',
          currentlyListening: '/music/currently-listening',
          topSongs: '/music/top-songs',
        }
      });
};

export default { hello }