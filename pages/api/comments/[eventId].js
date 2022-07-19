import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db_util';

const handler = async (req, res) => {
  const { eventId } = req.query;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      client.close();
      return;
    }
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: 'Added comment.', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!' });
    }
  }

  // 특정 이벤트의 댓글들 가져오기
  if (req.method === 'GET') {
    try {
      const ducuments = await getAllDocuments(
        client,
        'comments',
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: ducuments });
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed!' });
    }
  }
  client.close();
};

export default handler;
