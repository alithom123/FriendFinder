

// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require("../data/friends");

module.exports = function(app) {

    // Route to get all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        // console.log("Post request:", req);
        console.log("Post request body:", req.body);

        // Calculate survey results.
        let totalDifference = 0;
        let minDifference;
        let minIndex;
        friends.forEach( function(friend,friendIndex) {
            totalDifference = 0;
            req.body.scores.forEach( function(score, scoreIndex) {
                totalDifference += Math.abs(friend.scores[scoreIndex] - score);
            });
            // The first friend should be set as the min until another friend beats it.
            if (typeof minIndex === 'undefined') {
                console.log(`Setting 1st friend automatically to ${friendIndex} with score ${totalDifference}`);
                minDifference = totalDifference;
                minIndex = friendIndex;
            }

            if( totalDifference < minDifference ) {
                console.log(`Setting friend to ${friendIndex} with score ${totalDifference}`);
                minDifference = totalDifference;
                minIndex = friendIndex;
            }
        });
        
        friends.push(req.body);
        res.json(friends[minIndex]);
    });
}