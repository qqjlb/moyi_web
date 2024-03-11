// import { useTranslation } from "react-i18next";

import p3 from "../../assets/p3.png";

function Content2(){

    return <div className='content_2'>
        <div className="con">
            <div className="left">
                <img src={p3}></img>
            </div>
            <div className="right">
                <div className="title">{"游戏娱乐"}</div>
                <span className="lab1">{"MIYO提供丰富的游戏资源，包含各类型小游戏及对战游戏，您可以邀请小伙伴们一起享受游戏娱乐的乐趣"}</span>
                <div className="btn">{"有关游戏娱乐更多信息"}</div>
            </div>
        </div>
    </div>
}

export default Content2