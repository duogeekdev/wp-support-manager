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
        
        /**
         *Dropdown HTML <select> for post terms
         */
        static public function terms_dropdown( $taxonomy , $args = array() ){
                
                $args = wp_parse_args( $args, array(
                        'show_option_all'    => __( 'Select a category', 'sm' ),
                        'show_option_none'   => '',
                        'option_none_value'  => '-1',
                        'orderby'            => 'ID', 
                        'order'              => 'ASC',
                        'show_count'         => 0,
                        'hide_empty'         => 0, 
                        'child_of'           => 0,
                        'exclude'            => '',
                        'echo'               => 1,
                        'selected'           => 0,
                        'hierarchical'       => 0, 
                        'name'               => 'cat',
                        'id'                 => '',
                        'class'              => 'sm_select',
                        'depth'              => 0,
                        'tab_index'          => 0,
                        'taxonomy'           => $taxonomy,
                        'hide_if_empty'      => false,
                        'value_field'         => 'term_id'    
                    )
                );
            wp_dropdown_categories( $args );
        }
        
        /**
         * Dropdown creator
         *
         * @since 1.0.0
         */
        static public function get_dropdown( $data = array(), $name = 'form_select' ) {
            $html = '<select name="' . $name . '" id="' . $name . '">';
            foreach( $data as $key => $val ) {
                $html .= '<option value="' . $key . '">' . $val . '</option>';
            }
            $html .= '</select>';
            
            return apply_filters(
                'sm_helper_get_dropdown',
                $html,
                $data,
                $name
            );
        }
        
		public static function get_options(){		
			$options = SM_Loader::Create( 'SM_Options' )->get_options();
			return $options
		}
		
		
		public static function get_template_path(){
			static $path = "";
			if( $path != "" ){ return $path;}
			$path = apply_filters("sm_template_path", $path);
			if( $path != "" ){ return $path; }

			//select active template
			$opt = self::get_options();
			$templates = self::get_all_templates();
			$active_template = "default";
			if( isset( $opt['active_template'] ) && $opt['active_template'] !="" )
			{
				if( isset( $templates[ $opt['active_template'] ] ) )
				{
				$active_template = $opt['active_template'];
				}
				
			}
			
			$template = $templates[ $active_template ] ;
			$path = $template['path'];	
				
			return $path;	
			
		}
				
		
		public static function get_active_template(){
		
		
		}
		
		
    }//end class
    
}