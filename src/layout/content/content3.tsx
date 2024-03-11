// import { useTranslation } from "react-i18next";

import p4 from "../../assets/p4.png";

function Content3(){

    return <div className='content_3'>
        <div className="con">
            <div className="left">
                <div className="title">{"MIYO钱包"}</div>
                <span className="lab1">{"MIYO钱包是一个简单、方便、安全的支付系统。享受无需钱包即可自由付款的乐趣。"}</span>
                <div className="btn">{"有关MIYO钱包更多信息"}</div>
            </div>
            <div className="right">
                <img src={p4}></img>
            </div>

        </div>
    </div>
}

export default Content3