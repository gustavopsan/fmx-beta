function charge () {
    $.get("https://api-fmx.herokuapp.com/check", function (data) {
        if (data.status === false) {
            window.location.href = '../';
        } else if (data.status === true) {
            $.get("https://api-fmx.herokuapp.com/getUser", function (data) {
                $('#user').val(data.username);
            })
        }
    });
}

window.addEventListener('load', charge, false);