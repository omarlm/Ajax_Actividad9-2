$(document).ready(function () {

    $("#btnInsert").click(function () {
        var name = $("#fName").val();
        var age = $("#fAge").val();
        var gen = $("#selGender").val();
        var email = $("#fEmail").val();
        var loc = $("#fLocation").val();
        var tel = $("#fTelephone").val();

        var postData = {
            nombre: name,
            edad: age,
            genero: gen,
            email: email,
            localidad: loc,
            telefono: tel
        }

        $.ajax({
            type: 'POST',
            url: 'resources/pagina2.php',
            data: {
                param: JSON.stringify(postData)
            }
        })
    });

    $.ajax({
        type: 'POST',
        data: '',
        url: 'resources/pagina1.php',
        success: function (data) {
            var dataObj = JSON.parse(data);
            var dataHandler = $("#results");

            $.each(dataObj, function (key, val) {
                var newRow = $("<tr>");
                newRow.html("<td>" + val.id + "</td>" +
                    "<td>" + val.nombre + "</td>" +
                    "<td>" + val.edad + "</td>" +
                    "<td>" + val.genero + "</td>" +
                    "<td>" + val.email + "</td>" +
                    "<td>" + val.localidad + "</td>" +
                    "<td>" + val.telefono + "</td>");

                dataHandler.append(newRow);
            })
        },
        error: function () {
            alert("Error al cargar");
        }
    });

    $('select').material_select();
});

/*"fName=" + name +
            "selGender=" + age +
            "genero=" + gen +
            "fEmail=" + email +
            "fLocation=" + loc +
            "fTelephone=" + tel;

            */