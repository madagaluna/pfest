"use strict";


document.addEventListener("DOMContentLoaded",function(){
    let forms = document.querySelectorAll('form');
    forms.forEach(function(form){
        let pristine = new Pristine(form);
        form.addEventListener('submit', function (ev) {
            let valid = pristine.validate();
            console.log("pristine validation");
            console.log(valid);
            if (valid) {
                return true;
            } else {
                ev.preventDefault();
            }
        });
    })
});