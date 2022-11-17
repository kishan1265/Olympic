import React,{useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Info from '../component/olympic_content'
import { useRouter } from 'next/router'

const Olympic = () => {
  const router = useRouter()
  const [olympic, setNation] = useState('')

  const handle = (event) => {
      setNation(event.target.value)
      const href = `/olympic_next/${event.target.value}`;
      // console.log(href)
      router.push(href)
  }

  const olympicComponent = (
    <> 
      <Header/>
    <Info />
    <form>
      <select onChange={handle} value={olympic} className="dropdownbutton" id="cars" name="cars">
        <option value="Default">select olympic</option>
        <option value="2008">2008</option>
        <option value="2012">2012</option>
        <option value="2016">2016</option>
        <option value="2020">2020</option>
      </select>
    </form>

    <Footer/>
    </>
    );

  return (
    <>
      {olympicComponent}
    </>
  )
}

export default Olympic