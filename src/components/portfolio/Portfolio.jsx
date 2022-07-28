import React from 'react';
import './portfolio.css';
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import memegleImg from "../../assets/memegle.png";
import hsPortfolioImg from "../../assets/hsPortfolio.png";
import calculatorImg from "../../assets/calculator.png";
import weatherImg from "../../assets/weather.png";
import kaggleImg from "../../assets/kaggle.png";
import chatbotImg from "../../assets/chatbot.png";
import dsc96Img from "../../assets/dsc96.png";
import cse12Img from "../../assets/cse12.png";
import authImg from "../../assets/auth.png";
import crossItImg from "../../assets/crossIt.png";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>What are some of my</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
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
            <a href="https://github.com/kevinhuang4/mern-auth" className="btn"><BsGithub /></a>
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
            <a href="https://github.com/kevinhuang4/hs-makers-portfolio" className="btn"><BsGithub /></a>
            <a href="https://kevinhuang4.github.io/hs-makers-portfolio/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item4">
            <img src={crossItImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>CrossIt</h3>
            <p>Web Reminder. Developed using the MERN stack.</p>
            <a href="https://github.com/kevinhuang4/todo-app" className="btn"><BsGithub /></a>
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
            <a href="https://github.com/kevinhuang4/carbonfootprintcalculator " className="btn"><BsGithub /></a>
            <a href="https://kevinhuang4.github.io/carbonfootprintcalculator/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item6">
            <img src={weatherImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>Weather App</h3>
            <p>Frontend - React.js, Backend - Node.js + OpenWeatherAPI</p>
            <a href="https://github.com/kevinhuang4/weather-react" className="btn"><BsGithub /></a>
            <a href="https://kevinhuang4.github.io/weather-react/" className="btn btn-primary"><BiLink /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img"id="portfolio__item7">
            <img src={kaggleImg} alt="" />
          </div>
          <div className="portfolio__item-text" id="portfolio__text7">
            <h3>Data Analysis & Prediction</h3>
            <p>Kaggle projects. Explanatory Data Analysis + Applying ML models.</p>
            <a href="https://github.com/kevinhuang4?tab=repositories" className="btn"><BsGithub /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img"id="portfolio__item8">
            <img src={chatbotImg} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>Simple Python Chatbot</h3>
            <p>Developed using NLTK and Neural Networks.</p>
            <a href="https://github.com/kevinhuang4/ChatBot" className="btn"><BsGithub /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img" id="portfolio__item9">
            <img src={dsc96Img} alt="" />
          </div>
          <div className="portfolio__item-text" id="portfolio__text9">
            <h3>DSC96 Projects</h3>
            <p>Class projects. Dealing with text, audio, image, and time-series data.</p>
            <a href="https://github.com/kevinhuang4/DSC96_W22" className="btn"><BsGithub /></a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img"id="portfolio__item10">
            <img src={cse12Img} alt="" />
          </div>
          <div className="portfolio__item-text">
            <h3>CSE12 PAs</h3>
            <p>Class projects. Data Structures: stack, queue, linkedlist, hashmap, bst, and heap.</p>
            <a href="https://github.com/kevinhuang4/CSE12_SP22" className="btn"><BsGithub /></a>
          </div>
        </article>
      </div>
    </section>
  )
};

export default Portfolio;