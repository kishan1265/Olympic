import React from "react";
import { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Info from "../component/sports_content";
import { useRouter } from "next/router";

const Sports = () => {
  const router = useRouter();
  const [sports, setNation] = useState("");

  const handle = (event) => {
    setNation(event.target.value);
    const href = `/sport_next/${event.target.value}`;
    // console.log(href)
    router.push(href);
  };

  const sportsComponent = (
    <>
      <Header />
      <Info />
      <form>
        <select
          onChange={handle}
          value={sports}
          className="dropdownbutton"
          id="sport"
          name="sport"
        >
          <option value="Default">select sports</option>
          <option value="badminton">Badminton</option>
          <option value="football">football</option>
          <option value="cycling">cycling</option>
        </select>
      </form>

      <Footer />
    </>
  );

  return <>{sportsComponent}</>;
};

export default Sports;
