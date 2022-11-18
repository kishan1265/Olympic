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

  console.log(
    `insert into athlete VALUES(${req.body.player_id},'${req.body.player_name}','${req.body.noc}','${req.body.gender}','${req.body.country}','${req.body.sport}',${req.body.year},${req.body.medal})`
  );

  // const queryReq =
  await client.query(
    `insert into athlete VALUES(${req.body.player_id},'${req.body.player_name}','${req.body.noc}','${req.body.gender}','${req.body.country}','${req.body.sport}',${req.body.year},${req.body.medal})`
  );

  res.status(200).json({ message: "OK" });
}
