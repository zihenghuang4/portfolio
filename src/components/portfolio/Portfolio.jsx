import React from 'react';
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import authImg from "../../assets/auth.png";
import bucketImg from '../../assets/bucket.png';
import calculatorImg from "../../assets/calculator.png";
import crossItImg from "../../assets/crossIt.png";
import dsc96Img from "../../assets/dsc96.png";
import hciImg from "../../assets/hci.png";
import hsPortfolioImg from "../../assets/hsPortfolio.png";
import kaggleImg from "../../assets/kaggle.png";
import memegleImg from "../../assets/memegle.png";
import weatherImg from "../../assets/weather.png";
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>See more of my</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img"id="portfolio__item10">
            <img src={bucketImg} alt="" />
          </div>
          <div className="portfolio__item-text" style={{color: "black"}}>
            <h3>Bucket.</h3>
            <p>Failed Startup attept. Tech stack: React.js, Firebase, Expo.dev</p>
            <a href="https://github.com/zihenghuang4/bucket_public" className="btn"><BsGithub /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img"id="portfolio__item8">
            <img src={hciImg} alt="" />
          </div>
          <div className="portfolio__item-text" style={{color: "black"}}>
            <h3>HCI Research</h3>
            <p>Teaching app for middle school science class. Using Meta's Segment Anything.</p>
            <a href="https://github.com/hmslydia/sms-teaching-app" className="btn"><BsGithub /></a>
          </div>
        </article>
        <article className="portfolio__item" id="portfolio__item1">
          <div className="portfolio__item-img">
            <img src={memegleImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>Memegle</h3>
            <p>Meme search engine. Frontend - React.js. Developed @UCSDTripleC.</p>
            <a href="https://github.com/Memegle/memegle" className="btn"><BsGithub /></a>
            <a href="http://frontend-performance-basecamp.s3-website.ap-northeast-2.amazonaws.com/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item2">
            <img src={authImg} alt="" />
          </div>
          <div className="portfolio__item-text" style={{color: "black"}}>
            <h3>User Authentication</h3>
            <p>Node.js + MongoDB for backend. Developed @UCSDACM.</p>
            <a href="https://github.com/zihenghuang4/mern-auth" className="btn"><BsGithub /></a>
            <a href="https://ziheng-mern-auth.herokuapp.com/register" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item3">
            <img src={hsPortfolioImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>HS Maker's Portfolio</h3>
            <p>4 Engineering Projects displayed. Developed using React.js.</p>
            <a href="https://github.com/zihenghuang4/hs-makers-portfolio" className="btn"><BsGithub /></a>
            <a href="https://zihenghuang4.github.io/hs-makers-portfolio/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item4">
            <img src={crossItImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>CrossIt</h3>
            <p>Web Reminder. Developed using the MERN stack.</p>
            <a href="https://github.com/zihenghuang4/todo-app" className="btn"><BsGithub /></a>
            <a href="https://ziheng-todo-app.herokuapp.com/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item5">
            <img src={calculatorImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>Co2 Footprint Calc</h3>
            <p>Estimates user's annual CO2 emission. Develoepd using React.js.</p>
            <a href="https://github.com/zihenghuang4/carbonfootprintcalculator " className="btn"><BsGithub /></a>
            <a href="https://zihenghuang4.github.io/carbonfootprintcalculator/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item6">
            <img src={weatherImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>Weather App</h3>
            <p>Frontend - React.js, Backend - Node.js + OpenWeatherAPI</p>
            <a href="https://github.com/zihenghuang4/weather-react" className="btn"><BsGithub /></a>
            <a href="https://zihenghuang4.github.io/weather-react/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img"id="portfolio__item7">
            <img src={kaggleImg} alt="" />
          </div>
          <div className="portfolio__item-text" id="portfolio__text7">
            <h3>Data Analysis & Prediction</h3>
            <p>Kaggle projects. Explanatory Data Analysis + Applying ML models.</p>
            <a href="https://github.com/zihenghuang4?tab=repositories" className="btn"><BsGithub /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item9">
            <img src={dsc96Img} alt="" />
          </div>
          <div className="portfolio__item-text" id="portfolio__text9">
            <h3>DSC96 Projects</h3>
            <p>Class projects. Dealing with text, audio, image, and time-series data.</p>
            <a href="https://github.com/zihenghuang4/DSC96_W22" className="btn"><BsGithub /></a>
          </div>
        </article>
        
      </div>
    </section>
  )
};

export default Portfolio;