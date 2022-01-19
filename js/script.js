/*------- Body Onload -------*/
function init(){
    title_checked();
    $(".cardAccountCheck").hide();
    $(".second_address").hide();
    greenCard();
}

/*------- Go to mr/miss/corporate/association form -------*/
function title_checked() {
    let a = document.querySelector('#Corporate');
    let b = document.querySelector('#Association'); 
    let c = document.querySelectorAll(".mr_miss");
    let d = document.querySelectorAll(".corporate");
    let e = document.querySelectorAll(".association");
    if (a.checked){
        $(".corporate").removeClass("d-none"); 
        $(".association").addClass("d-none");
        $(".cardAccount").removeClass("d-none");
        $(".mr_miss").addClass("d-none");
        $(".title").text('corporate information')
    }else if (b.checked) {
        $(".corporate").addClass("d-none");
        $(".association").removeClass("d-none");
        $(".cardAccount").removeClass("d-none");
        $(".mr_miss").addClass("d-none");
        $(".title").text('association information')
    }else {
        $(".corporate").addClass("d-none");
        $(".association").addClass("d-none");
        $(".cardAccount").addClass("d-none");
        $(".mr_miss").removeClass("d-none");
        $(".title").text('personal details')
    } 
  }


/*------- Add Card -------*/
function addCard(){
    document.getElementById('sec_custom').classList.toggle("d-none");
    document.getElementById('sec_iban').classList.toggle("d-none");
    document.getElementById('add_btn').classList.toggle("d-none");
    document.querySelector('.card_2').classList.toggle("d-none");   
}

/*------- Customization & IBAN selection -------*/
function Customization_checkbox() {
    $(".cardAccountCheck").toggle();
}

/*------- Add Delivery Address -------*/
function delivery_second_address() {
    $(".second_address").toggle();
}

/*------- Number of Customization & IBAN selection  -------*/
function selectCards(elem){
    var currentVal = $(elem).val();
    console.log(currentVal);
    $('.section').hide().slice(0, currentVal).show();
}

/*------- Card1 and Card2 in the cart in page 3  -------*/
$(function cardsCart() {
    $('#Card1').change(function(){
        $('.price_1').hide();
        $('#' + $(this).val()).show();
    });
});

