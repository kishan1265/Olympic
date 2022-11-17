import React from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import All_spots from '../../component/all_sports_icon'
import All_season from '../../component/all_season'
import { useRouter } from 'next/router'

const Nation_next = () => {
  const router = useRouter();
  const {nation} = router.query;
  
  return (
    <>
        <Header/>
          <b>
            <p className="title_intro" style={{ textAlign: "center" }}>
              {nation} Athletes Details of in the Olympics
              <br />
              <span className="name-color">All time information of {nation}</span>
            </p>{" "}
          </b>
        <h1 className='hading'>Sports of {nation} in olympic</h1>
        <All_spots title = {nation} />
        <h1 className='hading'>Season of {nation} in olympic</h1>
        <All_season title = {nation} />
        <Footer/>
    </>
  )
}

export default Nation_next