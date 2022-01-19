$(document).ready(function(){   
    $('#formValidation2').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            PhoneNumber:{
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 11
            },
            address:{
                required: true,
                maxlength: 30
            },
            addAddress:{
                maxlength: 30
            },

            city:{
                required: true,
                maxlength: 25
            },
            zip:{
                required: true
            },
            country:{
                required: true
            },
            DeliveryAddress:{
                required: true,
                maxlength: 30
            },
            DeliveryAddAddress:{
                maxlength: 30
            },
            DeliveryCity:{
                required: true,
                maxlength: 25
            },
            DeliveryZip:{
                required: true,
                maxlength: 15
            },
            DeliveryCountry:{
                required: true
            },
            answer:{
                required: true,
                minlength: 5,
                maxlength: 22
            },
        },
        messages:{
            email:{
                required:'This field is required.',
                email:'Please enter a valid email address.'
            },
            PhoneNumber:{
                required:'This field is required.',
                minlength:'Please enter at least 5 characters.',      
                maxlength:'Please enter no more than 11 characters.'
            },
            address:{
                required:'This field is required.',
                maxlength:'Please enter no more than 30 characters.'
            },
            addAddress:{
                maxlength:'Please enter no more than 30 characters.'
            },
            city:{
                required:'This field is required.',
                maxlength:'Please enter no more than 25 characters.'
            },
            zip:{
                required:'This field is required.',
                maxlength:'Please enter no more than 15 characters.'
            },
            country:{
                required:'This field is required.'
            },
            DeliveryAddress:{
                required:'This field is required.',
                maxlength:'The delivery address 1 may not be greater than 30 characters.'
            },
            DeliveryAddAddress:{
                maxlength:'The delivery address 2 may not be greater than 30 characters.'
            },
            DeliveryCity:{
                required:'This field is required.',
                maxlength:'The delivery city may not be greater than 25 characters.'
            },
            DeliveryZip:{
                required:'This field is required.',
                maxlength:'The delivery zip code may not be greater than 15 characters.'
            },
            DeliveryCountry:{
                required:'This field is required.'
            },
            answer:{
                required:'This field is required.',
                minlength:'Please enter at least 5 characters.',      
                maxlength:'Please enter no more than 22 characters.'
            },
        },
    })

    $('#continue_2').click(function() {
        if ($('#formValidation2').valid()){
            //Go from page 2 to page 3
            document.getElementById('section_3').classList.remove("d-none");
            document.getElementById('section_2').classList.add("d-none");
            document.getElementById('nabar3').classList.remove("d-none");
            document.getElementById('nabar2').classList.add("d-none");        

        }
    });
});


