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
  const data = JSON.parse(req.body);

  await client.query("set search_path to olympic");

  let queryReq = `select * from olympic.athlete where lower(sport) = '${data.sport}'`;
  if (isNaN(data.nation)) {
    console.log(`and noc = '${data.nation}'`);
    queryReq += `and noc = '${data.nation}'`;
  }

  if (!isNaN(data.nation)) {
    console.log(`and year = '${data.nation}'`);
    queryReq += ` and year = '${data.nation}'`;
  }

  const response = await client.query(queryReq);

  res.status(200).json({ length: queryReq.rowCount, data: response.rows });
}
