import React from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import All_spots from '../../component/all_sports_icon'
import All_flag from '../../component/all_country_flag'
import { useRouter } from 'next/router'

const Olympic_next = () => {
  const router = useRouter();

  const {olympic} = router.query;
  return (
    <>
        <Header/>
          <b>
            <p className="title_intro" style={{ textAlign: "center" }}>
              {olympic} Athletes in the Olympics
              <br />
              <span className="name-color">All time information of {olympic} year</span>
            </p>{" "}
          </b>

          <h1 className='hading'>country's information of {olympic}</h1>
        <All_flag title = {olympic} />
          <h1 className='hading'>Sports at the {olympic} olympic</h1>
        <All_spots title = {olympic} />
        
        <Footer/>
    </>
  )
}

export default Olympic_next