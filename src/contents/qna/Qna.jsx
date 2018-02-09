

import React, { Component } from "react";
import { Link } from "react-router-dom";

import AnimatedWrapper from "./../AnimateWrapper";

class QnaComponent extends Component
{
    render(){
        return(
            <div id="qna">
                <div className="top">
                    <dl>
                        <dt>묻고 답하기</dt>
                        <dd>따뜻한 마음으로 정성껏 답변 드리겠습니다</dd>
                    </dl>
                </div>

                <div className="qna st">

                    <div className="input_info">
                        *표시는 필수 입력 항목입니다
                    </div>

                    <div className="tb">
                        <table className="input_table">
                            <colgroup>
                                <col width="160px" />
                                <col width="1040px" />
                            </colgroup>

                            <tbody>
                                <tr>
                                    <th>문의유형 *</th>
                                    <td>
                                        <select name="" id="">
                                            <option value="직접입력">직접입력</option>
                                            <option value="직접입력">직접입력</option>
                                            <option value="직접입력">직접입력</option>
                                            <option value="직접입력">직접입력</option>
                                            <option value="직접입력">직접입력</option>
                                            <option value="직접입력">직접입력</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <th>성명 *</th>
                                    <td><input type="text" placeholder="이름입력" /></td>
                                </tr>
                                <tr className="email_box">
                                    <th>이메일 *</th>
                                    <td>
                                        <input type="text" placeholder="메일주소" />
                                        <span>@</span>
                                        <select name="" id="">
                                            <option value="">직접입력</option>
                                            <option value="">naver.com</option>
                                            <option value="">naver.com</option>
                                            <option value="">naver.com</option>
                                            <option value="">naver.com</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>
                                        <input type="text" placeholder="010-0000-0000" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>제목 *</th>
                                    <td><input type="text" placeholder="분기보고서(일반법인)" /></td>
                                </tr>
                                <tr className="file_box">
                                    <th>첨부</th>
                                    <td>
                                        <input type="text" placeholder="샤니 문의 자료.jpg" disabled />
                                        <Link to="/Qna">찾아보기</Link>
                                        <span>jpg, png, doc, hwp(3M 이하)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>내용 *</th>
                                    <td>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="info_table">
                            <colgroup>
                                <col width="160px;" />
                                <col width="1040px;" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>
                                        개인정보<br />
                                        취급방침
                                    </th>
                                    <td>
                                        <dl>
                                            <dt>개인정보의 수집, 이용목적</dt>
                                            <dd>- 이메일 문의 답변 서비스의 이행</dd>

                                            <dt>수집하는 개인정보의 항목</dt>
                                            <dd>- 이름, 전화번호, 이메일</dd>

                                            <dt>개인정보의 보유 및 이용기간</dt>
                                            <dd className="last">
                                                수집된 개인정보는 수집 목적이 종료되거나 보유기간 3년이 경과되면 파기합니다.<br />
                                                단, 관련 법령의 규정에 의하여 필요한 경우 그 기간 동안 개인정보를 보관합니다.
                                            </dd>
                                        </dl>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="check_box">
                            <input type="checkbox" id="check0" />
                            <label htmlFor="check0">
                                <div className="check_box_img">
                                    <img className="on" src="/Content/Front/Images/qna/check_box_on.jpg" alt="" />
                                    <img className="off" src="/Content/Front/Images/qna/check_box_bg.jpg" alt="" />
                                </div>
                                <span>개인정보 수집 및 이용안내에 동의합니다.</span>
                            </label>

                            <p>
                                <Link to="/Qna">
                                    문의하기
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Qna = AnimatedWrapper( QnaComponent );
export default Qna;