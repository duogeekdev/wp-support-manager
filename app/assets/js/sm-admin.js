( function( $ ) {
    
    var settings = {
        
        adminAjax: SupportManager.ajaxurl,
        doneSuccessHTML: '<div class="settings_save_success">Settings Saved</div>',
        
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
            $( '.settings_save_success' ).remove();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLWFkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic20tYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoIGZ1bmN0aW9uKCAkICkge1xyXG4gICAgXHJcbiAgICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRtaW5BamF4OiBTdXBwb3J0TWFuYWdlci5hamF4dXJsLFxyXG4gICAgICAgIGRvbmVTdWNjZXNzSFRNTDogJzxkaXYgY2xhc3M9XCJzZXR0aW5nc19zYXZlX3N1Y2Nlc3NcIj5TZXR0aW5ncyBTYXZlZDwvZGl2PicsXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uZmlybV9jaGVja2VyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCggJy5hY3Rpb25fY29uZmlybScgKS5jbGljayggZnVuY3Rpb24oIGUgKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8qdmFyIGNvbiA9IGNvbmZpcm0oICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbj8gVGhpcyBjYW5cXCd0IGJlIHVuZG9uZS4nICk7XHJcbiAgICAgICAgICAgICAgICBpZiggY29uICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyID0gJCggdGhpcyApLmF0dHIoICdocmVmJyApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgYXR0ciAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiBhdHRyICE9PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhdHRyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSAkKCB0aGlzICksXHJcbiAgICAgICAgICAgICAgICAgICAgY29uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmRlbGV0ZUNoZWNrZXInKS5TTVBvcHVwKCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJCggJy5kZWxldGVDaGVja2VyIGJ1dHRvbicgKS5jbGljayggZnVuY3Rpb24oIGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICQoIHRoaXMgKS52YWwoKSA9PSAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IF90aGlzLmF0dHIoICdocmVmJyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGF0dHIgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgYXR0ciAhPT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJC5TTVBvcHVwLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbjtcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVtb3ZlU3VjY2Vzc0hUTUw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCAnLnNldHRpbmdzX3NhdmVfc3VjY2VzcycgKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNob3dfbG9hZGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoICcuc21fd3JhcCAuc2F2aW5nX21lc3NhZ2UnIClcclxuICAgICAgICAgICAgICAgIC5maW5kKCAnLnNhdmVfbXNnJyApLnRleHQoICdTYXZpbmcuLi4nIClcclxuICAgICAgICAgICAgLmVuZCgpXHJcbiAgICAgICAgICAgICAgICAuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGlkZV9sb2FkaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCggJy5zbV93cmFwIC5zYXZpbmdfbWVzc2FnZScgKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoICcuc2F2ZV9tc2cnICkudGV4dCggJ0RvbmUhJyApXHJcbiAgICAgICAgICAgIC5lbmQoKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KCAxMDAwIClcclxuICAgICAgICAgICAgICAgIC5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICctMzAwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGVuYWJsZVNlbGVjdDI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCAnLnNtX3dyYXAgc2VsZWN0JyApLnNlbGVjdDIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNhdmVPcHRpb25zOiBmdW5jdGlvbiggb2JqICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIG9iai52YWwoKSA9PSAnJyApIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldHRpbmdzLnNob3dfbG9hZGluZygpO1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5yZW1vdmVTdWNjZXNzSFRNTCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBvYmouZGF0YSggJ29wdGlvbicgKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBvYmoudmFsKCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICQoICcuc21fc2V0dGluZ3MgLmFjdGlvbicgKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIF93cG5vbmNlOiAkKCAnI193cG5vbmNlJyApLnZhbCgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkLnBvc3QoIHRoaXMuYWRtaW5BamF4LCBkYXRhLCBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB3cEFqYXgucGFyc2VBamF4UmVzcG9uc2UoIHJlc3BvbnNlLCAncmVzdWx0JyApO1xyXG4gICAgICAgICAgICAgICAgaWYoIHJlc3VsdC5yZXNwb25zZXNbMF0uZGF0YSA9PSAnZG9uZScgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBhcmVudCgpLmFwcGVuZCggc2V0dGluZ3MuZG9uZVN1Y2Nlc3NIVE1MICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuaGlkZV9sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50KCkuYXBwZW5kKCByZXN1bHQucmVzcG9uc2VzWzBdLmRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5oaWRlX2xvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGpRdWVyeSggZnVuY3Rpb24oICQgKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0dGluZ3MuZW5hYmxlU2VsZWN0MigpO1xyXG4gICAgICAgIHNldHRpbmdzLmNvbmZpcm1fY2hlY2tlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoICcuc21fc2V0dGluZ3Mgc2VsZWN0JyApLmNoYW5nZSggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLnNhdmVPcHRpb25zKCAkKCB0aGlzICkgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCggJy5zbV9zZXR0aW5ncyBpbnB1dFt0eXBlPXRleHRdJyApLmNoYW5nZSggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLnNhdmVPcHRpb25zKCAkKCB0aGlzICkgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgXHJcbiAgICB9ICk7XHJcbiAgICBcclxufSApICggalF1ZXJ5ICk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
