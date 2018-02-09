

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Control extends Component{
    render(){
        return(
            <div className="control">
                <div className="indicator">
                    <ul className="btn_left_box">
                        <li><Link to="/notice"><img src="./assets/image/common/btn_left_2.png" alt="" /></Link></li>
                        <li><Link to="/notice"><img src="./assets/image/common/btn_left_1.png" alt="" /></Link></li>
                    </ul>

                    <ul className="btn_list_box">
                        <li className="on"><Link to="/notice">1</Link></li>
                        <li><Link to="/notice">2</Link></li>
                        <li><Link to="/notice">3</Link></li>
                        <li><Link to="/notice">4</Link></li>
                        <li><Link to="/notice">5</Link></li>
                        <li><Link to="/notice">6</Link></li>
                        <li><Link to="/notice">7</Link></li>
                        <li><Link to="/notice">8</Link></li>
                        <li><Link to="/notice">9</Link></li>
                        <li><Link to="/notice">99</Link></li>
                    </ul>

                    <ul className="btn_right_box">
                        <li><Link to="/notice"><img src="./assets/image/common/btn_right_1.png" alt="" /></Link></li>
                        <li><Link to="/notice"><img src="./assets/image/common/btn_right_2.png" alt="" /></Link></li>
                    </ul>
                </div>

                <div className="search">
                    <div className="search_box">
                        <input type="text" placeholder="제목검색입니다" />
                        <Link to="/notice">검색</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Control;