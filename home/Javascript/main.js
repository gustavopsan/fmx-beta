function charge () {
    $.get("https://api-fmx.herokuapp.com/check", function (data) {
        if (data.status === false) {
            //window.location.href = '../';
            alert(data.status);
        } else if (data.status === true) {
            alert(data.status);
            $.get("https://api-fmx.herokuapp.com/getUser", function (data) {
                $('#user').val(data.username);
            })
        }
    });
}

window.addEventListener('load', charge, false);