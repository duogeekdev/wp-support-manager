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
                
                var overlay_html = '<div class = "sm_form_overlay" style="background:#cccccc; height:200px; position:absolute;">loadig....</div>';
                $(this.form).prepend(overlay_html);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLWFqYXguanMiLCJzbS1mcm9udC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBIiwiZmlsZSI6InNtLXB1YmxpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgXHJcbiAgICB2YXIgU01fQWpheF9Gb3JtID0ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkbWluQWpheDogU3VwcG9ydE1hbmFnZXIuYWpheHVybCxcclxuXHRcdHZhbGlkX2lucHV0OiBmYWxzZSxcclxuXHRcdGZvcm06IG51bGwsXHJcblx0XHRzdWJtaXRfYnV0dG9uOiBudWxsLFxyXG5cdFx0XHJcblx0XHRoYW5kbGU6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdFx0dGhpcy5zdWJtaXRfYnV0dG9uID0gb2JqO1xyXG5cdFx0XHRcdHRoaXMuZm9ybSA9ICQob2JqKS5jbG9zZXN0KCAnZm9ybScgKTtcclxuXHRcdFx0XHR0aGlzLnZhbGlkYXRlKCk7XHJcblx0XHRcdFx0aWYoIHRoaXMudmFsaWRfaW5wdXQgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuc2F2ZSgpO1x0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdHZhbGlkYXRlIDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHRoaXMudmFsaWRfaW5wdXQgPSB0cnVlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRzYXZlIDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgb3ZlcmxheV9odG1sID0gJzxkaXYgY2xhc3MgPSBcInNtX2Zvcm1fb3ZlcmxheVwiIHN0eWxlPVwiYmFja2dyb3VuZDojY2NjY2NjOyBoZWlnaHQ6MjAwcHg7IHBvc2l0aW9uOmFic29sdXRlO1wiPmxvYWRpZy4uLi48L2Rpdj4nO1xyXG5cdFx0XHRcdCQodGhpcy5mb3JtKS5wcmVwZW5kKG92ZXJsYXlfaHRtbCk7XHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHQgICB0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0XHQgICB1cmw6IHRoaXMuYWRtaW5BamF4LFxyXG5cdFx0XHRcdCAgIGRhdGE6ICQodGhpcy5mb3JtKS5zZXJpYWxpemUoKSwgLy8gc2VyaWFsaXplcyB0aGUgZm9ybSdzIGVsZW1lbnRzLlxyXG5cdFx0XHRcdCAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGpzb25fcmVzdWx0KVxyXG5cdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdCAgIHZhciByZXNwb25zZT1qUXVlcnkucGFyc2VKU09OKCBqc29uX3Jlc3VsdCApXHJcblx0XHRcdFx0XHQgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiIClcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0ICBhbGVydChyZXNwb25zZS5yZWRpcik7IFxyXG5cdFx0XHRcdFx0XHQgIGlmKCByZXNwb25zZS5yZWRpciAhPSd1bmRlZmluZWQnIClcclxuXHRcdFx0XHRcdFx0ICBcdGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcjtcclxuXHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdCAgIGVsc2VcclxuXHRcdFx0XHRcdCAgIHtcclxuXHRcdFx0XHRcdFx0ICAgYWxlcnQocmVzcG9uc2UubXNnKTtcclxuXHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHQgICB9XHJcblx0XHRcdFx0IH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0fSwvL2VuZCBzYXZlXHJcbiAgICAgICBcclxuICAgIH07Ly9lbmQgU01fQWpheF9Gb3JtXHJcbiBcclxuIFxyXG4gXHJcbiBcclxuICAgIGpRdWVyeShkb2N1bWVudCkucmVhZHkoIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgICAgIFx0XHRcclxuICAgICAgICAkKCAnLnNtX3NhdmVfYWpheF9mb3JtJyApLmNsaWNrKCBmdW5jdGlvbiggZSApIHsgICAgXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgU01fQWpheF9Gb3JtLmhhbmRsZSh0aGlzKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgXHJcbiAgICB9ICk7Ly9kb2N1ZW1lbnQgcmVhZHlcclxuICAgIFxyXG59ICkgKCBqUXVlcnkgKTtcclxuXHJcblxyXG4iLCJ2YXIgd29ybGQgPSAyMDA7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
