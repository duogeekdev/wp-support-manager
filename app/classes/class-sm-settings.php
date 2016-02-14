<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Settings' ) ) {
    /**
     * Class SM_Utility
     *
     * @since 1.0.0
     */
    class SM_Settings{
        
        const SETTINGS_AJAX_ACTION = 'sm-settings-save';
        const SETTINGS_LOG_DELETE_ACTION = 'sm_delete_log';
        const SETTINGS_NONCE = 'sm_support_nonce';
        
        private $log;
        
        /**
         * Class constructor
         *
         * @since 1.0.0
         */
        private function __construct() {
            
            add_action( 'wp_ajax_' . self::SETTINGS_AJAX_ACTION, array( &$this, 'sm_settings_save' ) );
            add_action( 'admin_action_' . self::SETTINGS_LOG_DELETE_ACTION, array( &$this, 'sm_delete_log' ) );
            add_action( 'admin_notices', array( 'SM_Helper', 'admin_notices' ) );
            
            $this->log = new SM_Logs();
            
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
         * Settings save
         */
        public function sm_settings_save() {
            
            if( ! SM_Helper::check_nonce() ) {
                $response = array(
                    'what'      => 'settings_action',
                    'action'    => 'saved',
                    'data'      => __( 'You don\'t have permission to save', 'sm' )
                );
            }else{
                $options = SM_Loader::Create( 'SM_Options' );
                $options->set_option( $_POST['name'], $_POST['value'] );
                $options->update();
                
                $current_user = SM_Loader::Load( 'SM_User', get_current_user_id() );
                $this->log->log_write( 'Settings updated by ' . $current_user->user->user_login );
                
                $response = array(
                    'what'      => 'settings_action',
                    'action'    => 'saved',
                    'data'      => 'done'
                );
            }
            
            $xmlResponse = new WP_Ajax_Response( $response );
            $xmlResponse->send();
            
        }
        
        /**
         * Delete Log
         */
        public function sm_delete_log() {
            
            if( ! SM_Helper::check_nonce() ) {
                wp_die( __( 'Sorry, you don\'t have correct permission to delete log.', 'sm' ) );
            }
            
            $this->log->delete_logs();
            $this->log->log_write( 'Logs deleted by ' . SM_User::get_current_user() );
            
            wp_redirect(
                        add_query_arg(
                            array(
                                'sm_msg' => base64_encode( urlencode( __( 'Logs deleted successfully.', 'sm' ) ) )
                            ),
                            wp_get_referer()
                        )
                    );
            exit;
            
        }
        
        
        
    }
}