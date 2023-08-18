import React, { useContext } from 'react'
import { context } from './RouterCompo'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import clap from './Images/Clap.png'
import share from './Images/share.png'
import mask from './Images/Mask.png'
import facebook from './Images/facebook.png'
import twitter from './Images/twitter.png'
import instagram from './Images/instagram.png'
import youtube from './Images/youtube.png'
import './Design.css';



function Postpage() {
  const nav = useNavigate();
  function handleLocation (){
    nav('/')
  }
    const [PageData] = useContext(context)
    const ind = useLocation()
    console.log(ind);
    const IndexValue = useLocation().state.data
    // const MoreData = PageData
    const Filter = PageData.filter((item)=>item.id===IndexValue)
  return (
    <div>
      <div className="headerPostpage sticky">
        <div className="HeadingPostpage"  onClick={handleLocation}>
          <div className="HeadingPostpage1">The</div>
          <div className="HeadingPostpage2">Siren</div>
        </div>
        <button className="getStarted">Get Started</button>
      </div>
      <div className='marginPost'>
      <div className="logosOfLikes">
        <div className="likeLogo">
          <img src={clap} alt="Clap img" />
          <p>9.3k claps</p>
        </div>
        <div className="likeLogo">
          <img src={share} alt="Share img" />
          <p>Share this article</p>
        </div>
      </div>

      <div className="FixTheBox">
        {Filter.map((value, index) => {
          return (
            <>
              <h2 className="CardHeading">{value.title}</h2>
              <div className="logoBox">
                <div className="personInfo">
                  <div>
                    <img className="personInfo1" src={mask} alt="Profile img" />
                  </div>
                  <div className="persInfo">
                    <h3>
                      <b> Dmitry Nozhenko</b>
                    </h3>
                    <p>jan 28 2023 : 10 min read</p>
                  </div>
                </div>
                <div className="LogosOfShare">
                  <img className="imgFace" src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                  <img className="imgYou" src={youtube} alt="youtube" />
                </div>
              </div>
              <div className="MainImg">
                <img src={value.urlImg} alt="Main Img" />
              </div>
              <div className="discription">
                <p>{value.discription} </p>
              </div>
              <div className="likeLogo">
                <img src={clap} alt="Clap img" />
                <p>9.3k claps</p>
              </div>
              <div className="personInfo">
                <div>
                  <img className="personInfo1" src={mask} alt="Profile img" />
                </div>
                <div className="persInfo">
                  <h3>
                    <b> Dmitry Nozhenko</b>
                  </h3>
                  <p>jan 28 2023 : 10 min read</p>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div>
        <p style={{fontWeight:'bolder'}}>More From The Siren</p>
        <div className="TheLatestFlex" style={{marginTop:30}}>
          {PageData.filter((item) => item.catu === "TopSiren").map(
            (value, index) => {
              return (
                <>
                  <div className="TheLatest">
                    <img src={value.urlImg} alt="Latest Img" />
                    <div className="TheLatestDison">
                      <h2 className="TheLatestHead">
                        <Link
                          className="LeftSideSideLink"
                          state={{ data: value.id }}
                          to="/postpage"
                        >
                          {value.title}
                        </Link>
                      </h2>
                      <div className="personInfo">
                <div className='PerInfo'>
                  <img className="PerInfo1" src={mask} alt="Profile img" />
                </div>
                <div className="persInfo">
                  <h3>
                    <b> Dmitry Nozhenko</b>
                  </h3>
                  <p>jan 28 2023 : 10 min read</p>
                </div>
              </div>
                    </div>
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
export default Postpage
