<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_ShortCodes' ) ) {
    /**
     * Shortcode class
     *
     * @since 1.0.0
     */
    class SM_ShortCodes{
        
        private function __construct() {
            $Shortcodes = self::get_shortcodes();
            foreach( $Shortcodes as $Shortcode ) {
                $file = SM_FILES_DIR . '/classes/shortcodes/' . $Shortcode . '.php';
                if( file_exists( $file ) ) {
                    require_once $file;
                    $class = 'SC_' . $Shortcode;
                    $$Shortcode = new $class();
                    add_shortcode( $Shortcode, array( $$Shortcode, 'render_shortcode' ) );
                }
            }
        }
        
        static public function get_instance() {
            static $Inst = null;
            if( $Inst == null ) {
                $Inst = new self();
            }
            
            return $Inst;
        }
        
        static public function get_shortcodes() {
            return apply_filters(
                        'sm_shortcode_list',
                        array(
                            SM_Config::SM_SC_ALL_TICKETS,
                            SM_Config::SM_SC_ADD_NEW_TICKET
                        )
                    );
        }
        
    }
    
}