( function( $ ) {
    
    var settings = {
        
        adminAjax: 'http://m2.dev/wp-admin/admin-ajax.php',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN6LWFkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3otYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoIGZ1bmN0aW9uKCAkICkge1xuICAgIFxuICAgIHZhciBzZXR0aW5ncyA9IHtcbiAgICAgICAgXG4gICAgICAgIGFkbWluQWpheDogJ2h0dHA6Ly9tMi5kZXYvd3AtYWRtaW4vYWRtaW4tYWpheC5waHAnLFxuICAgICAgICBkb25lU3VjY2Vzc0hUTUw6ICc8ZGl2IGNsYXNzPVwic2V0dGluZ3Nfc2F2ZV9zdWNlc3NcIj5TZXR0aW5ncyBTYXZlZDwvZGl2PicsXG4gICAgICAgIFxuICAgICAgICBjb25maXJtX2NoZWNrZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCggJy5hY3Rpb25fY29uZmlybScgKS5jbGljayggZnVuY3Rpb24oIGUgKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8qdmFyIGNvbiA9IGNvbmZpcm0oICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbj8gVGhpcyBjYW5cXCd0IGJlIHVuZG9uZS4nICk7XG4gICAgICAgICAgICAgICAgaWYoIGNvbiApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHIgPSAkKCB0aGlzICkuYXR0ciggJ2hyZWYnICk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgYXR0ciAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBhdHRyICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXR0cjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSAkKCB0aGlzICksXG4gICAgICAgICAgICAgICAgICAgIGNvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkKCcuZGVsZXRlQ2hlY2tlcicpLlNaUG9wdXAoKTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoICcuZGVsZXRlQ2hlY2tlciBidXR0b24nICkuY2xpY2soIGZ1bmN0aW9uKCBlICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoICQoIHRoaXMgKS52YWwoKSA9PSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHIgPSBfdGhpcy5hdHRyKCAnaHJlZicgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgYXR0ciAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBhdHRyICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQuU1pQb3B1cC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgcmVtb3ZlU3VjY2Vzc0hUTUw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCggJy5zZXR0aW5nc19zYXZlX3N1Y2VzcycgKS5yZW1vdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIHNob3dfbG9hZGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCAnLnN6X3dyYXAgLnNhdmluZ19tZXNzYWdlJyApXG4gICAgICAgICAgICAgICAgLmZpbmQoICcuc2F2ZV9tc2cnICkudGV4dCggJ1NhdmluZy4uLicgKVxuICAgICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMTBweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBoaWRlX2xvYWRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCggJy5zel93cmFwIC5zYXZpbmdfbWVzc2FnZScgKVxuICAgICAgICAgICAgICAgIC5maW5kKCAnLnNhdmVfbXNnJyApLnRleHQoICdEb25lIScgKVxuICAgICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgICAgICAgLmRlbGF5KCAxMDAwIClcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICctMzAwcHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgZW5hYmxlU2VsZWN0MjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCAnLnN6X3dyYXAgc2VsZWN0JyApLnNlbGVjdDIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIHNhdmVPcHRpb25zOiBmdW5jdGlvbiggb2JqICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiggb2JqLnZhbCgpID09ICcnICkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXR0aW5ncy5zaG93X2xvYWRpbmcoKTtcbiAgICAgICAgICAgIHNldHRpbmdzLnJlbW92ZVN1Y2Nlc3NIVE1MKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG9iai5kYXRhKCAnb3B0aW9uJyApLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsKCksXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAkKCAnLnN6X3NldHRpbmdzIC5hY3Rpb24nICkudmFsKCksXG4gICAgICAgICAgICAgICAgX3dwbm9uY2U6ICQoICcjX3dwbm9uY2UnICkudmFsKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQucG9zdCggdGhpcy5hZG1pbkFqYXgsIGRhdGEsIGZ1bmN0aW9uKCByZXNwb25zZSApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gd3BBamF4LnBhcnNlQWpheFJlc3BvbnNlKCByZXNwb25zZSwgJ3Jlc3VsdCcgKTtcbiAgICAgICAgICAgICAgICBpZiggcmVzdWx0LnJlc3BvbnNlc1swXS5kYXRhID09ICdkb25lJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBhcmVudCgpLmFwcGVuZCggc2V0dGluZ3MuZG9uZVN1Y2Nlc3NIVE1MICk7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmhpZGVfbG9hZGluZygpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50KCkuYXBwZW5kKCByZXN1bHQucmVzcG9uc2VzWzBdLmRhdGEgKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuaGlkZV9sb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfTtcbiAgICBcbiAgICBqUXVlcnkoIGZ1bmN0aW9uKCAkICkge1xuICAgICAgICBcbiAgICAgICAgc2V0dGluZ3MuZW5hYmxlU2VsZWN0MigpO1xuICAgICAgICBzZXR0aW5ncy5jb25maXJtX2NoZWNrZXIoKTtcbiAgICAgICAgXG4gICAgICAgICQoICcuc3pfc2V0dGluZ3Mgc2VsZWN0JyApLmNoYW5nZSggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5zYXZlT3B0aW9ucyggJCggdGhpcyApICk7XG4gICAgICAgIH0gKTtcbiAgICAgICAgXG4gICAgICAgICQoICcuc3pfc2V0dGluZ3MgaW5wdXRbdHlwZT10ZXh0XScgKS5jaGFuZ2UoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0dGluZ3Muc2F2ZU9wdGlvbnMoICQoIHRoaXMgKSApO1xuICAgICAgICB9ICk7XG4gICAgICAgIFxuICAgIH0gKTtcbiAgICBcbn0gKSAoIGpRdWVyeSApOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
