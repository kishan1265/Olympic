import React, { useEffect } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { useRouter } from "next/router";

const sports_player = () => {
  const router = useRouter();
  const { sport } = router.query;

  console.log(router.query);

  let data = [sport];
  const options = {
    method: `POST`,
    body: data,
  };

  const [athleteData, setAthleteData] = React.useState(undefined);

  useEffect(() => {
    fetch(`/api/sport_player`, options).then((res) =>
      res.json().then((data) => {
        setAthleteData(data);
      })
    );
  }, []);

  const handle = () => {
    console.log(sport);
  };

  return (
    <>
      <Header />

      <div className="container">
        <h2>Player Details</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div class="col col-1">player id</div>
            <div class="col col-2">Player Name</div>
            <div class="col col-3">NOC</div>
            <div class="col col-4">Gender</div>
            <div class="col col-5">Country</div>
            <div class="col col-6">Sport</div>
            <div class="col col-7">Medal</div>
          </li>
          {athleteData &&
            athleteData.data.map((athlete, index) => (
              <li class="table-row" id={`${index}`}>
                <div class="col col-1" data-label="Player id">
                  {athlete.player_id}
                </div>
                <div class="col col-2" data-label="Player Name">
                  {athlete.player_name}
                </div>
                <div class="col col-3" data-label="Noc">
                  {athlete.noc}
                </div>
                <div class="col col-4" data-label="Gender">
                  {athlete.gender}
                </div>
                <div class="col col-5" data-label="Country">
                  {athlete.country_name}
                </div>
                <div class="col col-6" data-label="Sport">
                  {athlete.sport}
                </div>
                <div class="col col-7" data-label="Medal">
                  {athlete.medal}
                </div>
              </li>
            ))}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default sports_player;
