const buyersGroupUrl = "";
const facebookUrl = "";
const toast = document.getElementById("toast");

function notify(message){
  toast.textContent=message; toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>toast.classList.remove("show"),2500);
}

document.getElementById("saveContact").addEventListener("click",(e)=>{
  e.preventDefault();
  const vcard=[
    "BEGIN:VCARD","VERSION:3.0","FN:SMG SILKS","ORG:SMG SILKS",
    "TEL;TYPE=CELL,VOICE:+917418989145",
    "ADR;TYPE=WORK:;;#6A, Vilakkadi Kovil Street;Kancheepuram;;Tamil Nadu;India",
    "NOTE:Where Tradition Meets Elegance","END:VCARD"
  ].join("\r\n");
  const blob=new Blob([vcard],{type:"text/vcard;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url;a.download="SMG-SILKS.vcf";document.body.appendChild(a);a.click();a.remove();
  URL.revokeObjectURL(url);
  notify("SMG SILKS contact card ready to save.");
});

document.getElementById("websiteLink").href=window.location.href;

function optional(id,url,message){
 const el=document.getElementById(id);
 if(!url) el.addEventListener("click",e=>{e.preventDefault();notify(message)});
 else {el.href=url;el.target="_blank";el.rel="noopener";el.classList.remove("pending")}
}
optional("buyersLink",buyersGroupUrl,"The Buyers Group link will be added here.");
optional("facebookLink",facebookUrl,"The Facebook page link will be added here.");
document.getElementById("year").textContent=new Date().getFullYear();
