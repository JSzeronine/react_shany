
import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import TweenMax, { Expo } from "gsap";

class HomeList extends Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            data : this.props.data
        }
    }

    componentDidMount()
    {
        function init()
        {
            $( "li" ).on( "mouseenter", listOver ).on( "mouseleave", listOut );
        }

        function listOver( $e )
        {
            var item = $( this ).find( ".line" );
            var aTag = $( this ).children( "a" );
            TweenMax.to( item, 0.75, { width : aTag.width(), ease:Expo.easeOut });
        }

        function listOut( $e )
        {
            var item = $( this ).find( ".line" );
            TweenMax.to( item, 0.75, { width : 0, ease:Expo.easeOut });
        }

        init();
    }

    render()
    {
        return(
            <div className={ this.state.data.className }>
                <dl>
                    <dt>{ this.state.data.title }</dt>
                    <dd>{ this.state.data.sub }</dd>
                </dl>
                <div className="list_area">
                    <ul className="list">
                        {
                            this.state.data.list.map( function( $data, $index ){
                                return <li key={ $index }><Link to={ $data.link }>{ $data.txt }<span className="line"></span></Link></li>
                            })
                        }
                    </ul>
                    <Link to={ this.state.data.more_link } className="btn_link"></Link>
                </div>
            </div>
        )
    }
}

export default HomeList;