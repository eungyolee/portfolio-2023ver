import React from 'react';
import './Timestamp.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Timestamp = () => {
  return (
    <div className="timestamp" id="timestamp">
      <Header />
      <div className="timestamp_items">
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2023</h2>
          <ul className="timestamp_lists">
            <li className="timestamp_list" id="tl-mobile">(August 2023) 염경중학교 학생기자단 홈페이지 완성</li>
            <li className="timestamp_list" id="tl-mobile">(July 2023) 선린인터넷고등학교 특별교육 프로그래밍 과정 수료</li>
            <li className="timestamp_list" id="tl-mobile">(February 2023) 구름 하이스쿨 알고리즘 캠프 수료</li>
            <li className="timestamp_list" id="tl-mobile">(January 2023 ~ 현재) Project_IO Official Team 소속 Front-End 개발자</li>
          </ul>
        </div>
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2022</h2>
          <ul className="timestamp_lists">
            <li className="timestamp_list" id="tl-mobile">(November 2022 ~ April 2023) WADE Studio 소속 견습생</li>
            <li className="timestamp_list" id="tl-mobile">(September 2022) 이은교 키우기 게임 개발</li>
            <li className="timestamp_list" id="tl-mobile">(July 2022) 염경중학교 위키 개발</li>
            <li className="timestamp_list" id="tl-mobile">(June 2022) 역사 문제 사이트 개발</li>
          </ul>
        </div>
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2021</h2>
          <ul className="timestamp_lists">
            <li className="timestamp_list" id="tl-mobile">(September 2021) Momentum 클론 코딩</li>
            <li className="timestamp_list" id="tl-mobile">(May 2021) 다음 생 국적 테스트 개발</li>
            <li className="timestamp_list" id="tl-mobile">(January 2021 ~ May 2022) KGITBANK 학원 수강</li>
          </ul>
        </div>
        <div className="timestamp_item">
          <h2 className="timestamp_year" id="ty-mobile">2020</h2>
          <ul className="timestamp_lists">
            <li className="timestamp_list" id="tl-mobile">(July 2020) GitHub 가입</li>
            <li className="timestamp_list" id="tl-mobile">(April 2020) 코딩 시작</li>
          </ul>
        </div>
        <div className="timestamp_project">
          자세한 프로젝트들은 <a href="https://github.com/eungyolee?tab=repositories" target="_blank" rel="noreferrer">여기</a>에서 확인해주세요.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timestamp;
