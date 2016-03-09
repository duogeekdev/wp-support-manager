<?php
/**
Plugin Name: WordPress Support Manager
Plugin URI:  https://wp-support-manager.com/
Version:     1.0.0-beta-1
Description: The most powerful, easy to use and flexible support management plugin for WordPress sites available.
Author:      duogeek, oneTarek
Author URI:  http://wp-support-manager.com/
License:     GNU General Public License (Version 2 - GPLv2)
Text Domain: sm
*/

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

define( 'SM_VERSION', '1.0.0' );
if( ! defined( 'SM_PLUGIN_DIR' ) ) define( 'SM_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
if( ! defined( 'SM_FILES_DIR' ) ) define( 'SM_FILES_DIR', SM_PLUGIN_DIR . 'app' );
if( ! defined( 'SM_PLUGIN_URI' ) ) define( 'SM_PLUGIN_URI', plugins_url( '', __FILE__ ) );
if( ! defined( 'SM_FILES_URI' ) ) define( 'SM_FILES_URI', SM_PLUGIN_URI . '/app' );
if( ! defined( 'SM_TEMPLATE_DIR' ) ) define( 'SM_TEMPLATE_DIR', SM_FILES_DIR . '/templates' );

require_once SM_FILES_DIR . '/loader.php';

if( ! class_exists( 'SM_Plugin' ) ) {
    
    /**
     * Class SM_Plugin
     *
     * @since 1.0.0
     */
    class SM_Plugin{
        
        /**
         * Version
         *
         * @since 1.0.0
         */
        public $version;
        
        /**
         * Class constructor
         *
         * @since 1.0.0
         */
        private function __construct() {
            
            $this->version = SM_VERSION;
            SM_Loader::Create( 'SM_Utility' );
            SM_Loader::Create( 'SM_Settings' );
            SM_Loader::Create( 'SM_Settings_Parent' );
            SM_Loader::Create( 'SM_ShortCodes' );
            
            add_action( 'wp_enqueue_scripts', array( &$this, 'register_scripts_front_end' ) );
            add_action( 'admin_enqueue_scripts', array( &$this, 'register_scripts_admin_end' ) );
            //add_filter( 'template_include', array( $this, 'ticket_single_template' ) );
			add_filter( 'single_template', array( $this, 'ticket_single_template' ) );
        }
		
		/**
		 * Load Template file for a single ticket.
		 */
		public function ticket_single_template( $template )
		{
				$object = get_queried_object();
				$ticket_post_type = SM_Config::SM_TICKET_POST_TYPE;
				if ( ! empty( $object->post_type ) && $object->post_type == $ticket_post_type ){
					 if( ! strpos( $template , "single-".$ticket_post_type.".php" ) ){
					 $template = SM_PLUGIN_DIR . '/app/includes/templates/ticket-single-page.php';
					 }
				}
			
			return $template;
		}		
		
        
        /**
         * Create singleton class instance
         *
         * @since 1.0.0
         *
         * @return  $Inst   Object   Instance of SM_Plugin
         */
        public static function get_instance() {
            static $Inst = null;
            if( ! $Inst instanceof self ) {
                $Inst = new self();
            }
            
            return $Inst;
        }
        
        /**
         * Register scripts for front end
         *
         * @since 1.0.0
         */
        public function register_scripts_front_end() {
            
            $suffix = '';
            if( !(
               defined( 'WP_DEBUG' ) && WP_DEBUG &&
               defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG
            ) ){
                $suffix = '.min';
            }
            
            wp_register_style( 'sm-public-css', SM_FILES_URI . "/assets/css/sm-public{$suffix}.css" );
            //wp_register_style( 'sm-public', SM_FILES_URI . "/assets/css/sm-public{$suffix}.css" );
            //wp_register_style( 'sm-public', SM_FILES_URI . "/assets/css/sm-public{$suffix}.css" );
            
            wp_register_script( 'sm-public-js', SM_FILES_URI . "/assets/js/sm-public{$suffix}.js", array( 'jquery' ), $this->version );
            //wp_register_script( $handle, $src, $deps, $ver, $in_footer );
            //wp_register_script( $handle, $src, $deps, $ver, $in_footer );
            
            wp_enqueue_style( 'sm-public-css' );
            wp_enqueue_script( 'sm-public-js' );
            
            wp_localize_script('jquery',"SupportManager", $this->js_vars() ); 
            
        }
        
        /**
         * Register scripts for back end
         *
         * @since 1.0.0
         */
        public function register_scripts_admin_end() {
            
            $suffix = '';
            if( !(
               defined( 'WP_DEBUG' ) && WP_DEBUG &&
               defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG
            ) ){
                $suffix = '.min';
            }
            
            wp_register_style( 'sm-select2', SM_FILES_URI . "/assets/css/vendor/select2{$suffix}.css" );
            wp_register_style( 'sm-popup', SM_FILES_URI . "/assets/css/vendor/sm-popup.css" );
            wp_register_style( 'sm-admin-css', SM_FILES_URI . "/assets/css/sm-admin{$suffix}.css" );
            //wp_register_style( 'sm-public', SM_FILES_URI . "/assets/css/sm-public{$suffix}.css" );
            //wp_register_style( 'sm-public', SM_FILES_URI . "/assets/css/sm-public{$suffix}.css" );
            
            wp_register_script( 'sm-select2-js', SM_FILES_URI . "/assets/js/vendor/select2.full{$suffix}.js", array( 'jquery' ), $this->version );
            wp_register_script( 'sm-popup-js', SM_FILES_URI . "/assets/js/vendor/sm-popup.js", array( 'jquery' ), $this->version );
            wp_register_script( 'sm-admin-js', SM_FILES_URI . "/assets/js/sm-admin{$suffix}.js", array( 'jquery', 'wp-ajax-response' ), $this->version );
            //wp_register_script( $handle, $src, $deps, $ver, $in_footer );
            //wp_register_script( $handle, $src, $deps, $ver, $in_footer );
            
            wp_enqueue_style( 'sm-select2' );
            wp_enqueue_style( 'sm-popup' );
            wp_enqueue_style( 'sm-admin-css' );
            
            wp_enqueue_script( 'sm-select2-js' );
            wp_enqueue_script( 'sm-popup-js' );
            wp_enqueue_script( 'sm-admin-js' );   
            
            wp_localize_script('jquery',"SupportManager", $this->js_vars() );         
            
        }
              
        /**
         * Return array of some dynamic value those are used in JavaScript
         */
         
         public function js_vars(){
             return array("ajaxurl"=>admin_url("admin-ajax.php"),"assets"=>SM_FILES_URI."/assets");
         }
         
        
    }
    
    SM_Loader::Create( 'SM_Plugin' );
    
    //SM_Loader::Load( 'SM_Ticket_CPT', 2468 );
    
    
    
    
    
    
    //$y = SM_Loader::Load( 'SM_Ticket_CPT' );
    //$y = new SM_Reply_CPT();
    
    
    
}