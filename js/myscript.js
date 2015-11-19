(function(){

$(document).ready(function() {

    var buyProductForm = {
    	init: function(){
    		this.cacheDom();
    		this.bindEvents();
    	},
    	cacheDom: function(){
    		this.$form = $("#form-order form");
    		this.$inputProduct = this.$form.find("#product");
    		this.$inputEmail = this.$form.find("#mail");
    		this.$submitButton = this.$form.find("button");	
    		this.$inputProductWarning = this.$inputProduct.next(".alert");
    		this.$inputEmailWarning = this.$inputEmail.next(".alert");
    	},
    	bindEvents: function(){
    		this.$submitButton.on("click", this.submitForm.bind(this));
    	},
    	checkIfProductWasSelected: function(){
    		if(this.$inputProduct.val() != null){
    			this.$inputProductWarning.addClass("collapse");
    			return true;
    		} else {
    			this.$inputProductWarning.removeClass("collapse");
    			return false;
    		}
    	},
    	checkEmailValidity: function(){
    		var submittedEmail = this.$inputEmail.val();
    		var regExp = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    		
    		if(regExp.test(submittedEmail)){
    			this.$inputEmailWarning.addClass("collapse");
    			return true;
    		} else {
    			this.$inputEmailWarning.removeClass("collapse");
    			return false;
    		}
    	},
    	submitForm: function(event){
    		event.preventDefault();
    		var checkIfProductWasSelected = this.checkIfProductWasSelected();
    		var checkEmailValidity = this.checkEmailValidity();
    		var formData = (this.$form).serialize();
    		if(checkIfProductWasSelected && checkEmailValidity){
    			$.ajax({
    				url: "php/buy-product-form.php",
    				method: "POST",
    				data: formData
    			}).done(function(data){
                    alert("Adatok sikeresen elküldve!");
    			})
    		}
    	}
    }

    buyProductForm.init();

}); // $(document).ready END

})("JQuery"); // END
