import React from 'react'
import Image from 'next/image'
import badmintan from './../public/allsport/badminton-removebg-preview.png'
import vallyball from './../public/allsport/valleyball-removebg-preview.png'
import archery from './../public/allsport/archery-removebg-preview.png'
import artistic_gymnastics from './../public/allsport/artistic_gymnastics-removebg-preview.png'
import athletics from './../public/allsport/athletics-removebg-preview.png'
import basketball from './../public/allsport/basketball-removebg-preview.png'
import beach_volleyball from './../public/allsport/beach_volleyball-removebg-preview.png'
import bmx_cycling from './../public/allsport/bmx_cycling-removebg-preview.png'
import boxing from './../public/allsport/boxing-removebg-preview.png'
import canoe_slalom from './../public/allsport/canoe_slalom-removebg-preview.png'
import canoe_sprint from './../public/allsport/canoe_sprint-removebg-preview.png'
import diving from './../public/allsport/diving-removebg-preview.png'
import equestrian_dressage from './../public/allsport/equestrian_dressage-removebg-preview.png'
import equestrian_eventing from './../public/allsport/equestrian_eventing-removebg-preview.png'
import equestrian_jumping from './../public/allsport/equestrian_jumping-removebg-preview.png'
import fencing from './../public/allsport/fencing-removebg-preview.png'
import football from './../public/allsport/football-removebg-preview.png'
import freestyle_wrestling from './../public/allsport/freestyle_wrestling-removebg-preview.png'
import golf from './../public/allsport/golf-removebg-preview.png'
import handball from './../public/allsport/handball-removebg-preview.png'
import hockey from './../public/allsport/hockey-removebg-preview.png'
import judo from './../public/allsport/judo-removebg-preview.png'
import marathon_swimming from './../public/allsport/marathon_swimming-removebg-preview.png'
import modern_pentathlon from './../public/allsport/modern_pentathlon-removebg-preview.png'
import mountain_bike from './../public/allsport/mountain_bike-removebg-preview.png'
import rhythmic_gymnastics from './../public/allsport/rhythmic_gymnastics-removebg-preview.png'
import road_cycling from './../public/allsport/road_cycling-removebg-preview.png'
import rowing from './../public/allsport/rowing-removebg-preview.png'
import rugby from './../public/allsport/rugby-removebg-preview.png'
import sailing from './../public/allsport/sailing-removebg-preview.png'
import shooting from './../public/allsport/shooting-removebg-preview.png'
import swiming from './../public/allsport/swiming-removebg-preview.png'
import synchroised_swimming from './../public/allsport/synchroised_swimming-removebg-preview.png'
import table_tennis from './../public/allsport/table_tennis-removebg-preview.png'
import taekwondo from './../public/allsport/taekwondo-removebg-preview.png'
import tennis from './../public/allsport/tennis-removebg-preview.png'
import track_cycling from './../public/allsport/track_cycling-removebg-preview.png'
import trampoline_gymnastics from './../public/allsport/trampoline_gymnastics-removebg-preview.png'
import triathlon from './../public/allsport/triathlon-removebg-preview.png'
import water_polo from './../public/allsport/water_polo-removebg-preview.png'
import weightlifting from './../public/allsport/weightlifting-removebg-preview.png'
import { useRouter } from 'next/router'
import { useState } from 'react'


const all_sports_icon = ({title}) => {

  const router = useRouter()
  const [sport, setNation] = useState('')

  const handle = (event) => {
    setNation(event.target.value)
    console.log(event)
    const href = `/sport_player/${event.target.value}?second=${title}`;
    //console.log(href)
    router.push(href)
  }

  return (
    <section className='outerbox' value = {sport}>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={badmintan}/>
    <button onClick={handle} className = "btn" value= "badminton"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={vallyball} />
    <button onClick={handle} className = "btn" value = "vallyball"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={archery} />
    <button onClick={handle} className = "btn" value = "archery"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={artistic_gymnastics} />
    <button onClick={handle} className = "btn" value = "artistic gymnastics"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={athletics} />
    <button onClick={handle} className = "btn" value = "athletics"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={basketball} />
    <button onClick={handle} className = "btn" value = "basketball"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={beach_volleyball} />
    <button onClick={handle} className = "btn" value = "beach vollyball"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={bmx_cycling} />
    <button onClick={handle} className = "btn" value = "bmx cycling"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={boxing} />
    <button onClick={handle} className = "btn" value = "boxing"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={canoe_slalom} />
    <button onClick={handle} className = "btn" value = "canoe slalom"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={canoe_sprint} />
    <button onClick={handle} className = "btn" value = "canoe sprint"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={diving} />
    <button onClick={handle} className = "btn" value = "diving"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={equestrian_dressage} />
    <button onClick={handle} className = "btn" value = "equestrian dressage"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={equestrian_eventing} />
    <button onClick={handle} className = "btn" value = "equestrian eventing"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={equestrian_jumping} />
    <button onClick={handle} className = "btn" value = "equestrian jumping"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={fencing} />
    <button onClick={handle} className = "btn" value = "fencing"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={football} />
    <button onClick={handle} className = "btn" value = "football"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={freestyle_wrestling} />
    <button onClick={handle} className = "btn" value = "freestyle wrestling"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={golf} />
    <button onClick={handle} className = "btn" value = "golf"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={handball} />
    <button onClick={handle} className = "btn" value = "handball"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={hockey} />
    <button onClick={handle} className = "btn" value = "hockey"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={judo} />
    <button onClick={handle} className = "btn" value = "judo"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={marathon_swimming} />
    <button onClick={handle} className = "btn" value = "marathon swimming"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={mountain_bike} />
    <button onClick={handle} className = "btn" value = "mountain bike"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={rhythmic_gymnastics} />
    <button onClick={handle} className = "btn" value = "rhythmic gymnastics"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={road_cycling} />
    <button onClick={handle} className = "btn" value = "road cycling"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={rowing} />
    <button onClick={handle} className = "btn" value = "rowing"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={rugby} />
    <button onClick={handle} className = "btn" value = "rugdy"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={sailing} />
    <button onClick={handle} className = "btn" value = "sailing"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={shooting} />
    <button onClick={handle} className = "btn" value = "shooting"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={swiming} />
    <button onClick={handle} className = "btn" value = "swiming"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={synchroised_swimming} />
    <button onClick={handle} className = "btn" value = "synchroised swimming"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={table_tennis} />
    <button onClick={handle} className = "btn" value = "table tennis"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={taekwondo} />
    <button onClick={handle} className = "btn" value = "taekwondo"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={tennis} />
    <button onClick={handle} className = "btn" value = "tennis"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={track_cycling} />
    <button onClick={handle} className = "btn" value = "track cycling"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={trampoline_gymnastics} />
    <button onClick={handle} className = "btn" value = "trampoline gymnastics"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={triathlon} />
    <button onClick={handle} className = "btn" value = "triathlon"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={water_polo} />
    <button onClick={handle} className = "btn" value = "water polo"></button>
    </div>
    <div className='innerebox'>
    <Image alt="alternative text" className="sport_img" src={weightlifting} />
    <button onClick={handle} className = "btn" value = "weightlifting"></button>
    </div>
  </section>
  )

}

export default all_sports_icon