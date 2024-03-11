
import NavBar from './layout/NavBar'
import Footer from './layout/footer'
import { useEffect, useState } from 'react'
import Header from './layout/header'
import Content1 from './layout/content/content1'
import Content2 from './layout/content/content2'
import Content3 from './layout/content/content3'


export const WMinWidth = 1200
export const WMaxWidth = 1600



function App() {

  const [navIsTop,setNavIsTop]=useState<boolean>(true)
  const [winWidth,setWinWidth]=useState(document.body.clientWidth)
  const [windowScale,setWindowScale]=useState(1)

  useEffect(()=>{
    // const html = document.querySelector("html")

    document.body.addEventListener("scroll",scrollHandle)

    console.log(windowScale);
    window.onresize = ()=>{
      let width = document.body.clientWidth
      if(width<WMinWidth){
        setWindowScale(width/WMinWidth);
        width=WMinWidth;
        let s = "transform:scale("+document.body.clientWidth/WMinWidth+")"
        document.querySelector("html")?.setAttribute("style",s)
      }else{
        setWindowScale(1);
        let s = "transform:scale(1)"
        document.querySelector("html")?.setAttribute("style",s)
      }
          
      if(width>WMaxWidth)
        width=WMaxWidth;
      setWinWidth(width)
    }
  },[])

  function scrollHandle(e:any){
    console.log(e.target.scrollTop);
    if(e.target.scrollTop===0){
      setNavIsTop(true)
    }else{
      setNavIsTop(false)
    }
  }

  
  return (
    <div className='main'>
      <NavBar istop={navIsTop} width={winWidth}/>

      <Header width={winWidth}/>
          
      <Content1/>

      <Content2/>

      <Content3/>

      <Footer/> 

    </div>
  )
}

export default App
