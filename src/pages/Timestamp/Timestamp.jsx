import React from 'react';
import './Timestamp.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Year2023, Year2022, Year2021, Year2020 } from './History';

const Timestamp = () => {
  return (
    <div className="timestamp" id="timestamp">
      <Header />
      <div className="timestamp_items">
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2023</h2>
          <ul className="timestamp_lists">
            { Year2023.map(i => {
              return (
                <li className="timestamp_list" id="tl-mobile">({i.when}) <a href={i.href} target="_blank" rel="noreferrer">{i.innerLink}</a>{i.content}</li>
              )
            })}
          </ul>
        </div>
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2022</h2>
          <ul className="timestamp_lists">
          { Year2022.map(i => {
              return (
                <li className="timestamp_list" id="tl-mobile">({i.when}) <a href={i.href} target="_blank" rel="noreferrer">{i.innerLink}</a>{i.content}</li>
              )
            })}
          </ul>
        </div>
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2021</h2>
          <ul className="timestamp_lists">
          { Year2021.map(i => {
              return (
                <li className="timestamp_list" id="tl-mobile">({i.when}) <a href={i.href} target="_blank" rel="noreferrer">{i.innerLink}</a>{i.content}</li>
              )
            })}
          </ul>
        </div>
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2020</h2>
          <ul className="timestamp_lists">
          { Year2020.map(i => {
              return (
                <li className="timestamp_list" id="tl-mobile">({i.when}) <a href={i.href} target="_blank" rel="noreferrer">{i.innerLink}</a>{i.content}</li>
              )
            })}
          </ul>
        </div>
        <div className="timestamp_project">
          자세한 프로젝트들은 <a href="https://marked-fern-cd3.notion.site/19cc2c4dffe44f55b55e0f70dfd21b1a?v=ee0f25f2cbb847929f01651225a95597&pvs=4" target="_blank" rel="noreferrer">여기</a>에서 확인해주세요.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timestamp;
