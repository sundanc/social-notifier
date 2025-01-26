from sqlalchemy.orm import Session
from .models import Notification

def create_notification(db: Session, notification_data):
    db_notification = Notification(**notification_data)
    db.add(db_notification)
    db.commit()
    db.refresh(db_notification)
    return db_notification

def get_notifications(db: Session):
    return db.query(Notification).all()
