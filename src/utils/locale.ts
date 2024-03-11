
let currentLanguage = localStorage.getItem("language")??"zh-cn"

export const getCurrentLanguage = ()=>{
    return currentLanguage
}


