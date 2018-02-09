

import React, { Component } from "react";
import AnimatedWrapper from "./../AnimateWrapper";

class AboutComponent extends Component
{
    render(){
        return(
            <div id="about">
                <div className="top">
                    <dl>
                        <dt>회사소개</dt>
                        <dd>제빵과제빵업계의 전상 SHANY</dd>
                    </dl>
                </div>

                <div className="about st">
                    <h2>SHANY’S HISTORY</h2>

                    <div className="list">
                        <h3>
                            <img src="./assets/image/about/logo2.png" alt="" />
                        </h3>

                        <div className="content_left">

                            <ul>
                                <li>
                                    <div className="info_date">
                                        <span className="date_num">1972</span>
                                        <span className="date_year">년</span>
                                        <img src="./assets/image/about/icon_date_0.png" alt="" />
                                    </div>

                                    <dl>
                                        <dt>
                                            고급 케익 전문회사로 출범<br />
                                            ‘케익의 대명사 샤니’
                                        </dt>
                                        <dd>
                                            1972년 10월 고급 케익 생산 전문회사로 출발한 샤니(당시 상호는 한국인터내쇼날식품(주)는<br />
                                            링고, 진주, 하니, 요들 케익 등 고급 빵과 케익을 생산하여 창립 초기부터 소비자들에게<br />
                                            '케익의대명사 샤니'라는 호칭을 얻었다. 또한 샤니는 1973년 6월 직영 판매점인 '샤니의집'을<br />
                                            서울 명동의 국립극장 옆에 개점하였다. 샤니의 집은 이후 샤니가 파리크라상과 파리바게뜨,<br />
                                            프리미엄 아이스크림 등 외식 프랜차이즈 산업에 진출하게 되는 효시가 되었다.
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <div className="info_date">
                                        <span className="date_num">1990</span>
                                        <span className="date_year">년대</span>
                                        <img src="./assets/image/about/icon_date_0.png" alt="" />
                                    </div>

                                    <dl>
                                        <dt>
                                            ‘한마음 2000운동’<br />
                                            베이커리풍의 고급브랜드 꼬메뜨 출시<br />
                                            ISO 9001 품질 인증 획득
                                        </dt>
                                        <dd>
                                            1990년대에 들어서면서부터 혁신과 내실을 위한 '한마음 2000운동'과 더불어 제품의<br />
                                            품질고급화를 위한 본격적인 전략을 추진하였다. 베이커리풍의 고급 브랜드인 꼬메뜨를<br />
                                            출시하여 당시 확산일로에 있던 편의 점 및 대형 유통시장을 선점하였으며,<br />
                                            이태리 바울리사와 자체적으로 확보하여 양산빵에 대한 품질혁신을 도모하였다.<br />
                                            ISO 9001 품질 인증획득을 통한 제품 안전성을 확보하였다. 또한 쌀 발효액을 이용한 제품인<br />
                                            팡찌니를 출시하여 겨울철의 대표제품인 찐빵에 대한 일대 혁신을 꾀하였다.
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <div className="info_date">
                                        <span className="date_num">~ </span>
                                        <span className="date_year">현재</span>
                                        <img src="./assets/image/about/icon_date_0.png" alt="" />
                                    </div>

                                    <dl>
                                        <dt>
                                            사회적 책임을 위한 ‘나눔경영, 상생경영’<br />
                                            신노사문화 우수기업
                                        </dt>
                                        <dd>
                                            샤니는 이러한 외형 성장에 그치지 않고 기업의 사회적 책임을 다하기 위한 나눔경영에의<br />
                                            참여와 협력적 노사관계를 통한 종업원과의 상생경영에도 많은 힘을 쏟았다.<br />
                                            바람직한 노사문화와 신뢰 경영, 참여경영을 통한 샤니 및 호남샤니가 신노사문화<br />
                                            우수기업으로 있으며, 일류기업으로 성장해 나가고 있다.
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>

                        <div className="content_right">
                            <ul>
                                <li>
                                    <div className="info_date">
                                        <img src="./assets/image/about/icon_date_1.png" alt="" />
                                        <span className="date_num">1984</span>
                                        <span className="date_year">년</span>
                                        <span className="date_num">~ </span>
                                        <span className="date_num">1989</span>
                                        <span className="date_year">년</span>
                                    </div>

                                    <dl>
                                        <dt>
                                            식품기술 연구소 발족<br />
                                            영국 라이온스사와 기술제휴<br />
                                            양산빵업계 지역단위 생산시스템 구축
                                        </dt>
                                        <dd>
                                            1984년 업계 최초로 연구 기능 강화를 위한 식품기술연구소를 발족시켰으며, 프랑스 소래 <br />
                                            답사와 기술제휴로 고급 품질의 땅뜨마리잼 사업을 본 궤도에 올려놓았다. 1987년 영국 <br />
                                            라이온스사와 기술제휴로 개발한 '파티니'브랜드는 제품에 대한 신선도를 높였을 뿐만 아니라 <br />
                                            유통구조 합리화에도 크게 기여하였다. 1989년 3월 대구공장이 본격 가동에 들어감으로써 <br />
                                            양산빵업계 최초로 지역단위 생산시스템 구축을 완결하였다. 
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <div className="info_date">
                                        <img src="./assets/image/about/icon_date_1.png" alt="" />
                                        <span className="date_num">1997</span>
                                        <span className="date_year">년</span>
                                        <span className="date_num">~ </span>
                                        <span className="date_num">1999</span>
                                        <span className="date_year">년</span>
                                    </div>

                                    <dl>
                                        <dt>
                                            제과제빵업계 정상 샤니<br />
                                            포켓몬스터 제품 출시
                                        </dt>
                                        <dd>
                                            1997년에 제과제빵업계 정상의 자리에 우뚝 올라섰다. 1999년 7월에는 우리나라 캐릭터 <br />
                                            역사의 신화를 창조한 포켓몬스터 제품을 출시하여 6개월만인 12월에 들어서느 하루 5만 <br />
                                            상자를 돌파하는 기록을 세우는 등 제빵업계 사상 최고 기록을 수립하기도 하였다. 
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact" id="map">
                        <h3>찾아오시는 길</h3>
                        <address>
                            경기도 성남시 중원구 상대원1동 305번지
                        </address>

                        <dl>
                            <dt>전화번호 : </dt>
                            <dd>031-739-2000</dd>
                            <dd className="division">/</dd>
                            <dt>대표이사 : </dt>
                            <dd>윤석춘</dd>
                        </dl>

                        <div className="map"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const About = AnimatedWrapper( AboutComponent );
export default About;