import mysql from 'mysql2/promise';

export async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'Next',
    user: 'root',
    password: '',
  });

  return connection;
}

export async function storeMeetups(req, res) {
  console.log(req);
  if (req.method === 'POST') {
    try {
      const connection = await connectToDatabase();
      const data = req.body;
      const { title, image, address, description } = data;

      // Insert data into the meetups table
      const [result] = await connection.execute(
        'INSERT INTO meetups (title, image, address, description) VALUES (?, ?, ?, ?)',
        [title, image, address, description]
      );

      // Return the newly inserted meetup ID
      res.status(201).json({ meetupId: result.insertId });
    } catch (error) {
      console.error('Error storing meetup:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
