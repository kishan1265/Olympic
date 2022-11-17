import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const card_main = ({title}) => {
  return (
    <div className="one-of-three">
        <Image className="button_img" src={title.first} />
        <Link href={title.third}>
          <button className="btnc">{title.second}</button>
        </Link>
    </div>
  )
}

export default card_main


