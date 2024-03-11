import { FC, useState } from "react"
import { WMaxWidth } from "../App"
import { MyMenu } from "../component/MyMenu"
import { useTranslation } from "react-i18next"
import { getCurrentLanguage } from "../utils/locale"

type NavProps = {
    istop:boolean,
    width:number,
}


const NavBar: FC<NavProps> = ({istop,width})=>{
    const {t,i18n} = useTranslation();
    const [language,setLanguage]=useState(getCurrentLanguage())
    const languageswitch = ()=>{
        let l = "zh-cn";
        if(language==="zh-cn"){
            l="en";
        }
        i18n.changeLanguage(l);
        setLanguage(l);
        localStorage.setItem("language",l);
    }
    
    const languageMenuList = [
        {name:language==="zh-cn"?"English":"中文",handle:()=>{languageswitch()}},
    ]
  
    const downMenuList = [
        {name:"PC",handle:()=>{}},
        {name:"IOS",handle:()=>{}},
        {name:"Android",handle:()=>{}},
    ]

    return <div className={istop?"navbar navbar_top":"navbar navbar_no"} style={{width:width<WMaxWidth?width+"px":""}}>
        <div className="left">
            <div className="miyo_ico">
                <div className="ico"></div>
                <div className="name">MIYO</div>
            </div>
        </div>

        <MyMenu list={downMenuList}>
            <div className="nav_item w1">{t("download")}</div>
        </MyMenu>
        <div className="nav_item w2">{t("solution")}</div>
        <div className="nav_item w2">{t("document")}</div>

        <div className="nav_item right">
            <MyMenu list={languageMenuList}>
                <div className="swt">{language==="zh-cn"?"中文":"English"}</div>
            </MyMenu>
            
            <div className="btn">{t("log")}</div>
        </div>

    </div>
}

export default NavBar