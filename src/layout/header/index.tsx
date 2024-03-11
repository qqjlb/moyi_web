import { FC } from "react"
import { WMinWidth } from "../../App"

import p1 from "../../assets/p1.png"
import pdown from "../../assets/down_ico.png"
import pwin from "../../assets/win_ico.png"
import piphone from "../../assets/iphone_ico.png"
import pandroid from "../../assets/android_ico.png"


export type HeaderPros = {
    width:number
}


const Header:FC<HeaderPros> = ({width})=>{
    let height = width/2

    
    return <header style={{width:width>WMinWidth?"100vw":""}}>

        <div className="header_content" style={{width:width+"px",height:height+"px"}}>
            <div className="left">
                <span className="lab1">
                    随时随地免费、安全的拨打语音及及时发送消息
                </span>
                <br/>
                <div className="lab2">
                    所有消息都将进行端到端加密，任何人或组织都无法监控你，你可以在APP上放心的和你的好友消遣娱乐，谈天说地。
                </div>
                <div className="lab3">
                    <img  src={pdown}></img>
                    <a>{"下载"}</a>
                </div>
                <div className="down_list">
                    <div>
                        <img src={pandroid}></img>
                        <a>{"Android"}</a>
                    </div>
                    <div>
                        <img src={piphone}></img>
                        <a>{"IOS"}</a>
                    </div>
                    <div>
                        <img src={pwin}></img>
                        <a>{"Win"}</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={p1}></img>
            </div>
        </div>
    </header>
}

export default Header