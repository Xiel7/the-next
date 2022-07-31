import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    laravelVersion: string;
    query: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const path = 'http://localhost:8000';
    const response = await fetch(path);
    const data = await response.json();
    const laravelVersion = data.Laravel;
    res.status(200).json({ laravelVersion: laravelVersion, query: req.query })
}