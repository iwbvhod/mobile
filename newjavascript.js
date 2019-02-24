/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MyFunction() {
    window.alert("Вие изпратихте заявката си успешно!");
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


$(document).ready(function () {
    for (var i = 0; i < 3; i++)
    {
        $("h1")
        .slideUp(3000)
        .slideDown(3000);
    }
    
});