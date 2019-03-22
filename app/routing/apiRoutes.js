

// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require("../data/freinds");

module.exports = function(app) {

    // Route to get all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, resp) {

        console.log(req);
        // Calculate survey results.
        
        res.json()
    });
}