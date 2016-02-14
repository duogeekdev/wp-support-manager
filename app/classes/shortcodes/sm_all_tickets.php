<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SC_sm_all_tickets' ) ) {
    /**
     * ShortCode class SM_all_tickets
     */
    class SC_sm_all_tickets{
        
        public function __construct() {
            
        }
        
        public function render_shortcode() {
            return 100;
        }
        
    }
}