;( function( $ ) {
    
    var Ajax = {
        
        adminAjax: SupportManager.ajaxurl,
        
        newTicket: {
            
            title: '',
            details: '',
            
            init: function() {
                this.title = $( '#sm_title' ).val();
                this.details = $( '#sm_ticket_details' ).val();
                return this;
            },
            
            validation: function() {
                
            },
            
            submit: function() {
                var data = {};
                $.post(
                    Ajax.adminAjax,
                    data,
                    function( response ) {
                        
                    }
                );
            }
            
        }
        
    };
    
    jQuery( function( $ ) {
        
        $( '#sm_new_ticket' ).click( function( e ) {
            
            e.preventDefault();
            Ajax.newTicket.init().submit();
            
        } );
        
    } );
    
} ) ( jQuery );