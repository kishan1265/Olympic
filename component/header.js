import React from 'react'
import olypic_symbol from './../public/olympic_back-removebg.png'
import Image from 'next/image'
import Link from 'next/link'

const header = () => {
  return (
    <header className="heading">
    <Link href="/">
      <Image className="icon" src={olypic_symbol} />
      <h1 className="icon-name"> Olympic </h1>
    </Link>
    <nav className="menu-item" id="menu">
      <ul>
        <li>
          <Link className="action" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Nation">Nations</Link>
        </li>
        <li>
          <Link href="/Sports">Sports</Link>
        </li>
        <li>
          <Link href="/Olympic">Olympic</Link>
        </li>
        <li>
          <a href="javascript:void(0);" className="ico" onclick="myFunction()">
            <i className="fa fa-bars" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default header