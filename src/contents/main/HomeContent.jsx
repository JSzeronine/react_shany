
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TweenMax, { Expo } from "gsap";
import HomeList from "./HomeList";
import request from "superagent";

class HomeContent extends Component
{
    constructor()
    {
        super();

        this.state = {
            index : 0,
            prev : 0,
            innerData : null,
            disclosureData : null,
            noticeData : null
        }
    }

    componentWillMount()
    {
        request.get( "./assets/data/main.json" )
                .accept( "application/json" )
                .end(( err, res ) => {
                    this.loadComplete( err, res );
                });
    }

    loadComplete( $err, $res )
    {
        if( $err ){
            alert( $err );
            return;
        }

        let data = $res.body.result;

        this.setState({
            innerData : data.innerData,
            disclosureData : data.disclosureData,
            noticeData : data.noticeData
        });
    }

    onClickNext()
    {
        var cIndex = this.state.index;
        this.setState({ prev : cIndex });
        cIndex++;
        if( cIndex > 2 ) cIndex = 0;

        this.setState({ index : cIndex });
    }

    onPrevClick()
    {
        var cIndex = this.state.index;
        this.setState({ prev : cIndex });
        cIndex--;
        if( cIndex < 0 ) cIndex = 2;

        this.setState({ index : cIndex });
    }

    componentDidUpdate()
    {
        var index = this.state.index;

        var list = document.getElementsByClassName( "data_list" )[ 0 ];
        TweenMax.to( list, 0.5, { left: ( 400 * index ) * ( -1 ), ease:Expo.easeOut });
    }

    componentDidMount()
    {
        
    }

    mOver( $e )
    {
        var item = $e.currentTarget;
        var elImg = item.getElementsByClassName( "motion" )[ 0 ];

        TweenMax.to( elImg, 0.75, { scale:1.2, ease:Expo.easeOut });
    }

    mOut( $e )
    {
        var item = $e.currentTarget;
        var elImg = item.getElementsByClassName( "motion" )[ 0 ];

        TweenMax.to( elImg, 0.75, { scale:1, ease:Expo.easeOut });
    }

    render()
    {
        if( this.state.innerData == null ){
             return <div>데이터 불러오는중.</div>
        }

        return(
            <div id="content">
                <div className="section1">
                    <div className="inner">
                        <div className="data_slide">
                            <div className="data_area">
                                <ul className="data_list">
                                {
                                    this.state.innerData.map( function( $item, $index ){
                                        return <li key={ $index }><Link to={ $item.link }>{ $item.value }</Link></li>
                                    })
                                }
                                </ul>
                            </div>
                            <ul className="btn_list">
                                <li><button className="btn_prv" onClick={ $e => this.onPrevClick() }>이전버튼</button></li>
                                <li><button className="btn_next" onClick={ $e => this.onClickNext() }>다음버튼</button></li>
                            </ul>
                        </div>
                        
                        <div className="banner_area">
                            <ul className="banner_list">
                                <li onMouseEnter={ $e => this.mOver( $e ) } onMouseLeave={ $e => this.mOut( $e )}>
                                    <Link to="/notice">
                                        <div className="text_box">
                                            <span className="txt">SHANY INTRODUCTION</span>
                                            <p>제과제빵업계의 선두</p>
                                            <img src="./assets/image/main/shany_logo.png" alt="SHANY we bake goodness!" />
                                        </div>
                                        <img src="./assets/image/main/banner01.jpg" alt="SHANY INTRODUCTION" className="motion" />
                                        <span className="dimd"></span>
                                    </Link>
                                </li>
                                <li onMouseEnter={ $e => this.mOver( $e ) } onMouseLeave={ $e => this.mOut( $e )}>
                                    <div className="qna_box">
                                        <div className="img_box">
                                            <img src="./assets/image/main/qna_img.jpg" alt="화이팅 이미지" className="motion" />
                                        </div>
                                        <div className="txt_box">
                                            <Link to="/qna">
                                                <p>
                                                    <strong>Q<span>&amp;</span>A</strong>
                                                    따뜻한 마음으로 정성껏 답변 드리겠습니다.
                                                    <span className="arrow"></span>                                                
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div></div>
                                </li>
                            </ul>
                        </div>

                        <div className="information_area">
                            <ul>
                                <li><HomeList data={ this.state.disclosureData } /></li>
                                <li><HomeList data={ this.state.noticeData } /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="inner">
                        <h2>RECRUIT</h2>
                        <p>SHANY 채용소식입니다.</p>
                        <span className="text">즐거운 열정과 긍정의 마인드로 SHANY와 함게 성장하실<br />당신을 기다립니다.</span>
                        <Link to="/Home" className="btn_more"><span>자세히 보기</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContent;