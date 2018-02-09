

import React, { Component } from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

class Gnb extends Component
{
    constructor( props )
    {
        super( props );
    }

    componentDidMount()
    {
        let _index = this.props.gnbIndex;

        function init()
        {
            create();
            addEvent();

            showGnb( _index );
        }

        let _list;
        let _logo;
        function create()
        {
            _logo = $( "h1" );
            _logo.on( "click", logoClick );

            _list = $( ".nav_list" ).children( "li" );
            _list.on( "mouseenter", listOver );
            _list.on( "mouseleave", listOut );
            _list.on( "click", listClick );
        }

        function logoClick( $e )
        {
            _index = -1;
            showGnb( _index );
        }

        function listOver( $e )
        {
            showGnb( $( this ).index() );
        }

        function listOut( $e )
        {
            showGnb( _index );
        }

        function listClick( $e )
        {
            _index = $( this ).index();
            showGnb( _index );
        }

        function showGnb( $index )
        {
            _list.removeClass( "on" );

            var item = $( _list[ $index ]);
            item.addClass( "on" );
        }

        function addEvent()
        {

        }

        init();
    }

    render()
    {

        return(
            <div className="header">
                <div className="inner">
                    <h1>
                        <Link to="/">
                            <img src="./assets/image/main/logo_off.png" alt="logo" className="off" />
                            <img src="./assets/image/main/logo_on.png" alt="logo" className="on" />
                        </Link>
                    </h1>
                    <ul className="nav_list">
                        <li><Link to="/about">회사소개</Link></li>
                        <li><Link to="/disclosure">공시정보</Link></li>
                        <li><Link to="/notice">공지사항</Link></li>
                        <li><Link to="/qna">묻고 답하기</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Gnb;