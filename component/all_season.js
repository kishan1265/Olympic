import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const all_season = ({ title }) => {
  const router = useRouter();
  const [season, setNation] = useState("");

  const handle = (event) => {
    setNation(event.target.value);
    const href = `/olympic_player/${event.target.value}?second=${title}`;
    // console.log(href)
    router.push(href);
  };

  return (
    <>
      <section className="outer" value={season}>
        <div className="inner">
          <button onClick={handle} value="2020">
            2020
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="2016">
            2016
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="2012">
            2012
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="2008">
            2008
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="2004">
            2004
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="2000">
            2000
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1996">
            1996
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1992">
            1992
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1988">
            1988
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1984">
            1984
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1980">
            1980
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1976">
            1976
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1972">
            1972
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1968">
            1968
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1964">
            1964
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1960">
            1960
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1956">
            1956
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1952">
            1952
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1948">
            1948
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1944">
            1944
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1940">
            1940
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1936">
            1936
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1932">
            1932
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1928">
            1928
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1924">
            1924
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1920">
            1920
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1916">
            1916
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1912">
            1912
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1908">
            1908
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1904">
            1904
          </button>
        </div>
        <div className="inner">
          <button onClick={handle} value="1900">
            1900
          </button>
        </div>
      </section>
    </>
  );
};

export default all_season;
