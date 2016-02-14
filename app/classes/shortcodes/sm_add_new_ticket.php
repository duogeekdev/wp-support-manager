<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SC_sm_add_new_ticket' ) ) {
    /**
     * ShortCode class SM_all_tickets
     */
    class SC_sm_add_new_ticket{
        
        public function __construct() {
            
        }
        
        public function render_shortcode() {
            
            if( ! is_user_logged_in() ) {
                return __( 'You have to login to create a ticket', 'sm' );
            }
            
            ob_start();
            SM_Helper::get_template( 'add-new-ticket.php' );
            $output = ob_get_contents();
            ob_end_clean();
            
            return $output;
            
        }
        
    }
}