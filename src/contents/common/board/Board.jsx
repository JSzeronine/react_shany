
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Board extends Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            data : this.props.data
        }
    }

    render(){
        return(
            <div className="list">
                <table>
                    <colgroup>
                        <col width="160px" />
                        <col width="800px" />
                        <col width="80px" />
                        <col width="160px" />
                    </colgroup>
                    
                    <thead>
                        <tr className="title">
                            <th>번호</th>
                            <th>제목</th>
                            <th>첨부</th>
                            <th>등록일</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.data.map( ( item, index ) => {
                                return(
                                    <tr key={ index }>
                                        <td>{ item.no }</td>
                                        <td className="content"><Link to={ item.link }>{ item.title }</Link></td>
                                        <td><Link to={ item.file }><img src="./assets/image/common/icon_clip.png" alt="" /></Link></td>
                                        <td>{ item.date }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Board;