//CheckBox function
function chckbxChanging(wea) {
    var chckbxs=document.querySelectorAll("input.chckbx");
    for (var i=0; i<chckbxs.length; i++){
        chckbxs[i].checked=false;
    }
    wea.checked=true;
}