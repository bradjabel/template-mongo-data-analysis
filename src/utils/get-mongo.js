import {MongoClient} from "mongodb";

export const getMongo = async ({connectionString}) => {
  return await MongoClient.connect(connectionString);
};
