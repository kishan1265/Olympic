import { Client } from "pg";

export default async function handler(req, res) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "olympic",
    password: "admin",
    port: 5432,
  });

  client.connect();

  console.log("Connected🚀");

  await client.query("set search_path to olympic");

  const queryReq = await client.query(
    `select * from olympic.athlete where noc = 'IND'`
  );

  res.status(200).json({ length: queryReq.rowCount, data: queryReq.rows });
}
