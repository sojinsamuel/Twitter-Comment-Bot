import axios from "axios";
import Twit from "twit";

const twitterConsumerKey = "Consumer Key";
const twitterConsumerSecret = "Consumer Secret Key";
const twitterAccessToken = "Acess Token";
const twitterAccessTokenSecret = "Access Token Secret";
const openaiApiKey = "Open AI API key";

function getSubject() {
  // some random subjects
  const subjects = [
    "reactjs",
    "javascript",
    "front-end developer",
    "javascript developer",
    "html",
    "css",
    "developer job",
    "tips for javascript developer",
    "website",
    "web design",
    "developer job",
    "MAANG companies",
    "coding",
    "reading book",
    "programmer work culture",
  ];

  const index = Math.floor(Math.random() * 16);
  return subjects[index];
}

const api = new Twit({
  consumer_key: twitterConsumerKey,
  consumer_secret: twitterConsumerSecret,
  access_token: twitterAccessToken,
  access_token_secret: twitterAccessTokenSecret,
});

async function generateTweet() {
  const { data: tweetResponse } = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: `Generate a tweet about ${getSubject()} for social media. Write the tweet as if you are the author and include an emoji that aligns with the content.`,
      max_tokens: 90,
      temperature: 0.5,
      top_p: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
    }
  );
  const tweetText = tweetResponse.choices[0].text;

  const { data: postTweetResponse } = await api.post("statuses/update", {
    status: tweetText,
  });

  console.log(`Tweet posted: ${postTweetResponse.text}`);

  await new Promise((resolve) => setTimeout(resolve, 30 * 60 * 1000)); // create a delay of 30min b/w tweet
  generateTweet();
}

generateTweet();
