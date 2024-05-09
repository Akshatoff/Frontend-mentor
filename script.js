const features = document.getElementById("features");
const company = document.getElementById("company")
const featuresdropdown = document.getElementById("featuredrop")
const companydrop = document.getElementById("companydrop")
const hamburger = document.getElementById("ham");

hamburger.addEventListener("click", () => {
    
})
featureposition  = features.getBoundingClientRect();
companyposition = company.getBoundingClientRect();
featurepositiontop = featureposition.y - 20;
featurepositionleft = featureposition.x - 50;
companypositiontop = companyposition.y - 20;
companypositionleft = companyposition.x - 50;
featuresdropdown.style.top = featurepositiontop + "px";
featuresdropdown.style.left = featurepositionleft + "px";
companydrop.style.left = companypositionleft + "px";
companydrop.style.top = companypositiontop + "px";

featuresdropdown.style.display = "none";
companydrop.style.display = "none";

features.addEventListener("mouseover", () => {
    featuresdropdown.style.display = "flex";
})
features.addEventListener("mouseleave", () => {
    featuresdropdown.style.display = "none";
})
company.addEventListener("mouseover", () => {
    companydrop.style.display = "flex";

})
company.addEventListener("mouseleave", () => {
    companydrop.style.display = "none";
})