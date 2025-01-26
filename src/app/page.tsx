'use client';  // Add this line at the top

import { useEffect, useState } from 'react';

type Notification = {
  platform: string;
  user: string;
  content: string;
};

const HomePage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch notifications from the Next.js API route
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/notifications');
        if (response.ok) {
          const data = await response.json();
          setNotifications(data.notifications);
        } else {
          console.error('Failed to fetch notifications');
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="container">
      <h1>Social Media Notifications</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <li key={index}>
                <strong>{notification.platform}</strong> - {notification.user}: {notification.content}
              </li>
            ))
          ) : (
            <p>No notifications available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
