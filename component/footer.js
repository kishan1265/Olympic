import Link from 'next/link'
import React from 'react'

export default function Footer () {
  return (
    <footer>
    <section className="contact-title">Contact</section>
    <section className="contact-detail">
      <div className="portfolio">
        <h2>Olympic database</h2>
        <p style={{ color: "rgb(216, 223, 229)" }}>
          All information and facts about the olympics are presented on the
          background of thorough studies of the most important sources on the
          history of Olympic competitions as well as a substantial interest and
          passion for the worlds biggest sports event. Enjoy!
        </p>
      </div>
      <div className="quick-link">
        <h2>Quick Links</h2>
        <nav className="quick">
          <ul className="makeui">
            <li className="makeli">
              <Link href="/">Home</Link>
            </li>
            <li className="makeli">
              <Link href="/Nation">Nations</Link>
            </li>
            <li className="makeli">
              <Link href="/Sports">Sports</Link>
            </li>
            <li className="makeli">
              <Link href="/Olympic">Olympics</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social">
        <h2>Contact Info</h2>
        <p style={{ color: "rgb(216, 223, 229)" }}>
          <i
            className="bx bxs-phone-call"
            style={{ marginRight: 8, color: "gold" }}
          />
          +91 9487564512
          <br />
          <br />
          <i
            className="bx bxs-envelope"
            style={{ marginRight: 8, color: "gold" }}
          />
          Olympicdatabase_15@gmail.com
          <br />
          <br />
          <i className="bx bxs-map" style={{ marginRight: 8, color: "gold" }} />
          Gandhinagar,india
          <br />
          <br />
        </p>
      </div>
    </section>
  </footer>
  )
}
