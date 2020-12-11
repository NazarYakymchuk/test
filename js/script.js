$(document).ready(function () {
    $("#phone").inputmask("+380(__)___-__-__*"); //static mask
    $("#phone").inputmask({ mask: "+380(99)999-99-99" }); //specifying options
});

