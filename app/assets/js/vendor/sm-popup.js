;( function( $, window, document, undefined ) {
    
    var PluginName = 'SMPopup',
        defaults = {
            close_class     : 'sm_popup_close',
            close_outside   : true,
            action          : '',
            autoClose       : false,
            closeDuration   : 1000
        },
        overlay = false,
        overlay_elem = '<div class="sm_overlay" />';
        
    function Popup( element, options ) {
        
        var _this = this;
        this.element = element;
        this.options = $.extend(
            {},
            defaults,
            options
        );
        this._defaults = defaults;
        this._name = PluginName;
        
        this.init();
        this.destroy();
        
        return _this;
    
    }
    
    Popup.prototype.init = function() {
        
        var self = this.element,
            _this = this;
            
        $( this.element ).appendTo( 'body' );
        
        if( this.options.action == 'click' ) {
            $( self ).click( function( e ) {
                e.preventDefault();
                
                _this.open(
                    '.' + $( this ).data( 'popup' )
                );
                
                return false;
            } );
        }else{
            _this.open( self );
        }
        
        if( _this.options.autoClose ) {
            setTimeout( function() {
                $( '.' + _this.options.close_class ).click();
            }, _this.options.closeDuration );
        }
        
    }
    
    Popup.prototype.destroy = function() {
        
        var self = this.element,
            _this = this;
        
        $( '.' + this.options.close_class ).click( function( e ) {
            e.preventDefault();
            
            if( _this.options.action == 'click' ) {
                _this.close( '.' + $( self ).data( 'popup' ) );
            }else{
                _this.close( self );
            }
            
            return false;
        } );
        
    }
    
    Popup.prototype.open = function( elem ) {
        
        var self = elem;
        var width = $( self ).width(),
            height = $( self ).height();
            
        var w = $( window ).width(),
            h = $( window ).height();
        
        var top = ( h - height ) / 2,
            left = ( w - width ) / 2;
            
        $( 'body' )
            .addClass( 'smui-has-overlay' )
            .prepend( overlay_elem );
            
        $( self )
            .addClass( 'ui-sm-popup' )
            .css( {
                left: left + 'px',
                top: top + 'px'
            } )
            .show();
        
    }
    
    Popup.prototype.close = function( self ) {
        
        $( 'body' ).removeClass( 'smui-has-overlay' );
        $( '.sm_overlay' ).remove();
        
        $( self )
            .removeClass( 'ui-sm-popup' )
            .css( {
                left: -3000 + 'px',
                top: -3000 + 'px'
            } )
            .hide();
        
    }
    
    $.fn[PluginName] = function( options ) {
        
        return this.each( function() {
            //if( ! $.data( this, 'plugin_' + PluginName ) ) {
                $.data(
                    this,
                    'plugin_' + PluginName,
                    new Popup( this, options )
                )
            //}
        } );
    }
    
    $.SMPopup = {};
    $.SMPopup = $.fn[PluginName];
    
    $.extend(
        $.SMPopup,
        {
            destroy: function() {
                
                $( 'body' ).removeClass( 'smui-has-overlay' );
                $( '.sm_overlay' ).remove();
                
                $( '.ui-sm-popup' )
                    .css( {
                        left: -3000 + 'px',
                        top: -3000 + 'px'
                    } )
                    .hide()
                    .removeClass( 'ui-sm-popup' );
                
            },
            
            close: function( self ) {
                
                $( 'body' ).removeClass( 'smui-has-overlay' );
                $( '.sm_overlay' ).remove();
                
                $( self )
                    .removeClass( 'ui-sm-popup' )
                    .css( {
                        left: -3000 + 'px',
                        top: -3000 + 'px'
                    } )
                    .hide();
                
                
            }
        }
    );
    
    
} ( jQuery, window, document ) );


jQuery(function($){
    /*$('.one').SMPopup({
        action: 'click'
    });
    /*console.log( pop );
    
    setTimeout( function() {
        $.SMPopup.close( pop );
    }, 2000);*/
    
});