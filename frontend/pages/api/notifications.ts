import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Fetch data from FastAPI backend
    const response = await fetch("http://localhost:8000/notifications/twitter/");  // Your FastAPI URL

    if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
    } else {
        res.status(500).json({ message: "Error fetching notifications" });
    }
}
