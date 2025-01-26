import { useEffect, useState } from "react";

interface Notification {
  platform: string;
  user: string;
  content: string;
}

const NotificationList = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <div className="p-4">
      {notifications.map((n, i) => (
        <div key={i} className="p-2 border-b">
          <p>{n.content}</p>
          <small>{n.platform}</small>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
