import React from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import All_season from '../../component/all_season'
import All_flag from '../../component/all_country_flag'
import { useRouter } from 'next/router'

const sports_next = () => {
  const router = useRouter();

  const {sports} = router.query;
  return (
    <>
        <Header/>
          <b>
            <p className="title_intro" style={{ textAlign: "center" }}>
              {sports} in the Olympics
              <br />
              <span className="name-color">All time information of {sports}</span>
            </p>{" "}
          </b>
        <h1 className='hading'>country's information of {sports}</h1>
        <All_flag title = {sports} />
        <h1 className='hading'>Season of {sports} in olympic</h1>
        <All_season title = {sports} />
        <Footer/>
    </>
  )
}

export default sports_next