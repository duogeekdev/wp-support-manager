<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Utility' ) ) {
    /**
     * Class SM_Utility
     *
     * @since 1.0.0
     */
    class SM_Utility{
        
        /**
         * Post types
         *
         * @since 1.0.0
         */
        static private $_post_types = array();
        
        /**
         * Class constructor
         *
         * @since 1.0.0
         */
        private function __construct() {
            
            $post_types = self::_get_post_types_and_agrs();
            add_action( 'init', array( __CLASS__, 'register_post_types' ) );
            add_action( 'init', array( __CLASS__, 'register_taxonomies' ) );
            add_action( 'add_meta_boxes', array( __CLASS__, 'support_meta_boxes' ) );
            
            add_action( 'admin_menu', array( __CLASS__, 'create_settings_page' ) );
            add_action( 'admin_menu', array( __CLASS__, 'create_log_submenu_page' ) );
            
        }
        
        /**
         * Create singleton instance
         *
         * @since 1.0.0
         */
        static public function get_instance() {
            static $Inst = null;
            if( $Inst == null ) {
                $Inst = new self();
            }
            
            return $Inst;
        }
        
        /**
         * Returns array of post types and args
         *
         * @since 1.0.0
         */
        static private function _get_post_types_and_agrs() {
            self::$_post_types = array(
                                    SM_Config::SM_TICKET_POST_TYPE         => SM_Ticket_CPT::get_post_type_args(),
                                    SM_Config::SM_REPLY_POST_TYPE           => SM_Reply_CPT::get_post_type_args()
                                );
            
            return apply_filters(
                            'sm_list_post_types',
                            self::$_post_types
                    );
        }
        
        /**
         * Returns array of post types and args
         *
         * @since 1.0.0
         */
        static private function _get_tax_and_agrs() {
            self::$_post_types = array(
                                    SM_Config::SM_TICKET_TAXONOMY         => array(
                                                                                SM_Config::SM_TICKET_POST_TYPE,
                                                                                SM_Ticket_CPT::get_tax_args()
                                                                            )
                                );
            
            return apply_filters(
                            'sm_list_post_types',
                            self::$_post_types
                    );
        }
        
        /**
         * Register post types
         *
         * @since 1.0.0
         */
        static public function register_post_types() {
            
            $post_types = self::_get_post_types_and_agrs();
            foreach( $post_types as $post_type => $args ) {
                register_post_type( $post_type, $args );
            }
            
        }
        
        /**
         * Register Taxonomies
         *
         * @since 1.0.0
         */
        static public function register_taxonomies() {
            
            $taxes = self::_get_tax_and_agrs();
            foreach( $taxes as $tax => $args ) {
                register_taxonomy( $tax, array( $args[0] ), $args[1] );
            }
            
        }
        
        /**
         * Support meta box
         *
         * @since 1.0.0
         */
        static public function support_meta_boxes() {
            $SM_Ticket_CPT = SM_Loader::Load( 'SM_Ticket_CPT' );
            add_meta_box( 
                'ticket-meta-box',
                __( 'Ticket Inormation' ),
                array( $SM_Ticket_CPT, 'render_ticket_meta' ),
                SM_Config::SM_TICKET_POST_TYPE,
                'side',
                'high'
            );
        }
        
        /**
         * Settings page
         */
        static public function create_settings_page() {
            $SM_Support_Settings_Page = SM_Loader::Create( 'SM_Support_Settings_Page' );
            add_menu_page(
                        __( 'Support Settings', 'sm' ),
                        __( 'Support Settings', 'sm' ),
                        'manage_options',
                        'support-settings',
                        array( $SM_Support_Settings_Page, 'to_html' ),
                        '',
                        61
                    );
        }
        
        /**
         * Create log page
         */
        static public function create_log_submenu_page() {
            $SM_Support_Settings_Page = SM_Loader::Create( 'SM_Support_Settings_Page' );
            add_submenu_page(
                        'support-settings',
                        __( 'Logs', 'sm' ),
                        __( 'Logs', 'sm' ),
                        'manage_options',
                        'support-logs',
                        array( $SM_Support_Settings_Page, 'log_page' )
                    );
        }
        
        /**
         * Get all pages
         */
        static public function get_pages() {
            
            $pages = get_pages();
            return apply_filters(
                        'sm_get_all_pages',
                        $pages
                    );
            
        }
        
    }
}