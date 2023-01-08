# Twitter Comment Bot
A bot that comments on tweets containing a specified keyword. The bot uses the OpenAI API to generate comments and the Twitter API to post them. It is designed to run continuously, with a fixed delay between each comment.

## Technologies used
* Node.js
* Axios 
* twit 
* Twitter API
* OpenAI API

## How it works
* The bot uses the Twitter API to search for tweets containing the specified keyword.
* For each tweet found, the bot uses the OpenAI API to generate a comment.
* The bot then uses the Twitter API to post the generated comment as a reply to the tweet.
* The bot waits for a fixed amount of time before searching for new tweets again.

## Requirements
* A Twitter developer account and API keys (with elevated access)
* An OpenAI API key


## Deploying to Heroku
The bot can be easily deployed to Heroku to run 24/7. Follow the steps in the [Heroku documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs) to set up a Heroku account, create a new app, and deploy the code. Don't forget to set up the environment variables in the Heroku app's settings.

## :heart: Support me by donating

Hi there! If you've found my work helpful or useful in any way, please consider supporting me by donating through PayPal. Your support helps me continue to create and share useful content with the community. Thank you for your generosity and support!

<p align="center"><a href="https://paypal.me/sojinsamuel?country.x=IN&locale.x=en_GB"> <img align="center" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" alt="sojinsamuel" /></a></p>

