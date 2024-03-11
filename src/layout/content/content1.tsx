// import { useTranslation } from "react-i18next";

import p2 from "../../assets/p2.png";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.png";
import l4 from "../../assets/l4.png";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";
import r4 from "../../assets/r4.png";


function Content1(){

    return <div className='content_1'>
        <div className="title">
            <div className="lab1">{"关于MIYO"}</div>
            <div className="lab2">{"希望为每个人提供私密的，多样化的社交平台。"}</div>
        </div>
        <div className="con">
            <div className="l">
                <div className="item">
                    <img src={l1}></img>
                    <h1>{"发送消息"}</h1>
                    <span>{"发送文本、照片、视频或文件。录"}</span>
                    <span>{"制快速发送语音等消息"}</span>
                </div>
                <div className="item">
                    <img src={l2}></img>
                    <h1>{"进行语音通话"}</h1>
                    <span>{"快速拨打1V1语音通话"}</span>
                </div>
                <div className="item">
                    <img src={l3}></img>
                    <h1>{"群聊"}</h1>
                    <span>{"万人群聊，让圈子更加活跃"}</span>
                </div>
                <div className="item">
                    <img src={l4}></img>
                    <h1>{"频道"}</h1>
                    <span>{"与您有相同热情爱好的人，一起加"}</span>
                    <span>{"入公共团体"}</span>
                </div>
            </div>
            <div className="m">
                <img src={p2}></img>
            </div>
            <div className="r">
                <div className="item">
                    <img src={r1}></img>
                    <h1>{"贴纸"}</h1>
                    <span>{"使用海量的贴纸和GIF进行富有表"}</span>
                    <span>{"现力的交流，让聊天更轻松"}</span>
                </div>
                <div className="item">
                    <img src={r2}></img>
                    <h1>{"消息分组"}</h1>
                    <span>{"自定义消息分组，让重要的人与事"}</span>
                    <span>{"无任何遗漏"}</span>
                </div>
                <div className="item">
                    <img src={r3}></img>
                    <h1>{"清空消息"}</h1>
                    <span>{"一键清空所有消息，让界面更加清净"}</span>
                </div>
                <div className="item">
                    <img src={r4}></img>
                    <h1>{"阅后及焚"}</h1>
                    <span>{"为聊天消息设置阅后即焚，让敏感消息"}</span>
                    <span>{"息不出可循"}</span>
                </div>
            </div>
        </div>
    </div>
}

export default Content1