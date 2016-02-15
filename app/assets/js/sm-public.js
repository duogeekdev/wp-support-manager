;( function( $ ) {
    
    var SM_Ajax_Form = {
        
        adminAjax: SupportManager.ajaxurl,
		valid_input: false,
		form: null,
		submit_button: null,
		
		handle: function(obj){
				this.submit_button = obj;
				this.form = $(obj).closest( 'form' );
				this.validate();
				if( this.valid_input )
				{
					this.save();	
				}
				
			},
			
		validate : function(){
					this.valid_input = true;
				},
				
		save : function(){
			
				$.ajax({
				   type: "POST",
				   url: this.adminAjax,
				   data: $(this.form).serialize(), // serializes the form's elements.
				   success: function(json_result)
				   {
					   var response=jQuery.parseJSON( json_result )
					   if( response.status == "success" )
					   {
						  alert(response.redir); 
						  if( response.redir !='undefined' )
						  	document.location.href = response.redir;
					   }
					   else
					   {
						   alert(response.msg);
					   }
				   }
				 });
			
			},//end save
       
    };//end SM_Ajax_Form
 
 
 
 
    jQuery(document).ready( function( $ ) {
        		
        $( '.sm_save_ajax_form' ).click( function( e ) {    
            e.preventDefault();
            SM_Ajax_Form.handle(this);
        } );
        
    } );//docuement ready
    
} ) ( jQuery );



var world = 200;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLWFqYXguanMiLCJzbS1mcm9udC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUEiLCJmaWxlIjoic20tcHVibGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyggZnVuY3Rpb24oICQgKSB7XHJcbiAgICBcclxuICAgIHZhciBTTV9BamF4X0Zvcm0gPSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRtaW5BamF4OiBTdXBwb3J0TWFuYWdlci5hamF4dXJsLFxyXG5cdFx0dmFsaWRfaW5wdXQ6IGZhbHNlLFxyXG5cdFx0Zm9ybTogbnVsbCxcclxuXHRcdHN1Ym1pdF9idXR0b246IG51bGwsXHJcblx0XHRcclxuXHRcdGhhbmRsZTogZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0XHR0aGlzLnN1Ym1pdF9idXR0b24gPSBvYmo7XHJcblx0XHRcdFx0dGhpcy5mb3JtID0gJChvYmopLmNsb3Nlc3QoICdmb3JtJyApO1xyXG5cdFx0XHRcdHRoaXMudmFsaWRhdGUoKTtcclxuXHRcdFx0XHRpZiggdGhpcy52YWxpZF9pbnB1dCApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zYXZlKCk7XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0dmFsaWRhdGUgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0dGhpcy52YWxpZF9pbnB1dCA9IHRydWU7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdHNhdmUgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdCAgIHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdCAgIHVybDogdGhpcy5hZG1pbkFqYXgsXHJcblx0XHRcdFx0ICAgZGF0YTogJCh0aGlzLmZvcm0pLnNlcmlhbGl6ZSgpLCAvLyBzZXJpYWxpemVzIHRoZSBmb3JtJ3MgZWxlbWVudHMuXHJcblx0XHRcdFx0ICAgc3VjY2VzczogZnVuY3Rpb24oanNvbl9yZXN1bHQpXHJcblx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0ICAgdmFyIHJlc3BvbnNlPWpRdWVyeS5wYXJzZUpTT04oIGpzb25fcmVzdWx0IClcclxuXHRcdFx0XHRcdCAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIgKVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgIGFsZXJ0KHJlc3BvbnNlLnJlZGlyKTsgXHJcblx0XHRcdFx0XHRcdCAgaWYoIHJlc3BvbnNlLnJlZGlyICE9J3VuZGVmaW5lZCcgKVxyXG5cdFx0XHRcdFx0XHQgIFx0ZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyO1xyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0ICAgZWxzZVxyXG5cdFx0XHRcdFx0ICAge1xyXG5cdFx0XHRcdFx0XHQgICBhbGVydChyZXNwb25zZS5tc2cpO1xyXG5cdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgfSk7XHJcblx0XHRcdFxyXG5cdFx0XHR9LC8vZW5kIHNhdmVcclxuICAgICAgIFxyXG4gICAgfTsvL2VuZCBTTV9BamF4X0Zvcm1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24oICQgKSB7XHJcbiAgICAgICAgXHRcdFxyXG4gICAgICAgICQoICcuc21fc2F2ZV9hamF4X2Zvcm0nICkuY2xpY2soIGZ1bmN0aW9uKCBlICkgeyAgICBcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBTTV9BamF4X0Zvcm0uaGFuZGxlKHRoaXMpO1xyXG4gICAgICAgIH0gKTtcclxuICAgICAgICBcclxuICAgIH0gKTsvL2RvY3VlbWVudCByZWFkeVxyXG4gICAgXHJcbn0gKSAoIGpRdWVyeSApO1xyXG5cclxuXHJcbiIsInZhciB3b3JsZCA9IDIwMDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
