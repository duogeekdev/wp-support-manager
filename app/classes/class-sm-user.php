<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_User' ) ) {
    
    /**
     * Model class for SM_User
     *
     * @since 1.0.0
     */
    class SM_User{
        
        public $user;
        
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct( $id = '' ) {
            
            if( $id ) {
                $this->user = new WP_User( $id );
            }
            
        }
        
        /**
         * Get current user
         *
         * @since 1.0.0
         */
        static public function get_current_user( $field = 'display_name' ) {
            
            $current_user = SM_Loader::Load( 'SM_User', get_current_user_id() );
            return $current_user->user->$field;
            
        }
        
        
        
    }
    
}