let loader_holder = document.getElementsByClassName("loader-holder")[0];

function hideLoader() {
    document.getElementById("loader").style.display = "none";
    loader_holder.style.display = "none";
}

let options = document.getElementById("options");
if (options) {
    options.addEventListener("click", openOptions);
    function openOptions() {
        let options_list = document.getElementById("options-list");
        if (options_list.style.display == "block") {
            options_list.style.display = "none";
            document.getElementsByClassName("fa-times")[0].className = "fas fa-th";
        }
        else {
            options_list.style.display = "block";
            document.getElementsByClassName("fa-th")[0].className = "fas fa-times";
        }
    }
}

let comment_button = document.getElementById("comment-button");
if (comment_button) {
    comment_button.addEventListener("click", openCommentPad);
    function openCommentPad() {
        document.getElementsByClassName("comments")[0].style.display = "block";
    }
}

let signup_content = ` 
<div class="signup-content">
<span class="close">&times;</span>
<form class="form-group">
    <h1>Welcome</h1>
    <p>Sign up to access your personalized homepage\</p>
    <input class="form-control" type="text" placeholder="Username" />
    <input class="form-control" type="email" placeholder="Email" />
    <input class="form-control" type="password" placeholder="Password" />
    <input class="form-control" type="password" placeholder="Retype Password" />
    <button type="submit" class="btn btn-danger btn-sm">SignUp with Google +&nbsp;&nbsp;<i class="fab fa-google"></i></button>
    <button type="submit" class="btn btn-primary btn-sm">SignUp with Facebook&nbsp;&nbsp;<i class="fab fa-facebook"></i></button>
    <button type="submit" class="btn btn-info btn-sm">SignUp with Twitter&nbsp;&nbsp;<i class="fab fa-twitter"></i></button><br>
    <p class="licence">To make Storo, we log user data and share it with service providers.
        Click "Sign in" above to accept Storo’s <a href="#">Terms of Service</a> & <a href="#">Privacy
            Policy.</a></p>
    <button type="submit" class="btn btn-primary">Sign Up<i class="fa fa-profile"></i></button>
    
</form>
</div>
 `
let signup_modal = document.getElementById("signup-modal");
if (signup_modal) {
    signup_modal.innerHTML = signup_content;
    let signup_trigger = document.getElementsByClassName("signup-trigger")[0];
    signup_trigger.addEventListener("click", openSigupModal);
    function openSigupModal() {
        signup_modal.style.display = "block";
    }
    let close = document.getElementsByClassName("close")[0];
    close.addEventListener("click", closeSignUp);
    function closeSignUp(){
        signup_modal.style.display = "none";
    }
}

let login_content = ` 
<div class="login-content">
<span class="close-login">&times;</span>
<form class="form-group">
    <h1>Welcome</h1><hr>
    <p>Sign in to access your personalized homepage,
        follow authors and topics you love,
        and like stories that matter to you.</p>
    <input class="form-control" type="text" placeholder="Username/Email" />
    <input class="form-control" type="password" placeholder="Password" />
    <button type="submit" class="btn btn-danger btn-sm">SignIn with Google +&nbsp;&nbsp;<i class="fab fa-google"></i></button>
    <button type="submit" class="btn btn-primary btn-sm">SignIn with Facebook&nbsp;&nbsp;<i class="fab fa-facebook"></i></button>
    <button type="submit" class="btn btn-info btn-sm">SignIn with Twitter&nbsp;&nbsp;<i class="fab fa-twitter"></i></button><br>
    <button type="submit" class="btn btn-primary"><a href="add-post.html">Login</a></button>
</form>
</div>
 `
let login_modal = document.getElementById("login-modal");
if (login_modal) {
    login_modal.innerHTML = login_content;
    let login_trigger = document.getElementsByClassName("login-trigger")[0];
    login_trigger.addEventListener("click", openLoginModal);
    function openLoginModal() {
        login_modal.style.display = "block";
    }
    let close_login = document.getElementsByClassName("close-login")[0];
    close_login.addEventListener("click", closelogin);
    function closelogin(){
        login_modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == login_modal || event.target == signup_modal) {
        login_modal.style.display = "none";
        signup_modal.style.display = "none";
    }
}
