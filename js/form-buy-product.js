(function(){

$(document).ready(function() {

    // Cache DOM

    var $form = $("#form-order form");
    var $inputProduct = $form.find("#product");
    var $inputEmail = $form.find("#mail");
    var $submitButton = $form.find("button"); 
    var $inputProductWarning = $inputProduct.next(".alert");
    var $inputEmailWarning = $inputEmail.next(".alert");

    // Bind Events

    $submitButton.on("click", submitForm);

    // Methods

    function submitForm(){
        event.preventDefault();
        var checkProduct = checkIfProductWasSelected();
        var checkEmail = checkEmailValidity();
        var formData = ($form).serialize();
        if(checkProduct && checkEmail){
            console.log("success")
            $.ajax({
                url: "php/form-buy-product.php",
                method: "POST",
                data: formData
            }).done(function(data){
                alert("Adatok sikeresen elküldve!");
            })
        }  
    }

    function checkIfProductWasSelected(){
        if($inputProduct.val() != null){
            $inputProductWarning.addClass("collapse");
            return true;
        } else {
            $inputProductWarning.removeClass("collapse");
            return false;
        }  
    }

    function checkEmailValidity(){
        var submittedEmail = $inputEmail.val();
        var regExp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        
        if(regExp.test(submittedEmail)){
            $inputEmailWarning.addClass("collapse");
            return true;
        } else {
            $inputEmailWarning.removeClass("collapse");
            return false;
        } 
    }

}); // $(document).ready END

})("JQuery"); // END
