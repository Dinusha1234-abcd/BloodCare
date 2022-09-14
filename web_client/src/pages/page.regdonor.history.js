import React, {useState, useCallback, useEffect} from "react";
import SlideMenuRegDonor from "../components/component.slidemenu.registerDonor";
import axios from "axios";
import '../assests/css/page.regdonor.history.css';
import bloodo from '../assests/images/bloodOp.png';
import unsuccessImage from '../assests//images/wrong.png';
import loadingImage from '../assests/images/loading.gif';

export default function RegDonorHistory() {
    const [slidemenu, setSlideMenu] = useState(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unsuccessMessage, setUnsuccessMessage] = useState("");
    const [unsuccess, setUnSuccess] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [success, setSuccess] = useState(false);

    const [firstRow, setFirstRow] = useState(0);
    const [lastRow, setLastRow] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const passData = (data) => {
        setSlideMenu(data);
    };
    useEffect((() => {getHistoryRecords()}), [])
    function getHistoryRecords() {
        axios.get(" http://localhost:8070/registerdonor/historyrecordsselect").then(
            (res) => {
                setData(res.data.records);
                if(data.length <11){
                    setLastRow(data.length);
                }else {
                    setLastRow(10);
                }
                console.log(lastRow);
                setLoading(!loading);
            }).catch((err) => {
                setLoading(!loading);
                setUnsuccessMessage("Network Connection Issue Pleace Try Again");
                setUnSuccess(true)
            })
    }
    function unsucessbutton() {
        window.location = "/history_records";
    }
    const list = [];
    if(searchData == ""){
        for (let i =firstRow; i<data.length; i++){
            list.push(
                <><tr>
                    <td>{data[0]['']}</td>
                </tr>
                </>)
        }
    }
    return (
        <div>
            <SlideMenuRegDonor headerName={"History Records"} />
            <div>
                <img id="bloodOpimg" src={bloodo} />
                <div>
                    <p id="total_donate">Total Donate 5/10</p>
                    <div id="full">
                        <div id="totalcount"></div>
                    </div>
                    
                </div>
                <div id="tableContainer">
                    <div id="history-records">
                        <input type="text" id='input-donate-date' placeholder=" &#xf002;" />
                        <br></br>
                        <table id="history-records-table">
                            <tr>
                                <th id="donate-date">Date</th>
                                <th>Donation Packet No</th>
                                <th>Location</th>
                            </tr>
                    
                            <tr>
                                <td>04-07-2022</td>
                                <td>D 000 8574 555</td>
                                <td>Panadura</td>
                            </tr>
                            <tr>
                                <td>18-05-2019</td>
                                <td>D 000 5675 273</td>
                                <td>Colombo</td>
                            </tr>
                            <tr>
                                <td>25-09-2017</td>
                                <td>D 00 98 2634 59</td>
                                <td>Rathmalana</td>
                            </tr>
                            <tr>
                                <td>30-11-2016</td>
                                <td>D 00 16 2054 17</td>
                                <td>Horana</td>
                            </tr>
                            <tr>
                                <td>07-09-2015</td>
                                <td>D 00 58 4057 83</td>
                                <td>Kalutara</td>
                            </tr>
                        </table>

                    </div>

                </div>
                <div id='d-history-records-table-pageButton'>
                    <a className='page-navigation'>{"<< "}  </a>
                    <a className='page-navigation'>{" Prev"}  </a>
                    <a className='page-navigation'>1</a>
                    <a className='page-navigation'>{"Next "}</a>
                    <a className='page-navigation'>{">>"}</a>
                </div>

            </div>
        </div>


    );

}