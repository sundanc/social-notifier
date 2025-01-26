from fastapi import FastAPI
from pydantic import BaseModel
from .crud import create_notification, get_notifications

import os
from dotenv import load_dotenv

# Load the environment variables
load_dotenv()

# Access API keys
TWITTER_API_KEY = os.getenv("TWITTER_API_KEY")
TWITTER_API_SECRET_KEY = os.getenv("TWITTER_API_SECRET_KEY")
TWITTER_ACCESS_TOKEN = os.getenv("TWITTER_ACCESS_TOKEN")
TWITTER_ACCESS_TOKEN_SECRET = os.getenv("TWITTER_ACCESS_TOKEN_SECRET")

app = FastAPI()

class Notification(BaseModel):
    platform: str
    user: str
    content: str

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/notifications/")
def create_notification_route(notification: Notification):
    created_notification = create_notification(notification)
    return {"message": "Notification created", "data": created_notification}

@app.get("/notifications/")
def get_notifications_route():
    notifications = get_notifications()
    return notifications
