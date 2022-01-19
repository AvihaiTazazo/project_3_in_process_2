// Document is ready
$(document).ready(function () {

    $('#formValidation1').validate({
        rules: {
            firstname: {
                required: true,
            },
            lastname:{
                required: true,
                maxlength: 26
            },
            CompanyName:{
                required: true,
            },
            CorporateStructure:{
                required: true,
                maxlength: 26
            },
            AssociationName:{
                required: true,
                maxlength: 20
            },
            confirm_1:{
                required: true
            },

        },
        messages:{
            firstname:{
                required:'This field is required.',
            },
            lastname:{
                required:'This field is required.',
                maxlength:'Please enter no more than 11 characters.'
            },
            CompanyName:{
                required:'This field is required.',
            },
            CorporateStructure:{
                required:'This field is required.',
                maxlength:'Please enter no more than 26 characters.'
            },
            AssociationName:{
                required:'This field is required.',
                maxlength:'Please enter no more than 20 characters.'
            },
            confirm_1:{
                required:'This field is required.'
            },
        },
    })
    $('#continue_1').click(function() {
       if($('#formValidation1').valid()){
           //Go from page 1 to page 2
        document.getElementById('section_2').classList.remove("d-none");
        document.getElementById('section_1').classList.add("d-none");
        document.getElementById('nabar2').classList.remove("d-none");
        document.getElementById('nabar1').classList.add("d-none");    
       }
    });
});
    