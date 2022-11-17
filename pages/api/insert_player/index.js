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

  // await client.query(
  //   `create trigger beforeInsertTrigger
  //       before INSERT
  //       on athlete
  //       for each row
  //       execute procedure beforeUserInsert()`
  // );

  console.log("Connected🚀");

  // await client.query(
  //   `create or replace function beforeUserInsert()
  //       returns TRIGGER
  //       language 'plpgsql'
  //       as $body$
  //       BEGIN
  //       if new.player_id not in (select player_id from athlete)
  //       then raise notice 'Congratulation! Player added succesfully'; return new;
  //       else raise notice 'Player already exist in the database'; return old;
  //       end if;
  //       end;
  //       $body$`
  // );

  // const data = JSON.parse(req.body);

  //console.log(req.body);

  console.log(
    `insert into athlete VALUES(${req.body.player_id},'${req.body.player_name}','${req.body.noc}','${req.body.gender}','${req.body.country}','${req.body.sport}',${req.body.year},${req.body.medal})`
  );

  // const queryReq =
  await client.query(
    `insert into athlete VALUES(${req.body.player_id},'${req.body.player_name}','${req.body.noc}','${req.body.gender}','${req.body.country}','${req.body.sport}',${req.body.year},${req.body.medal})`
  );

  res.status(200).json({ message: "OK" });
}
