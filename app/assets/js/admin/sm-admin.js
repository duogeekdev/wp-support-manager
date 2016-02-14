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