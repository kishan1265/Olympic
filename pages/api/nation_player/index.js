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

  let queryReq = `select * from olympic.athlete where noc = '${data.nation}'`;
  if (isNaN(data.sport)) {
    queryReq = await client.query(
      (queryReq += `and lower(sport) = '${data.sport}'`)
    );
  }

  if (!isNaN(data.sport)) {
    queryReq = await client.query((queryReq += ` and year = '${data.sport}'`));
  }

  // console.log(queryReq);

  res.status(200).json({ length: queryReq.rowCount, data: queryReq.rows });
}
