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
                          {
                             // document.location.href = response.redir;
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



var world = 200;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLWFqYXguanMiLCJzbS1mcm9udC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEZBIiwiZmlsZSI6InNtLXB1YmxpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgXHJcbiAgICB2YXIgU01fQWpheF9Gb3JtID0ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkbWluQWpheDogU3VwcG9ydE1hbmFnZXIuYWpheHVybCxcclxuICAgICAgICB2YWxpZF9pbnB1dDogZmFsc2UsXHJcbiAgICAgICAgZm9ybTogbnVsbCxcclxuICAgICAgICBzdWJtaXRfYnV0dG9uOiBudWxsLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZTogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0X2J1dHRvbiA9IG9iajtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9ICQob2JqKS5jbG9zZXN0KCAnZm9ybScgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLnZhbGlkX2lucHV0IClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmUoKTsgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdmFsaWRhdGUgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRfaW5wdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNhdmUgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL3ZhciBvdmVybGF5X2h0bWwgPSAnPGRpdiBjbGFzcyA9IFwic21fZm9ybV9vdmVybGF5XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiNjY2NjY2M7IGhlaWdodDoyMDBweDsgcG9zaXRpb246YWJzb2x1dGU7XCI+bG9hZGlnLi4uLjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAvLyQodGhpcy5mb3JtKS5wcmVwZW5kKG92ZXJsYXlfaHRtbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYWRtaW5BamF4LFxyXG4gICAgICAgICAgICAgICAgICAgZGF0YTogJCh0aGlzLmZvcm0pLnNlcmlhbGl6ZSgpLCAvLyBzZXJpYWxpemVzIHRoZSBmb3JtJ3MgZWxlbWVudHMuXHJcbiAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihqc29uX3Jlc3VsdClcclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2U9alF1ZXJ5LnBhcnNlSlNPTigganNvbl9yZXN1bHQgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT0gXCJzdWNjZXNzXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5yZWRpcik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCByZXNwb25zZS5yZWRpciAhPSd1bmRlZmluZWQnIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LC8vZW5kIHNhdmVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmdW5jdGlvbihzdGFydCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBvdmVybGF5IHdpdGggbG9hZGluZyBpbWFnZSB0byB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgaWYoIHN0YXJ0ID09IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXIgPSAnPGRpdiBjbGFzcz1cInNtX2Zvcm1fb3ZlcmxheVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBjbGFzcz1cInNtX2Zvcm1fbG9hZGluZ1wiIHNyYz1cIicrU3VwcG9ydE1hbmFnZXIuYXNzZXRzKycvaW1hZ2VzL2xvYWRpbmdBbmltYXRpb24uZ2lmXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nOyBcclxuICAgICAgICAgICAgICAgICAgICAkKG92ZXIpLmFwcGVuZFRvKHRoaXMuZm9ybSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNtX2Zvcm1fb3ZlcmxheScpLnJlbW92ZSgpOyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfS8vZW5kIGxvYWRpbmcgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfTsvL2VuZCBTTV9BamF4X0Zvcm1cclxuIFxyXG4gXHJcbiBcclxuIFxyXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24oICQgKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAkKCAnLnNtX3NhdmVfYWpheF9mb3JtJyApLmNsaWNrKCBmdW5jdGlvbiggZSApIHsgICAgXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgU01fQWpheF9Gb3JtLmhhbmRsZSh0aGlzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgXHJcbiAgICB9ICk7Ly9kb2N1ZW1lbnQgcmVhZHlcclxuICAgIFxyXG59ICkgKCBqUXVlcnkgKTtcclxuXHJcblxyXG4iLCJ2YXIgd29ybGQgPSAyMDA7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
