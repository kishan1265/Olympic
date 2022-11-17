import React from 'react'
import olypic_main from './../public/index_main_imges-removebg.png'
import Image from 'next/image'

const main_page = () => {
  return (
    <section className="full-page">
    <b>
      <p className="title_intro" style={{ textAlign: "center" }}>
        Olympic database
        <br />
        <span className="name-color">Facts about the Olympics</span>
      </p>{" "}
    </b>
    <div className="side-by-side">
      <div className="title_intro">
        <Image className="main_img" src={olypic_main} />
      </div>
      <div className="basic_info">
        <h3>Olympic History Facts</h3>
        <p>
          Olympian Database is an independent resource about Olympic history.
          The database brings you Olympic history in its detail from a number of
          different perspectives.
        </p>
        <p>
          <span className="info-size">Sports and events</span> - facts about all
          competitions in the Summer and Winter Olympics
          <br />
          <span className="info-size">All Olympic Games</span> - are explored in
          depth for each sport and event
          <br />
          <span className="info-size">Nations at the Olympic Games</span> -
          information about each of the National Olympic Committees (NOCs)
          participation in the Olympics
          <br />
          In total these perspectives cover the history of the modern Summer and
          Winter Olympics and any result, medal standing, all-time sports facts
          or a nations achievements is reached within a few clicks. For more
          about the Olympian Database project read here .
        </p>
      </div>
    </div>
    </section>
  )
}

export default main_page