$("#formValidate").validate({
    rules: {
        fName: {
            required: true
        },
        fAge: {
            required: true,
            digits: true,
            range: [1, 100]

        },
        fEmail: {
            required: true,
            email: true
        },
        fLocation: {
            required: true,
            minlength: 10
        },
        fTelephone: {
            required: true,
            digits: true,
            minlength: 9
        },
        selGender: {
            required: true
        }
    },
    messages: {
        fName: {
            required: "Enter a username."
        },
        fAge: {
            range: "U r not Gandalf."
        }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});