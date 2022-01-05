(()=>{
"use strict"
const gallery = document.getElementsByClassName("links")
const outros = document.getElementsByClassName("outros")[0]
const btnsSite = setInterval(()=>{
    outros.style.display = "block"
    clearInterval(btnsSite)
},10000)

document.getElementsByClassName("btn-close")[0].addEventListener("click", e=>{
    const close = outros.style.display = "none"
})

outros.addEventListener("click", e=>{
    const sites = e.target.getAttribute("social")
    if(!sites) return
    const formulaNegocioOn = "https://go.hotmart.com/B55078080V?ap=032e"
    const manutecaoCel = "https://go.hotmart.com/E50364308F"
    const desenvolvimentoWeb = "https://go.hotmart.com/K61657233T"
    const sitesIndex = {
        fomulaNegocioOnline: ()=>{
            window.open(formulaNegocioOn)
        },
        manutencao: ()=>{
            window.open(manutecaoCel)
        },
        desenvolvimento: ()=>{
            window.open(desenvolvimentoWeb)
        }
    }

    if(sitesIndex[sites]) sitesIndex[sites]()
})

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
}
})()