import React, { useEffect } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { useRouter } from "next/router";

const olympic_player = () => {
  const router = useRouter();
  const { olympic } = router.query;

  const data = {
    olympic,
    nation: router.query.second,
  };

  const options = {
    method: `POST`,
    body: JSON.stringify(data),
  };

  const [athleteData, setAthleteData] = React.useState(undefined);

  useEffect(() => {
    fetch(`/api/olympic_player`, options).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setAthleteData(data);
      })
    );
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <h2>Player Details</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">player id</div>
            <div className="col col-2">Player Name</div>
            <div className="col col-3">NOC</div>
            <div className="col col-4">Gender</div>
            <div className="col col-5">Country</div>
            <div className="col col-6">Sport</div>
            <div className="col col-7">Year</div>
            <div className="col col-8">Medal</div>
          </li>
          {athleteData &&
            athleteData.data.map((athlete, index) => (
              <li className="table-row" id={`${index}`}>
                <div className="col col-1" data-label="Player id">
                  {athlete.player_id}
                </div>
                <div className="col col-2" data-label="Player Name">
                  {athlete.player_name}
                </div>
                <div className="col col-3" data-label="Noc">
                  {athlete.noc}
                </div>
                <div className="col col-4" data-label="Gender">
                  {athlete.gender}
                </div>
                <div className="col col-5" data-label="Country">
                  {athlete.country_name}
                </div>
                <div className="col col-6" data-label="Sport">
                  {athlete.sport}
                </div>
                <div className="col col-7" data-label="year">
                  {athlete.year}
                </div>
                <div className="col col-8" data-label="Medal">
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

export default olympic_player;
