const img_src = document.getElementById("my-img");
let imgArray = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg", "pic5.jpeg", "pic6.jpeg", "pic7.jpeg", "pic8.jpeg"];
function imgClicked() {
    let i = Math.floor(Math.random() * 8);
    img_src.src = imgArray[i];
}

//project count
let project = document.getElementsByClassName("project-name");
project_count = project.length;

let project_span = document.getElementById("project-count");
project_span.innerHTML = "Project count: " + project_count

//theme toggle
let link = document.getElementById("css-link");

function blueTheme() {
    link.href = "style.css";
}
function coffeeTheme() {
    link.href = "coffee.css";

}
function yellowTheme() {
    link.href = "yellow.css";

}