import React, { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import Info from "../component/nation_content";
import { useRouter } from "next/router";

const Nation = () => {
  const router = useRouter();
  const [nation, setNation] = useState("");

  const handle = (event) => {
    setNation(event.target.value);
    const href = `/nation_next/${event.target.value}`;
    // console.log(href)
    router.push(href);
  };

  const nationComponent = (
    <>
      <Header />
      <Info />
      <form>
        <select
          onChange={handle}
          value={nation}
          className="dropdownbutton"
          id="nation"
          name="nation"
        >
          <option value="default">select country</option>
          <option value="IND">India</option>
          <option value="USA">USA</option>
          <option value="UAE">UAE</option>
          <option value="RUS">Russia</option>
        </select>
      </form>
      <Footer />
    </>
  );
  return <>{nationComponent}</>;
};

export default Nation;
