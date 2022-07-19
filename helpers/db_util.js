import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://handam:x8WjNCLheUOVJS8s@cluster0.vqc3wvl.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db('events');

  const result = await db.collection(collection).insertOne(document);

  return result;
};

// filter 매개변수로 특정 이벤트에 대한 댓글들만 가져오기
export const getAllDocuments = async (
  client,
  collection,
  sort,
  filter = {}
) => {
  const db = client.db('events');

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
};
