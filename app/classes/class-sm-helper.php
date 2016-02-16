<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Helper' ) ) {
    
    /**
     * Config class for SM
     *
     * @since 1.0.0
     */
    class SM_Helper{
        
        /**
         * Select current blog
         *
         * @since 1.0.0
         */
        static public function select_blog( $site_id = null ) {
            
            if( is_multisite() ) {
                if( null === $site_id ) {
                    if ( defined( 'BLOG_ID_CURRENT_SITE' ) ) {
                        $site_id = BLOG_ID_CURRENT_SITE;
                    }else{
                        $site_id = 1;
                    }
                }
                
                switch_to_blog( $site_id );
            }
            
        }
        
        static public function revert_blog() {
            
            if( is_multisite() ) {
                restore_current_blog();
            }
            
        }
        
        /**
     * Checks if the provided value evaluates to a boolean TRUE.
     *
     * Following values are considered true:
     *  - Boolean: true
     *  - Number: anything except 0
     *  - Strings: true, yes, on (case insensitive)
     *
     * @since  1.0.0
     *
     * @param  mixed $value A value that will be evaluated as a boolean.
     * @return bool True if the specified $value evaluated to TRUE.
     */
    static public function is_true( $value ) {
            if ( false === $value || null === $value || '' === $value ) {
                return false;
            } elseif ( true === $value ) {
                return true;
            } elseif ( is_numeric( $value ) ) {
                $value = intval( $value );
                return $value != 0;
            } elseif ( is_string( $value ) ) {
                $value = strtolower( trim( $value ) );
                return in_array(
                    $value,
                    array( 'true', 'yes', 'on', '1' )
                );
            }
            return false;
    }

    /**
     * Opposite of the is_true() function.
     *
     * @since  1.0.0
     * @param  mixed $value A value that will be evaluated as a boolean
     * @return bool True if the speciefied value evals as FALSE
     */
    static public function is_false( $value ) {
        return ! self::is_true( $value );
    }
        
        /**
         * Dump anything
         *
         * @since 1.0.0
         */
        static public function dump( $var, $echo = true ) {
            ob_start();
            echo "<pre>";
            print_r($var);
            echo "</pre>";
            $dump = ob_get_contents();
            ob_end_clean();
            
            if( $echo ) {
                echo $dump;
            }else{
                return $dump;
            }
        }
        
        /**
         * Create nonce
         *
         * @since 1.0.0
         */
        static public function get_nonce( $action = null ) {
            
            if( $action == null ) {
                $action = SM_Settings::SETTINGS_NONCE;
            }
            
            return wp_create_nonce( $action );
            
        }
        
        /**
         * Check default nonce
         *
         * @since 1.0.0
         */
        static public function check_nonce( $action = null ) {
            
            if( $action == null ) {
                $action = SM_Settings::SETTINGS_NONCE;
            }
            
            $nonce = $_REQUEST['_wpnonce'];
            
            if ( ! wp_verify_nonce( $nonce, $action ) ) {
                return false;
            }
            
            return true;
            
        }
        
        /**
         * Admin notices
         *
         * @since 1.0.0
         */
        static public function admin_notices() {
            
            if ( ! isset( $_REQUEST['sm_msg'] ) ) {
                return;
            }
            
            $msg = urldecode( base64_decode( $_REQUEST['sm_msg'] ) );
            $class = isset( $_REQUEST['sm_notice_class'] ) ? $_REQUEST['sm_notice_class'] : 'updated';
            
            if ( $msg ) {
                ?>
                <div id="message" class="{$class} notice notice-success is-dismissible">
                    <p><?php echo wp_kses_post( $msg ); ?></p>
                    <button type="button" class="notice-dismiss"></button>
                </div>
                <?php
            }
            
        }
         
        /**
         * Find correct template
         */
        static public function get_template( $file, $path = null ) {
            
            if( $path == null ) {
                $path = SM_FILES_DIR . '/includes/views/';
            }
            
            $parent_theme_file = get_template_directory() . '/support-zone/' . $file;
            $child_theme_file = get_stylesheet_directory() . '/support-zone/' . $file;
            $plg_theme_file = $path . $file;
            
            if( file_exists( $parent_theme_file ) ) {
                require_once $parent_theme_file;
            }elseif( file_exists( $child_theme_file ) ) {
                require_once $child_theme_file;
            }elseif( file_exists( $plg_theme_file ) ) {
                require_once $plg_theme_file;
            }else{
                printf(
                    __( 'The file <b>%s</b> is missing.', 'sm' ),
                    $file
                );
            }
            
        }
        
        static public function form_overlay(){
            ?>
            <div class="sm_form_overaly"><img src="<?php echo SM_FILES_URI . '/assets/images/loadingAnimation.gif' ?>"></div>
            <?php 
        }
        
    }
    
}