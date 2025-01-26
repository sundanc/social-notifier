from transformers import pipeline

sentiment_analyzer = pipeline("sentiment-analysis")

def analyze_sentiment(text: str):
    result = sentiment_analyzer(text)
    return result[0]["label"]
