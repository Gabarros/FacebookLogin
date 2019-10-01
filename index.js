window.fbAsyncInit = function () {
    FB.init({
        appId: '{471234830400175}',
        cookie: true,
        xfbml: true,
        version: '{v4.0}'
    });

    FB.Event.subscribe('auth.login', function(response) {
        loadData(response);
      });

   

    FB.AppEvents.logPageView();
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);

        if (response.status === "connected") {
            console.log("Conectado");
            FB.api('/me', function (response) {
                console.log(JSON.stringify(response));
            });
            loadData(response);
            // loadHomePage();
        } else {
            console.log("Não conectado");

        }

    });

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function login() {
    console.log("Logado");

}

function loadData(response) {
    let name = response.name;
    let email = response.email;

    console.log(response)
    sendData(name, email);

}

function sendData(name, email) {
    let usuario = {
        "name": name,
        "email": email
    };

    let json = JSON.stringify(usuario);
    let url = "";



}

function loadHomePage() {
    let newPage = "";
    window.location.replace(newPage);
}


function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

