function getparagraph1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++ ) {
    inputs.push(document.getElementById("input_box_" + i). value)
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(" ");

}
function getparagraph2() {
    var inputs = [];
    for (var i = 1; i <= 6; i++ ) {
    inputs.push(document.getElementById("2input_box_2_" + i). value)
    }
    document.getElementById("showParagraph2").innerHTML = inputs.join(" ");
    
}