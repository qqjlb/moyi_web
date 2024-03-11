import { FC, useRef } from "react"



const showMenu = (list:{name:string,handle:(e:MouseEvent)=>void}[],ref:React.RefObject<HTMLElement>,backcall?:()=>void)=>{
    const div = document.createElement('div')
    div.setAttribute("class","menu_container")
    const box = document.createElement('div')
    box.setAttribute("class","menu_box")
    div.appendChild(box);
    list.forEach(item=>{
        const lab = document.createElement('div')
        lab.appendChild(document.createTextNode(item.name))
        lab.setAttribute("class","menu_item")
        lab.addEventListener("click",(e)=>{    
            item.handle(e);
            backcall&&backcall();
            div.remove();
        })
        box.appendChild(lab)
    })
    div.addEventListener("mouseleave",()=>{
        backcall&&backcall();
        div.remove();
    })
    var clientRect = ref.current?.getBoundingClientRect();
    const x=clientRect?.left||0;
    const y=clientRect?.top||0;
    const h=clientRect?.height||0;
    div.setAttribute("style","top:"+y+"px;left:"+x+"px;padding-top:"+h+"px;")
    document.body.appendChild(div)
}

type MyMenuType={
    children:React.ReactNode,
    list:{name:string,handle:(e:MouseEvent)=>void}[]
}

export const MyMenu:FC<MyMenuType> = ({children,list})=>{
    const divRef = useRef<HTMLDivElement>(null);
    let isshow=false

    const menuDiv = <div ref={divRef} onMouseEnter={()=>{
        if(isshow===false){
            isshow=true
            showMenu(list,divRef,()=>{isshow=false})
        }
    }}>{children}</div>
    return menuDiv
}


