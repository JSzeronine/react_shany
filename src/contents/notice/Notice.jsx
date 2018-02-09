

import React, { Component } from "react";
import AnimatedWrapper from "./../AnimateWrapper";
import { Link } from "react-router-dom";

import Board from "./../common/board/Board";
import Control from "./../common/board/Control"

import request from "superagent";

class NoticeComponent extends Component
{
    constructor()
    {
        super();
        this.state = {
            data : null
        }
    }

    componentWillMount()
    {
        request.get( "./assets/data/notice.json" )
                .accept( "application/json" )
                .end(( err, res ) => {
                    this.loadComplete( err, res );
                });  
    }

    loadComplete( $err, $res )
    {
        if( $err ){
            alert( "ERROR" );
            return;
        }

        let data = $res.body.result.list;

        this.setState({
            data : data
        });
    }

    render(){
        if( this.state.data == null ){
            return <div>데이터 불러오는중..</div>
        }

        return(
            <div id="notice">
                <div className="top">
                    <dl>
                        <dt>공지사항</dt>
                        <dd>SHANY에서 알려드립니다</dd>
                    </dl>
                </div>

                <div className="notice st">
                    <div className="menus">
                        <ul>
                            <li className="on"><Link to="/notice">전체</Link></li>
                            <li><Link to="/notice">공지사항</Link></li>
                            <li><Link to="/notice">채용정보</Link></li>
                        </ul>
                    </div>
                    <Board data={ this.state.data } />
                    <Control />
                </div>
            </div>
        )
    }
}

const Notice = AnimatedWrapper( NoticeComponent );
export default Notice;