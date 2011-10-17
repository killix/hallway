userEmail = "";
userName = "";
var clicked = false;

function setUserGlobals(data) {
    userEmail = data.email;
    userName = data.name;
    $(".userEmail").text(userEmail);
    $(".user-name").text(userName);

    var E = $("#customLogout");
    E.show();
    var width = $("#menuExpander .userEmail").width() + $("#menuExpander .expander").width() + 10;
    $("#menuExpander").width(width);
    E.width(width);
    E.position({left:$("#header").width() - width - 20, top:0});
    $("#userMenu").width(width);
}

function closeUserMenu() {
    $('#userMenu').hide();
    $('#customLogout').removeClass('userMenu');
    $('#customLogout').removeClass('userMenuActive');
}

function checkClick() {
    if (document.activeElement && document.activeElement === document.getElementById('appFrame')) {
        closeUserMenu();
    } else {
        window.setTimeout(checkClick, 200);
    }
}

function openUserMenu() {
    $('#userMenu').show();
    $('#customLogout').addClass('userMenu');
    $('#customLogout').addClass('userMenuActive');
    checkClick();
}

$(document).ready(function() {
    $("#customLogout").hover(function() {
        $("#customLogout").toggleClass("userMenuHover");
    });

    $("#customLogout").click(function() {
        if ($('customLogout').hasClass('userMenuActive')) {
            closeUserMenu();
        } else {
            openUserMenu();
        }
        return false;
    });

    $('.header').click(function() {
        closeUserMenu();
    });
});
