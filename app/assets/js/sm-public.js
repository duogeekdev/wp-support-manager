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



var world = 200;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLWFqYXguanMiLCJzbS1mcm9udC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQSIsImZpbGUiOiJzbS1wdWJsaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KCBmdW5jdGlvbiggJCApIHtcclxuICAgIFxyXG4gICAgdmFyIFNNX0FqYXhfRm9ybSA9IHtcclxuICAgICAgICBcclxuICAgICAgICBhZG1pbkFqYXg6IFN1cHBvcnRNYW5hZ2VyLmFqYXh1cmwsXHJcbiAgICAgICAgdmFsaWRfaW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgIGZvcm06IG51bGwsXHJcbiAgICAgICAgc3VibWl0X2J1dHRvbjogbnVsbCxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGU6IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdF9idXR0b24gPSBvYmo7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSAkKG9iaikuY2xvc2VzdCggJ2Zvcm0nICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiggdGhpcy52YWxpZF9pbnB1dCApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7ICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHZhbGlkYXRlIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkX2lucHV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBzYXZlIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy92YXIgb3ZlcmxheV9odG1sID0gJzxkaXYgY2xhc3MgPSBcInNtX2Zvcm1fb3ZlcmxheVwiIHN0eWxlPVwiYmFja2dyb3VuZDojY2NjY2NjOyBoZWlnaHQ6MjAwcHg7IHBvc2l0aW9uOmFic29sdXRlO1wiPmxvYWRpZy4uLi48L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgLy8kKHRoaXMuZm9ybSkucHJlcGVuZChvdmVybGF5X2h0bWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIFRISVMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmFkbWluQWpheCxcclxuICAgICAgICAgICAgICAgICAgIGRhdGE6ICQodGhpcy5mb3JtKS5zZXJpYWxpemUoKSwgLy8gc2VyaWFsaXplcyB0aGUgZm9ybSdzIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oanNvbl9yZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBUSElTLmxvYWRpbmcoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlPWpRdWVyeS5wYXJzZUpTT04oIGpzb25fcmVzdWx0IClcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiIClcclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHJlc3BvbnNlLnJlZGlyICE9J3VuZGVmaW5lZCcgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLnJlZGlyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LC8vZW5kIHNhdmVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxvYWRpbmcgOiBmdW5jdGlvbihzdGFydCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBvdmVybGF5IHdpdGggbG9hZGluZyBpbWFnZSB0byB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgaWYoIHN0YXJ0ID09IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXIgPSAnPGRpdiBjbGFzcz1cInNtX2Zvcm1fb3ZlcmxheVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBjbGFzcz1cInNtX2Zvcm1fbG9hZGluZ1wiIHNyYz1cIicrU3VwcG9ydE1hbmFnZXIuYXNzZXRzKycvaW1hZ2VzL2xvYWRpbmdBbmltYXRpb24uZ2lmXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nOyBcclxuICAgICAgICAgICAgICAgICAgICAkKG92ZXIpLmFwcGVuZFRvKHRoaXMuZm9ybSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNtX2Zvcm1fb3ZlcmxheScpLnJlbW92ZSgpOyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfS8vZW5kIGxvYWRpbmcgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfTsvL2VuZCBTTV9BamF4X0Zvcm1cclxuIFxyXG4gXHJcbiAgICBcclxuIFxyXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24oICQgKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAkKCAnLnNtX3NhdmVfYWpheF9mb3JtJyApLmNsaWNrKCBmdW5jdGlvbiggZSApIHsgICAgXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgU01fQWpheF9Gb3JtLmhhbmRsZSh0aGlzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgXHJcbiAgICB9ICk7Ly9kb2N1ZW1lbnQgcmVhZHlcclxuICAgIFxyXG59ICkgKCBqUXVlcnkgKTtcclxuXHJcblxyXG4iLCJ2YXIgd29ybGQgPSAyMDA7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
