import Footer from "./../component/footer";
import Header from "../component/header";
import Main from "../component/main_page";
import Card from "../component/card_main";
import all_sports from "./../public/side-sports-removebg.png";
import all_year from "./../public/side-year-removebg.png";
import Nation from "./../public/side-nation.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Main />

      <section>
        <div className="three_side-by-side-button">
          <Card title={{ first: Nation, second: "Nation", third: "/Nation" }} />
          <Card
            title={{ first: all_sports, second: "Sports", third: "/Sports" }}
          />
          <Card
            title={{ first: all_year, second: "Season", third: "/Olympic" }}
          />
        </div>

        <div className="player">
          <p className="title_intro" style={{ textAlign: "center" }}>
            <b>Insert Player details</b>
          </p>
          <Link href="/insert_player">
            <button className="btnc">Insert Player details</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
