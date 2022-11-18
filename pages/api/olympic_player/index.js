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

  console.log(data);

  await client.query("set search_path to olympic");

  let queryReq = `select * from olympic.athlete where year = ${data.olympic}`;

  console.log(`select * from olympic.athlete where year = ${data.olympic}`);

  // if (data.nation == undefined) {
  console.log(`and noc = '${data.nation}'`);
  queryReq += `and (noc = '${data.nation}' or lower(sport) = '${data.nation}')`;
  // }

  // if (data.nation == undefined) {
  //   console.log(`and sport = '${data.nation}'`);
  //   queryReq += `and sport = '${data.nation}'`;
  // }

  const response = await client.query(queryReq);

  res.status(200).json({ length: response.rowCount, data: response.rows });
}
