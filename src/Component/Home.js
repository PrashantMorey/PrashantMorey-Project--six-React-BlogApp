import React, { useContext } from "react";
import img from "./Images/GS.jpg";
import imgg from "./Images/NR.jpg";
import imggg from "./Images/GB.jpg";
import { context } from "./RouterCompo";
import { Link } from 'react-router-dom';
import Add from './Images/TomatoAdd.jpg'
import boly from './Images/bolly.jpg'
import "./Design.css";

function Home() {
  const [DataOne] = useContext(context);
  const FilterLatest = DataOne.filter((item) => item.cat === "url");
  console.log(FilterLatest);


  return (
    <div>

        <div className="home">
        {FilterLatest.filter((item) => item.id === 70).map(
    (value, index) => {
      return (
        <>
        <div className="home1">
          <img src={value.urlImg} alt="Home Img" />
          <div className="insideHome1">
            <p style={{ marginBottom: 2 }}>
            <Link     style={{color:'white'}}               
                state={{ data: value.id }}
                to="/postpage" >
                {value.title}
            </Link>
            </p>
            <span style={{ fontSize: 14 }}>Travel / Aug 27 2023</span>
          </div>
        </div>
        </>
      );
      })}



       
        <div className="home2main">
                  {FilterLatest.filter((item) => item.id === 71).map(
                  (value, index) => {
                    return (
                      <>
                        <div className="home2">
                          <img src={value.urlImg} alt="Home Img" />
                          <div className="insideHome2">
                            <p style={{ marginBottom: 2 }}>
                              <Link          style={{color:'white'}}          
                                  state={{ data: value.id }}
                                  to="/postpage" >
                                  {value.title}
                              </Link>
                            </p>
                            <span style={{ fontSize: 10 }}>Travel / Aug 27 2023</span>
                          </div>
                        </div>
                      </>
                    );
                  })}


                {FilterLatest.filter((item) => item.id === 72).map(
                (value, index) => {
                  return (
                    <>
                      <div className="home2 changeSide">
                        <img src={imggg} alt="Home Img" />
                        <div className="insideHome2">
                          <p style={{ marginBottom: 2 }}>
                          <Link   style={{color:'white'}}                
                              state={{ data: value.id }}
                              to="/postpage" >
                              {value.title}
                          </Link>
                          </p>
                          <span style={{ fontSize: 10 }}>Travel / Aug 27 2023</span>
                        </div>
                      </div>
                      </>
                  );
                })}
        </div>

      </div>





      <div className="sideoflatest">
        <p className="AllTitle">The Latest</p>
        <hr className="underBoly" />
      </div>
      <div className="TheLatestFlex">
        {FilterLatest.filter((item) => item.catu === "TheLatest").map(
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
                    <p className="TheLatestDis">{value.content}</p>
                    <p>
                      <span style={{ color: "black" }}>
                        <b> Celebraty</b>
                      </span>
                      <span>/</span>
                      <span style={{ color: "gray" }}>Aug 21 2023</span>
                    </p>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>

      <div className="sideoflatest">
        <p className="AllTitle">Latest Articles</p>
        <hr className="underBoly" />
      </div>

      <div className="FlexArticles">
        <div className="FlexArticlesLeft">
          {FilterLatest.filter((item) => item.catu === "LatestArticleone").map(
            (value, index) => {
              return (
                <div className="LeftSide1">
                  <div className="LeftSide12">
                    <img src={value.urlImg} alt="Bollywood Img" />
                  </div>
                  <div className="LeftSideSide">
                    <h4>
                      <Link
                        className="LeftSideSideLink"
                        state={{ data: value.id }}
                        to="/postpage"
                      >
                        {value.title}
                      </Link>
                    </h4>
                    <p>{value.content}</p>
                    <p
                      style={{
                        font: "font: normal normal medium 17px/20px Montserrat",
                      }}
                    >
                      <span style={{ color: "black" }}>Celebraty</span>
                      <span>/</span>
                      <span>Aug 21 2023</span>
                    </p>
                  </div>
                </div>
              );
            }
          )}
          {FilterLatest.filter((item) => item.catu === "LatestArticle").map(
            (value, index) => {
              return (
                <div className="LeftSide">
                  <div>
                    <img src={value.urlImg} alt="Bollywood Img" />
                  </div>
                  <div className="LeftSideSide">
                    <h4>
                      <Link
                        className="LeftSideSideLink"
                        state={{ data: value.id }}
                        to="/postpage"
                      >
                        {value.title}
                      </Link>
                    </h4>
                    <p>{value.content}</p>
                    <p
                      style={{
                        font: "font: normal normal medium 17px/20px Montserrat",
                      }}
                    >
                      <span style={{ color: "black" }}>Celebraty</span>
                      <span>/</span>
                      <span>Aug 21 2023</span>
                    </p>
                  </div>
                </div>
              );
            }
          )}
          <div className="TitleVerticle">
            <img src={boly} alt="Home Img" />
          </div>
        </div>

        <div className="FlexArticlesRight">
          <div className="Advertise">
            <img src={Add} alt="Ad" />
          </div>
          <h2 className="AllTitle">Top Post</h2>
          <hr className="underBoly" />
          {FilterLatest.filter((item) => item.catu === "TopPostt").map(
            (value, index) => {
              return (
                <div>
                  <div className="RightSideImg">
                    <img
                      
                      src={value.urlImg}
                      alt="Celebraty Img"
                    />
                  </div>
                  <div className="RightSideSide">
                    <h4>
                      <Link
                        className="LeftSideSideLink"
                        state={{ data: value.id }}
                        to="/postpage"
                      >
                        {value.title}
                      </Link>
                    </h4>
                    <p>
                      <span style={{ color: "black" }}>Celebraty</span>
                      <span>/</span>
                      <span style={{ color: "gray" }}>Aug 21 2023</span>
                    </p>
                  </div>
                </div>
              );
            }
          )}
          {FilterLatest.filter((item) => item.catu === "TopPost").map(
            (value, index) => {
              return (
                <div className="TopImgCard">
                  <div>
                    <img
                      className="TopImgCardimg"
                      src={value.urlImg}
                      alt="Celebraty Img"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4 style={{ margin: 0 }}>
                      <Link
                        className="LeftSideSideLink"
                        state={{ data: value.id }}
                        to="/postpage"
                      >
                        {value.title}
                      </Link>
                    </h4>
                    <p>
                      <span style={{ color: "black" }}>Celebraty</span>
                      <span>/</span>
                      <span style={{ color: "gray" }}>Aug 21 2023</span>
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="sideoflatest">
        <p className="AllTitle">Latest Stories </p>
        <hr className="underBoly" />
      </div>
      <div className="TheLatestFlex">
        {FilterLatest.filter((item) => item.catu === "TheLatest").map(
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
                    <p className="TheLatestDis">{value.content}</p>
                    <p>
                      <span style={{ color: "black" }}>
                        <b> Celebraty</b>
                      </span>
                      <span>/</span>
                      <span style={{ color: "gray" }}>Aug 21 2023</span>
                    </p>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>

    </div>
  );
}

export default Home;
