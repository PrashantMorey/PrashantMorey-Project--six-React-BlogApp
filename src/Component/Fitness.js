import React, { useContext } from 'react'
import { context } from './RouterCompo';
import './Design.css';
import { Link } from 'react-router-dom';
import Gym from './Images/gym.jpg'


function Fitness() {
  const [bollywooddata] = useContext(context)
  console.log(bollywooddata);
    const Filter = bollywooddata.filter((item)=>item.cat==="Fitness")
    console.log(Filter);
  return (
    <div className='mainCompo'>
      <div>
        <h2 className='AllTitle'>Fitness</h2><hr className='underBoly'/>
        {Filter.filter((item)=>item.catu==="Fit")
        .map((value, index)=>{
          return (
            <div className='LeftSide'>
              <div>
                <img src={value.urlImg} alt='Bollywood Img' />
              </div>
              <div className='LeftSideSide'>
                <h4><Link  className='LeftSideSideLink' state={{data : value.id}} to='/postpage' >{value.title}</Link></h4>
                <p>{value.content}</p>
                <p style={{font: 'font: normal normal medium 17px/20px Montserrat'}}><span  style={{color: 'black'}}>Celebraty</span><span>/</span><span>Aug 21 2023</span></p>
              </div>
            </div>
          )
        })}
        </div>

        <div className='RightSide'>
          <h2 className='AllTitle'>Top Post</h2><hr className='underBoly'/>
        {Filter.filter((item)=>item.id===41)
        .map((value,index)=>{
          return(
            <div>
              <div  className='RightSideImg'>  
              <img src={value.urlImg} alt='Celebraty Img'/>  
              </div>
              <div className='RightSideSide'>
              <h4><Link className='LeftSideSideLink'  state={{data : value.id}} to='/postpage' >{value.title}</Link></h4>
              <p><span  style={{color: 'black'}}>Celebraty</span><span>/</span><span style={{color: 'gray'}}>Aug 21 2023</span></p>
                
              </div>
              
            </div>
          )
        })}
        {Filter.filter((item)=>item.id>41)
        .map((value,index)=>{
          return(
            <div className='TopImgCard'>
                <div>  
                   <img  className='TopImgCardimg' src={value.urlImg} alt='Celebraty Img'/>  
                </div>
                <div style={{display:'flex', flexDirection:'column',justifyContent: 'space-between'}}>
                <h4 style={{margin:0 }}><Link className='LeftSideSideLink' state={{data : value.id}} to='/postpage' >{value.title}</Link></h4>
                <p><span  style={{color: 'black'}}>Celebraty</span><span>/</span><span style={{color: 'gray'}}>Aug 21 2023</span></p>       
                </div>      
            </div>
          )
        })}
        <div className='Advertise'>
          <img src={Gym} alt='Ad' />

        </div>
      </div>
      
    </div>
  )
}

export default Fitness
