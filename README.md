# FriendFinder
A compatibility-based "FriendFinder" application built with NodeJS and Express. The application is live at https://glacial-falls-20919.herokuapp.com/ and was deployed using heroku.

## How it Works
The user takes a 10 question survey that rates how strongly they feel with a statement on a scale of 1-5.  Those scores are then compared to the previous user's scores. When a user submits a survey with their name and image, they are stored locally **(temporary-storage. I did not use a database for this example)** and are available for comparison for comparison in future submisssions.

### How the similarity is calculated
If user A answers 1 to question 1, and user B answer 5 to question 1, then I calculate the difference (absolute value).  The differences for all 10 questions are totalled up for a similarity score. The smaller the score the more similar. 

## UT Full-Stack Development Bootcamp
This app was built as part of the UT Full Stack Development Bootcamp to demonstrate our knowledge of using Express for creating API routes.





