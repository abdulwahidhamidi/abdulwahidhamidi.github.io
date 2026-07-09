console.log("Portfolio Loaded");
function openCertificate(image){

document.getElementById("certificateModal").style.display="flex";

document.getElementById("certificateImage").src=image;

}

function closeCertificate(){

document.getElementById("certificateModal").style.display="none";

}

window.onclick=function(e){

const modal=document.getElementById("certificateModal");

if(e.target===modal){

closeCertificate();

}

}
