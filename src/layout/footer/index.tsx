import { useTranslation } from "react-i18next";

import pwin from "../../assets/win_ico.png"
import piphone from "../../assets/iphone_ico.png"
import pandroid from "../../assets/android_ico.png"


function Footer(){
    const {t} = useTranslation();

    return <footer>
        <div className="footer_content">
            <div className="box_1">
                <div className="miyo_ico">miyo</div>
                <div className="item">
                    <img className="ico" src={piphone}></img>
                    <a>IOS</a>
                </div>
                <div className="item">
                    <img className="ico" src={pandroid}></img>
                    <a>Android</a>                    
                </div>
                <div className="item">
                    <img className="ico" src={pwin}></img>
                    <a>WIN</a>                    
                </div>
                <div className="item">
                    <a>{t("apiFile")}</a>
                </div>
            </div>
            <div className="box_2">
                <div className="item">{t("aboutUs")}</div>
                <div className="item">{t("userAgreement")}</div>
                <div className="item">{t("privacy")}</div>
                <div className="item">{t("find")}</div>
                <div className="item">{t("technicalSupport")}</div>
            </div>
        </div>
    </footer>
}

export default Footer