import React, { Component } from "react";
import $ from "jquery";
import TweenMax, { Expo } from "gsap";

class HomeVisual extends Component
{
    constructor()
    {
        super();
        this.auto = 0;
    }

    componentDidMount()
    {
        this.init();
    }

    init()
    {
        var _this = this;

        function init()
        {
            addEvent();
            create();

            show( _index );

            clearInterval( _this.auto );
            _this.auto = setInterval( showAuto, 3000 );
        }

        let _visual;
        let _visualList;
        let _indicator;
        let _index = 0;
        let _banner;
        function create()
        {
            _visual = $( ".visual" );

            _visualList = _visual.find( ".visual_list" ).find( "li" );

            _indicator = _visual.find( ".indicator" ).children( "li" );
            _indicator.on( "click", indicatorClick );

            _banner = $( ".banner_list" ).children( "li" );
            _banner.on( "mouseenter", bannerOver );
            _banner.on( "mouseleave", bannerOut );
        }

        function bannerOver( $e )
        {
            var item = $( this ).find( ".motion" );
            TweenMax.to( item, 0.75, { scale:1.2, ease:Expo.easeOut });
        }

        function bannerOut( $e )
        {
            var item = $( this ).find( ".motion" );
            TweenMax.to( item, 0.75, { scale:1, ease:Expo.easeOut });
        }

        function showAuto()
        {
            _index++;
            if( _index > 1 ) _index = 0;

            show( _index );
        }

        function addEvent()
        {
            
        }

        function indicatorClick( $e )
        {
            if( $( this ).hasClass( "on" ) ) return;

            var index = $( this ).index();
            _index = index;

            show( _index );

            clearInterval( _this.auto );
            _this.auto = setInterval( showAuto, 3000 );
        }

        function show( $index )
        {
            showIndicator( $index );
            showVisual( $index );
        }

        function showIndicator( $index )
        {
            _indicator.removeClass( "on" );
            TweenMax.to( _indicator, 0.75, { width:12, backgroundColor : "#fff", ease:Expo.easeInOut });

            var item = $( _indicator[ $index ]);
            item.addClass( "on" );
            TweenMax.to( item, 0.75, { width:37, backgroundColor: "#ffcb0c", ease:Expo.easeInOut });
        }

        function showVisual( $index )
        {
            _visualList.removeClass( "on" );
            TweenMax.to( _visualList, 0.75, { opacity:0, ease:Expo.easeInOut });

            var item = $( _visualList[ $index ]);
            TweenMax.to( item, 0.75, { opacity:1, ease:Expo.easeInOut });
        }

        init();
    }

    componentWillUnmount()
    {
        clearInterval( this.auto );
    }

    render()
    {
        return(
            <div className="visual">
                <div className="visual_area">
                    <ul className="visual_list">
                        <li className="on"></li>
                        <li></li>
                    </ul>
                    <ul className="indicator">
                        <li className="on"><a href="javascript:;">1</a></li>
                        <li><a href="javascript:;">2</a></li>
                    </ul>
                    <div className="text_area">
                        <h2>
                            <span className="txt_motion1"><em>WE BAKE</em></span>
                            <span className="txt_motion2"><em>GOODNESS!</em></span>
                        </h2>
                        <h3>
                            <span className="txt_motion3"><em>제과제빵 전문기업 SHANY</em></span>
                            <span className="txt_motion4"><em>365일 언제나 신선하게!</em></span>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeVisual;