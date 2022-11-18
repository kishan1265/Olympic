import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

const insert_player = () => {
  const insert = () => {
    const data = {
      player_id: document.getElementById("player_id").value,
      player_name: document.getElementById("player_name").value,
      noc: document.getElementById("noc").value,
      gender: document.getElementById("gender").value,
      country: document.getElementById("country").value,
      sport: document.getElementById("sport").value,
      year: document.getElementById("year").value,
      medal: document.getElementById("medal").value,
    };

    fetch(`/api/insert_player`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Player Inserted Success");
  };

  return (
    <>
      <Header />
      <div class="form">
        <div class="title">Insert player Details</div>
        <div class="subtitle">Let's add new player!</div>
        <div class="input-container ic1">
          <input id="player_id" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="player_id" class="placeholder">
            Player ID
          </label>
        </div>
        <div class="input-container ic2">
          <input id="player_name" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="player_name" class="placeholder">
            Player Name
          </label>
        </div>
        <div class="input-grid">
          <div class="input-con ic2">
            <input id="noc" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="noc" class="placeholder">
              NOC
            </label>
          </div>
          <div class="input-con ic2">
            <input id="gender" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="gender" class="placeholder">
              Gender
            </label>
          </div>
        </div>
        <div class="input-container ic2">
          <input id="country" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="country" class="placeholder">
            Country
          </label>
        </div>
        <div class="input-container ic2">
          <input id="sport" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="sport" class="placeholder">
            Sport
          </label>
        </div>
        <div class="input-grid">
          <div class="input-container ic2">
            <input id="year" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="year" class="placeholder">
              Year
            </label>
          </div>
          <div class="input-container ic2">
            <input id="medal" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="medal" class="placeholder">
              Medal
            </label>
          </div>
        </div>
        <button type="text" class="submit" onClick={insert}>
          Add Player
        </button>
      </div>
      <Footer />
    </>
  );
};

export default insert_player;
