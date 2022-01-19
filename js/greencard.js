 /*------- Greencard Date -------*/
function greenCard(){
    const d = new Date();
    let month = ("0" + (d.getMonth() + 1)).slice(-2); 
    let year = (d.getFullYear()+ 3) .toString().substr(-2);
    document.querySelector(".green_month_years").innerHTML = (month + "/" + year);
}
/*------- Put mr/miss details in the green card and the envelope -------*/
function text(){
    var x = document.querySelector('#FirstName').value;
    var y = document.querySelector('#LastName').value;
    var z = document.querySelector(".envelope_top_line");
    var top_line = document.querySelector('.top_line');
    var b = document.querySelector('#CustomField').value;
    var bottom_line = document.querySelector(".bottom_line");
    z.innerHTML = x + " " + y;
    top_line.innerHTML = x + " " + y;
    bottom_line.innerHTML = b; 
}
/*------- Put corporate details in the green card and the envelope -------*/
function Corporate_Details(){
    var CompanyName = document.querySelector('#CompanyName').value;
    var CorporateStructure = document.querySelector('#CorporateStructure').value;
    var bottom_line = document.querySelector('.bottom_line');
    var envelope_top_line = document.querySelector(".envelope_top_line");
    bottom_line.innerHTML = CompanyName + " " + CorporateStructure;
    envelope_top_line.innerHTML = CompanyName + " " + CorporateStructure;
}
/*------- Put association details in the green card and the envelope -------*/
function Association_Details(){
    var AssociationName = document.querySelector('#AssociationName').value;
    var bottom_line = document.querySelector('.bottom_line');
    var envelope_top_line = document.querySelector(".envelope_top_line");
    bottom_line.innerHTML = AssociationName;
    envelope_top_line.innerHTML = AssociationName;
}

                        /*------- Put Details from page 2 to the envelope -------*/
                        
/*------- Put address field in the envelope -------*/
function address2(){
    var x = document.querySelector('#address').value;
    var y = document.querySelector(".address3");
    y.innerHTML = x;
}
/*------- Put city & zip in the envelope -------*/
function city_zip(){
    var x = document.querySelector('#city').value;
    var y = document.querySelector('#zip').value;
    var z = document.querySelector(".city_zip");
    z.innerHTML = x + "," + y;   
}
/*------- Put the chosen country field in the envelope -------*/
function country2(selTag) {
  var x = selTag.options[selTag.selectedIndex].text;
  var y = document.querySelector(".country3");
  y.innerHTML =  x;
}

