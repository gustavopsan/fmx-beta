function charge () {
    $.get("https://api-fmx.herokuapp.com/check", function (data) {
        if (data.status === false) {
            //window.location.href = '../';
        } else if (data.status === true) {
            var username;
            $.get("https://api-fmx.herokuapp.com/getUser", function (data) {
                console.log(data);
            })
        }
    });
}

window.addEventListener('load', charge, false);