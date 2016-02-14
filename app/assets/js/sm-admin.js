( function( $ ) {
    
    var settings = {
        
        adminAjax: SupportManager.ajaxurl,
        doneSuccessHTML: '<div class="settings_save_sucess">Settings Saved</div>',
        
        confirm_checker: function() {
            $( '.action_confirm' ).click( function( e ) {
                e.preventDefault();
                
                /*var con = confirm( 'Are you sure you want to perform this action? This can\'t be undone.' );
                if( con ) {
                    var attr = $( this ).attr( 'href' );
                    if( typeof attr !== typeof undefined && attr !== false ) {
                        window.location.href = attr;
                    }
                    return true;
                }*/
                
                var _this = $( this ),
                    con = false;
                    $('.deleteChecker').SMPopup(); 
                    
                $( '.deleteChecker button' ).click( function( e ) {
                    
                    if( $( this ).val() == 1 ) {
                        var attr = _this.attr( 'href' );
                        if( typeof attr !== typeof undefined && attr !== false ) {
                            window.location.href = attr;
                        }
                        con = true;
                    }
                    $.SMPopup.destroy();
                    
                } );
                
                return con;
            } );
        },
        
        removeSuccessHTML: function() {
            $( '.settings_save_sucess' ).remove();
        },
        
        show_loading: function() {
            $( '.sm_wrap .saving_message' )
                .find( '.save_msg' ).text( 'Saving...' )
            .end()
                .animate(
                    {
                        right: '10px'
                    }
                );
        },
        
        hide_loading: function() {
            $( '.sm_wrap .saving_message' )
                .find( '.save_msg' ).text( 'Done!' )
            .end()
                .delay( 1000 )
                .animate(
                    {
                        right: '-300px'
                    }
                );
        },
        
        enableSelect2: function() {
            $( '.sm_wrap select' ).select2();
        },
        
        saveOptions: function( obj ) {
            
            if( obj.val() == '' ) return;
            
            settings.show_loading();
            settings.removeSuccessHTML();
            
            var data = {
                name: obj.data( 'option' ),
                value: obj.val(),
                action: $( '.sm_settings .action' ).val(),
                _wpnonce: $( '#_wpnonce' ).val()
            };
            
            $.post( this.adminAjax, data, function( response ) {
                
                var result = wpAjax.parseAjaxResponse( response, 'result' );
                if( result.responses[0].data == 'done' ) {
                    obj.parent().append( settings.doneSuccessHTML );
                    settings.hide_loading();
                }else{
                    obj.parent().append( result.responses[0].data );
                    settings.hide_loading();
                }
                
            } );
            
        }
        
    };
    
    jQuery( function( $ ) {
        
        settings.enableSelect2();
        settings.confirm_checker();
        
        $( '.sm_settings select' ).change( function() {
            settings.saveOptions( $( this ) );
        } );
        
        $( '.sm_settings input[type=text]' ).change( function() {
            settings.saveOptions( $( this ) );
        } );
        
    } );
    
} ) ( jQuery );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLWFkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic20tYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgXHJcbiAgICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRtaW5BamF4OiBTdXBwb3J0TWFuYWdlci5hamF4dXJsLFxyXG4gICAgICAgIGRvbmVTdWNjZXNzSFRNTDogJzxkaXYgY2xhc3M9XCJzZXR0aW5nc19zYXZlX3N1Y2Vzc1wiPlNldHRpbmdzIFNhdmVkPC9kaXY+JyxcclxuICAgICAgICBcclxuICAgICAgICBjb25maXJtX2NoZWNrZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCAnLmFjdGlvbl9jb25maXJtJyApLmNsaWNrKCBmdW5jdGlvbiggZSApIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLyp2YXIgY29uID0gY29uZmlybSggJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uPyBUaGlzIGNhblxcJ3QgYmUgdW5kb25lLicgKTtcclxuICAgICAgICAgICAgICAgIGlmKCBjb24gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHIgPSAkKCB0aGlzICkuYXR0ciggJ2hyZWYnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBhdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIGF0dHIgIT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9ICQoIHRoaXMgKSxcclxuICAgICAgICAgICAgICAgICAgICBjb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZGVsZXRlQ2hlY2tlcicpLlNNUG9wdXAoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKCAnLmRlbGV0ZUNoZWNrZXIgYnV0dG9uJyApLmNsaWNrKCBmdW5jdGlvbiggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiggJCggdGhpcyApLnZhbCgpID09IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyID0gX3RoaXMuYXR0ciggJ2hyZWYnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgYXR0ciAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBhdHRyICE9PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXR0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkLlNNUG9wdXAuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uO1xyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZW1vdmVTdWNjZXNzSFRNTDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoICcuc2V0dGluZ3Nfc2F2ZV9zdWNlc3MnICkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzaG93X2xvYWRpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCAnLnNtX3dyYXAgLnNhdmluZ19tZXNzYWdlJyApXHJcbiAgICAgICAgICAgICAgICAuZmluZCggJy5zYXZlX21zZycgKS50ZXh0KCAnU2F2aW5nLi4uJyApXHJcbiAgICAgICAgICAgIC5lbmQoKVxyXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhpZGVfbG9hZGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoICcuc21fd3JhcCAuc2F2aW5nX21lc3NhZ2UnIClcclxuICAgICAgICAgICAgICAgIC5maW5kKCAnLnNhdmVfbXNnJyApLnRleHQoICdEb25lIScgKVxyXG4gICAgICAgICAgICAuZW5kKClcclxuICAgICAgICAgICAgICAgIC5kZWxheSggMTAwMCApXHJcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnLTMwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBlbmFibGVTZWxlY3QyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCggJy5zbV93cmFwIHNlbGVjdCcgKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzYXZlT3B0aW9uczogZnVuY3Rpb24oIG9iaiApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCBvYmoudmFsKCkgPT0gJycgKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5zaG93X2xvYWRpbmcoKTtcclxuICAgICAgICAgICAgc2V0dGluZ3MucmVtb3ZlU3VjY2Vzc0hUTUwoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogb2JqLmRhdGEoICdvcHRpb24nICksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogb2JqLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAkKCAnLnNtX3NldHRpbmdzIC5hY3Rpb24nICkudmFsKCksXHJcbiAgICAgICAgICAgICAgICBfd3Bub25jZTogJCggJyNfd3Bub25jZScgKS52YWwoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJC5wb3N0KCB0aGlzLmFkbWluQWpheCwgZGF0YSwgZnVuY3Rpb24oIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gd3BBamF4LnBhcnNlQWpheFJlc3BvbnNlKCByZXNwb25zZSwgJ3Jlc3VsdCcgKTtcclxuICAgICAgICAgICAgICAgIGlmKCByZXN1bHQucmVzcG9uc2VzWzBdLmRhdGEgPT0gJ2RvbmUnICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5wYXJlbnQoKS5hcHBlbmQoIHNldHRpbmdzLmRvbmVTdWNjZXNzSFRNTCApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmhpZGVfbG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBhcmVudCgpLmFwcGVuZCggcmVzdWx0LnJlc3BvbnNlc1swXS5kYXRhICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuaGlkZV9sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBqUXVlcnkoIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldHRpbmdzLmVuYWJsZVNlbGVjdDIoKTtcclxuICAgICAgICBzZXR0aW5ncy5jb25maXJtX2NoZWNrZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAkKCAnLnNtX3NldHRpbmdzIHNlbGVjdCcgKS5jaGFuZ2UoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5zYXZlT3B0aW9ucyggJCggdGhpcyApICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoICcuc21fc2V0dGluZ3MgaW5wdXRbdHlwZT10ZXh0XScgKS5jaGFuZ2UoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5zYXZlT3B0aW9ucyggJCggdGhpcyApICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIFxyXG4gICAgfSApO1xyXG4gICAgXHJcbn0gKSAoIGpRdWVyeSApOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
