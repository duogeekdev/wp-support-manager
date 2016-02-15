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


