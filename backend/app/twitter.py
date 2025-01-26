import tweepy
import os
from dotenv import load_dotenv

load_dotenv()

# Twitter API credentials
API_KEY = os.getenv("TWITTER_API_KEY")
API_SECRET_KEY = os.getenv("TWITTER_API_SECRET_KEY")
ACCESS_TOKEN = os.getenv("TWITTER_ACCESS_TOKEN")
ACCESS_TOKEN_SECRET = os.getenv("TWITTER_ACCESS_TOKEN_SECRET")

# Authentication with Twitter API
auth = tweepy.OAuthHandler(API_KEY, API_SECRET_KEY)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

api = tweepy.API(auth)

# Function to get notifications (tweets) from the authenticated user's timeline
def get_twitter_notifications():
    notifications = []
    try:
        # Get the most recent 10 tweets from the authenticated user's timeline
        tweets = api.user_timeline(count=10)
        for tweet in tweets:
            notifications.append({
                "platform": "Twitter",
                "user": tweet.user.screen_name,
                "content": tweet.text
            })
    except Exception as e:
        print(f"Error fetching notifications: {e}")
    
    return notifications
