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
var world = 200;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtLWFqYXguanMiLCJzbS1mcm9udC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0EiLCJmaWxlIjoic20tcHVibGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiOyggZnVuY3Rpb24oICQgKSB7XHJcbiAgICBcclxuICAgIHZhciBBamF4ID0ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkbWluQWpheDogU3VwcG9ydE1hbmFnZXIuYWpheHVybCxcclxuICAgICAgICBcclxuICAgICAgICBuZXdUaWNrZXQ6IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgZGV0YWlsczogJycsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSAkKCAnI3NtX3RpdGxlJyApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzID0gJCggJyNzbV90aWNrZXRfZGV0YWlscycgKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFsaWRhdGlvbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJC5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgIEFqYXguYWRtaW5BamF4LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGpRdWVyeSggZnVuY3Rpb24oICQgKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCggJyNzbV9uZXdfdGlja2V0JyApLmNsaWNrKCBmdW5jdGlvbiggZSApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgQWpheC5uZXdUaWNrZXQuaW5pdCgpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgXHJcbiAgICB9ICk7XHJcbiAgICBcclxufSApICggalF1ZXJ5ICk7IiwidmFyIHdvcmxkID0gMjAwOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
