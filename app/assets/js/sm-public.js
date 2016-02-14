;( function( $ ) {
    
    var Ajax = {
        
        adminAjax: 'http://m2.dev/wp-admin/admin-ajax.php',
        
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
var world = 200;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwLWFqYXguanMiLCJzcC1mcm9udC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0EiLCJmaWxlIjoic3otcHVibGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyggZnVuY3Rpb24oICQgKSB7XG4gICAgXG4gICAgdmFyIEFqYXggPSB7XG4gICAgICAgIFxuICAgICAgICBhZG1pbkFqYXg6ICdodHRwOi8vbTIuZGV2L3dwLWFkbWluL2FkbWluLWFqYXgucGhwJyxcbiAgICAgICAgXG4gICAgICAgIG5ld1RpY2tldDoge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBkZXRhaWxzOiAnJyxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9ICQoICcjc3pfdGl0bGUnICkudmFsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzID0gJCggJyNzel90aWNrZXRfZGV0YWlscycgKS52YWwoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhbGlkYXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICQucG9zdChcbiAgICAgICAgICAgICAgICAgICAgQWpheC5hZG1pbkFqYXgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCByZXNwb25zZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH07XG4gICAgXG4gICAgalF1ZXJ5KCBmdW5jdGlvbiggJCApIHtcbiAgICAgICAgXG4gICAgICAgICQoICcjc3pfbmV3X3RpY2tldCcgKS5jbGljayggZnVuY3Rpb24oIGUgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIEFqYXgubmV3VGlja2V0LmluaXQoKS5zdWJtaXQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9ICk7XG4gICAgICAgIFxuICAgIH0gKTtcbiAgICBcbn0gKSAoIGpRdWVyeSApOyIsInZhciB3b3JsZCA9IDIwMDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
