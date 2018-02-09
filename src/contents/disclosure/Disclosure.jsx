

import React, { Component } from "react";
import AnimatedWrapper from "./../AnimateWrapper";
import { Link } from "react-router-dom";

import Board from "./../common/board/Board";
import Control from "./../common/board/Control";

import request from "superagent";

class DisclosureComponent extends Component
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
        request.get( "./assets/data/disclosure.json" )
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
            <div id="disclosure">
                <div className="top">
                    <dl>
                        <dt>공시정보</dt>
                        <dd>SHANY의 투명한 공시정보 입니다</dd>
                    </dl>
                </div>

            <div className="notice st">
                <Board data={ this.state.data } />
                <Control />
            </div>
        </div>
        )
    }
}

const Disclosure = AnimatedWrapper( DisclosureComponent );
export default Disclosure;
