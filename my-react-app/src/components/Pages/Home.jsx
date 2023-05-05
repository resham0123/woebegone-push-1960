import React from 'react'


  const image1={
  src:"http://www.newtontutorials.co.in/img/slide%20show/1/original_image/slide-27_1679742427.JPG"
  }
 const image2= {
 src:"http://www.newtontutorials.co.in/img/slide%20show/1/original_image/slide-25_1679741528.jpg"
  }
const image3=  {
    src:"http://www.newtontutorials.co.in/img/slide%20show/1/original_image/slide-22_1579436758.jpg"
  }


export default function Home() {
function first(){
  return <img src="http://www.newtontutorials.co.in/img/slide%20show/1/original_image/slide-27_1679742427.JPG"/>
}
function second(){
  return <img src="http://www.newtontutorials.co.in/img/slide%20show/1/original_image/slide-25_1679741528.jpg"/>
}
function third(){
  return <img src="http://www.newtontutorials.co.in/img/slide%20show/1/original_image/slide-22_1579436758.jpg"/>
}
  setInterval(() =>{
      
  },1000);
//   function first(){
//     document.querySelector(".slide>img").src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_FMCG-PL_TastiesOrigins_460px-250123.jpg"
//  }
//  function second(){
//     document.querySelector(".slide>img").src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg"
//  }
//  function third(){
//     document.querySelector(".slide>img").src="	https://www.bigbasket.com/media/uploads/banner_images/hp_m_FMCG-PL_iDFreshoStore_460px-250123.jpg"
//  }
//  setInterval(first,2000);
//  setInterval(second,4000);
//  setInterval(third,6000);
  return (
    <>
   setInterval(first,2000);
 setInterval(second,4000);
 setInterval(third,6000);
    </>
  )
}
