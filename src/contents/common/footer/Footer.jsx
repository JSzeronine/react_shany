

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component
{
    render(){
        return(
            <div id="footer">
            <div className="inner">
                <h2><img src="./assets/image/main/foot_logo.png" alt="shany" /></h2>
                <div className="info_area">
                    <p className="info"><span className="address">경기도 성남시 둔촌대로457번길 13(상대원동305)</span><span>성남공장 : 031-739-2000</span><span className="tel">AM 10:00~PM 5:00 / 점심시간 PM 12:30~01:30 (주말, 공휴일 휴무)</span></p>
                    <ul className="btn_list">
                        <li><Link to="/Home" className="btn_privacy">개인정보 취급방침</Link></li>
                        <li><Link to="/Home" className="btn_map">찾아오시는 길</Link></li>
                    </ul>
                    <p className="capyright">Copyright ⓒ SHANY All rights reserved</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer;