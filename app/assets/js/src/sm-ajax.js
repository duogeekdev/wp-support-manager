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
                
                //var overlay_html = '<div class = "sm_form_overlay" style="background:#cccccc; height:200px; position:absolute;">loadig....</div>';
                //$(this.form).prepend(overlay_html);
                this.loading(1);
                var THIS = this;
                $.ajax({
                   type: "POST",
                   url: this.adminAjax,
                   data: $(this.form).serialize(), // serializes the form's elements.
                   success: function(json_result)
                   {
                      THIS.loading(0);
                       var response=jQuery.parseJSON( json_result )
                       
                       if( response.status == "success" )
                       {
                          if( response.redir !='undefined' )
                          {
                              document.location.href = response.redir;
                          }
                       }
                       else
                       {
                           alert(response.msg);
                       }
                   }
                 });
            
            },//end save
            
            loading : function(start) {
                // add the overlay with loading image to the page
                if( start == 1)
                {
                    var over = '<div class="sm_form_overlay">' +
                        '<img class="sm_form_loading" src="'+SupportManager.assets+'/images/loadingAnimation.gif">' +
                        '</div>'; 
                    $(over).appendTo(this.form);
                }
                else
                {
                    $('.sm_form_overlay').remove();    
                }
            }//end loading            
            
            
            
       
    };//end SM_Ajax_Form
 
 
    
 
    jQuery(document).ready( function( $ ) {
                
        $( '.sm_save_ajax_form' ).click( function( e ) {    
            e.preventDefault();
            SM_Ajax_Form.handle(this);
        } );
        
    } );//docuement ready
    
} ) ( jQuery );


