let loader_holder = document.getElementsByClassName("loader-holder")[0];
function hideLoader(){
    document.getElementById("loader").style.display = "none";
    loader_holder.style.display = "none";
}

let options = document.getElementById("options");
options.addEventListener("click", openOptions);
function openOptions(){
    let options_list = document.getElementById("options-list");
    options_list.style.display = "block";
}