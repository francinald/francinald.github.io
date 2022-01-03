(()=>{
"use strict"
const gallery = document.getElementsByClassName("links")
// console.log(gallery)
gallery[0].addEventListener("click", social)
function social(e){

    const socialLinks = e.target.getAttribute("social")

    if(!socialLinks) return

    const facebookl = "https://www.facebook.com/Francinaldo11/"
    const instagraml = "https://www.instagram.com/francinaldo.gomes.56/"
    const twiterl = "https://twitter.com/FrancinaldoGo"

    const links = {
        facebook: ()=>{
            location.assign(facebookl)
        },
        instagram: ()=>{
            location.assign(instagraml)
        },
        twiter: ()=>{
            location.assign(twiterl)
        }
    }
    if(links[socialLinks]){
        links[socialLinks]()
    }
    console.log(e.target.getAttribute("social"))
}
})()