import { useEffect, useState } from "react";

const NotificationList = () => {
    const [notifications, setNotifications] = useState<any[]>([]);

    useEffect(() => {
        // Fetch notifications from Next.js API route
        fetch("/api/notifications")
            .then((response) => response.json())
            .then((data) => setNotifications(data.notifications))
            .catch((error) => console.error("Error fetching notifications:", error));
    }, []);

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>
                        <strong>{notification.user}</strong>: {notification.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationList;
    