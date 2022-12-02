const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ref = urlParams.get('ref')


let h=document.querySelectorAll(".cast-box")
let h4=document.querySelector(".cast-movie")
let h2=document.querySelector(".head-movie")
let h3=document.querySelector(".movietext")
let hx=document.querySelector("#myvideo")
let hy=document.querySelector(".play-img")
let hz=document.querySelector(".header2")


async function homepage() {
  let request = new Request("Json Files/BuyingPane.json");
  let response = await fetch(request);
  let json_obj = await response.json();

  load(json_obj);
}


function load(a) {
    let title=document.createElement('h3')
    title.innerHTML=a['Movie'][ref]['title']
    h2.append(title)
    let para=document.createElement('p')
    para.innerHTML=a['Movie'][ref]['desc']
    h3.append(para)    
    let title2=document.createElement('h3')
    title2.innerHTML=a['Movie'][ref]['title2']
    h4.append(title2)  
    hx.src=a['Movie'][ref]['videos']
    hy.src=a['Movie'][ref]['backimg']
    let head1= document.createElement('h2')
    head1.innerHTML=a['Movie'][ref]['header']
    hz.append(head1)
  

    for(i=0;i<6;i++){
        let img=document.createElement("img")
        let castname=document.createElement("p")
        img.src=a['Movie'][ref]['castimages'][i]
        castname.innerHTML=a['Movie'][ref]['castname'][i]
        h[i].appendChild(img)
        h[i].appendChild(castname)

    }
}
 
homepage();



