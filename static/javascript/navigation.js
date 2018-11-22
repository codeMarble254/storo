let loader_holder = document.getElementsByClassName("loader-holder")[0];
function hideLoader(){
    document.getElementById("loader").style.display = "none";
    loader_holder.style.display = "none";
}

let options = document.getElementById("options");
options.addEventListener("click", openOptions);
function openOptions(){
    let options_list = document.getElementById("options-list");
    if(options_list.style.display == "block"){
        options_list.style.display = "none";
        document.getElementsByClassName("fa-times")[0].className = "fas fa-th";
    }
    else{
    options_list.style.display = "block";
    document.getElementsByClassName("fa-th")[0].className = "fas fa-times";
    }
}

let comment_button = document.getElementById("comment-button");
comment_button.addEventListener("click", openCommentPad);
function openCommentPad(){
    document.getElementsByClassName("comments")[0].style.display = "block";
}