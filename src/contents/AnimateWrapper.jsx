

import React, { Component } from "react";
import * as Animated from "animated/lib/targets/react-dom";
import TweenMax, { Cubic } from "gsap";

const AnimatedWrapper = WrappedComponent => class AnimatedWrapper extends Component{

    constructor( props )
    {
        super( props );
        this.state = {
            animate : new Animated.Value( 0 ),
            mTime : 0.4

        }
    }

    componentWillAppear( cb )
    {
        var item = this.item.refs.node;
        var mTime = this.state.mTime;
        TweenMax.set( item, { y:100, opacity:0 });

        TweenMax.to( item, mTime, { y:0, opacity:1, ease:Cubic.easeOut });

        // Animated.spring( this.state.animate, { toValue: 1 }).start();

        cb();
    }

    componentWillEnter( cb )
    {
        var item = this.item.refs.node;
        var mTime = this.state.mTime;
        TweenMax.set( item, { y:100, opacity:0 });

        var sT = { vY : document.documentElement.scrollTop };

        setTimeout( function(){
            TweenMax.to( sT, mTime, { vY : 0, ease:Cubic.easeOut, onUpdate:function(){ /* window.scrollTo( 0, sT.vY ); */ }});

            window.scrollTo( 0, 0 );
            TweenMax.to( item, mTime, { y:0, opacity:1, ease:Cubic.easeOut, onComplete:function(){
                
            }});
    
            cb();
        }, mTime * 1000 );

        // setTimeout(() => Animated.spring( this.state.animate, { toValue: 1 }).start(), 250 );
        // setTimeout(() => this.item.refs.node.style.position = "relative", 250 );
        // cb();
    }

    componentWillLeave( cb )
    {
        var item = this.item.refs.node;
        item.style.position = "absolute";
        item.style.width = "100%";
        item.style.top = "0px";

        var mTime = this.state.mTime;

        TweenMax.set( item, { y:0, opacity:1 });
        TweenMax.to( item, mTime, { y:-100, opacity:0, ease:Cubic.easeIn, onComplete:function(){
            cb();
        }});

        // this.item.refs.node.style.position = "absolute";
        // this.item.refs.node.style.width = "100%";
        // Animated.spring( this.state.animate, { toValue: 0 }).start();
        // setTimeout(() => cb(), 250 );
    }

    render(){
        const style = {
            // opacity: Animated.template`${this.state.animate}`,
            // transform: Animated.template`translate3d(0,${this.state.animate.interpolate({inputRange: [0, 1],outputRange: ["100px", "0px"]})},0)`
        };

        return(
            <Animated.div ref={( item ) => { this.item = item; }} style={ style } className="animated-page-wrapper">
                <WrappedComponent { ...this.props } />
            </Animated.div>
        )
    }
}

export default AnimatedWrapper;