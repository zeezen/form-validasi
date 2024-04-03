$(document).ready(function(){
    $('#formvalidasi').validate({
        rules:{
            nama:{
                minlength: 2
            },
            email:{
                email: true,
                required: true
            },
            number: {
                number: true,
                required: true,
                minlength: 9,
                maxlength: 15
            },
            message: {
                required: true
            }
        },
        messages: {
            nama:{
                required: "Isi namanya",
                minlength: "Nama harus lebih dari 2 huruf"
            },
            email:{
                email: "Masukan email dengan benar",
                required: "Masukkan email"
            },
            number: {
                number: "Isi nomor dengan benar",
                required: "Isi nomor handphone",
                minlength: "Nomor handphone minimal 8 angka",
                maxlength: "Nomor handphone maksimal 15 angka"
            },
            message: {
                required: "Masukan Pesan"
            },
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
