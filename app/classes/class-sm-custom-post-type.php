<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Custom_Post_Type' ) ) {
    
    /**
     * Config class for SM
     *
     * @since 1.0.0
     */
    class SM_Custom_Post_Type{
        
        const STATUS_OPEN = 'open';
        const STATUS_PROCESSING = 'procesing';
        const STATUS_RESOLVED = 'resolved';
        const STATUS_CLOSED = 'closed';
        
        /**
         * Post type slug
         *
         * @since 1.0.0
         */
        protected static $_POST_TYPE = 'dsd';
        
        /**
         * ID of this post type
         *
         * @since 1.0.0
         */
        public $ID;
        
        /**
         * Slug of the post
         *
         * @since 1.0.0
         */
        public $post_name;
        
        /**
         * Title of the post
         *
         * @since 1.0.0
         */
        public $post_title;
        
        /**
         * Content of the post
         *
         * @since 1.0.0
         */
        public $post_content;
        
        /**
         * Excerpt of the post
         *
         * @since 1.0.0
         */
        public $post_excerpt;
        
        /**
         * Author of the Post
         *
         * @since 1.0.0
         */
        public $post_author;
        
        /**
         * Modified date
         *
         * @since 1.0.0
         */
        public $post_modified;
        
        /**
         * Post Status
         *
         * @since 1.0.0
         */
        public $post_status ='publish' ;
        
        /**
         * Status
         *
         * @since 1.0.0
         */
        public $status = self::STATUS_OPEN;
        
        /**
         * Is internal?
         *
         * @since 1.0.0
         */
        public $internal = false;
        
        /**
         * Custom data
         *
         * @since 1.0.0
         */
        public $custom_data = array();
        
        /**
         * Fields to be ignored from meta
         */
        public $_ignore_fields = array();
        
        /**
         * Contructor
         *
         * @since 1.0.0
         */
        public function __construct( $id = null ) {
            
            if( $id != null ) {
                $this->ID = $id;
            }
            
            $this->_ignore_fields = array(
                                        'post_title',
                                        'post_content'
                                    );
            
            //$this->prepare_meta();
            
        }
        
        /**
	 * Called before saving data.
	 *
	 * @since  1.0.0
	 */
	public function before_save() {
	    do_action( 'sm_cpt_before_save_' . $this->get_post_type(), $this );
	}
        
        /**
	 * Called after saving data.
	 *
	 * @since  1.0.0
	 */
	public function after_save() {
	    do_action( 'sm_cpt_after_save_' . $this->get_post_type(), $this );
	}
        
        /**
	 * Called before delete data.
	 *
	 * @since  1.0.0
	 */
	public function before_delete() {
	    do_action( 'sm_cpt_before_delete_' . $this->get_post_type(), $this );
	}
        
        /**
	 * Called after delete data.
	 *
	 * @since  1.0.0
	 */
	public function after_delete() {
	    do_action( 'sm_cpt_after_delete_' . $this->get_post_type(), $this );
	}
        
        /**
         * Save the post
         *
         * @since 1.0.0
         */
        public function save() {
            
            SM_Helper::select_blog();
            $this->before_save();
            
            $this->post_modified = current_time( 'mysql' );
            $class = get_class( $this );
            
            $post = array(
                'post_author' => $this->post_author,
                'post_content' => $this->post_content,
                'post_excerpt' => $this->post_excerpt,
                'post_name' => sanitize_text_field( $this->slug ),
                'post_status' => $this->post_status,
                'post_title' => sanitize_title( ! empty( $this->post_title ) ? $this->post_title : $this->post_title ),
                'post_type' => $this->get_post_type(),
                'post_modified' => $this->post_modified,
            );
            
            $post = apply_filters( 'sm_save_post_' . $this->get_post_type(), $post );
            
            if ( empty( $this->ID ) ) {
                $this->ID = wp_insert_post( $post );
            } else {
                $post[ 'ID' ] = $this->ID;
                wp_update_post( $post );
            }
            self::save_meta_data();
            
            wp_cache_set( $this->ID, $this, $class );
            
            $this->after_save();
            SM_Helper::revert_blog();
            
            global $wp_current_filter;
            if ( ! in_array( 'sm_saved_' . $class, $wp_current_filter ) ) {
                    /**
                     * Action triggered after a custom post type was saved to database.
                     *
                     * @since  1.0.0
                     */
                    do_action( 'sm_saved_' . $class, $this );
            }
            
        }
        
        /**
         * Get post type
         *
         * @since 1.0.0
         */
        static public function get_post_type() {
            return $this->_POST_TYPE;
        }
        
        /**
         * Prepare meta
         *
         * @since 1.0.0
         */
        static public function save_meta_data() {
            
            $data = array();
            $fields = get_class_vars( get_class( $model ) );
            
            $fields = apply_filters( 'sm_save_post_meta_' . $this->get_post_type(), $fields );
            
            foreach( $fields as $meta => $val ) {
                if( ! in_array( $meta, $this->_ignore_fields ) ) {
                    update_post_meta( $this->ID, $meta, $val );
                }
            }
            
        }
        
        /**
         * Delete a post
         *
         * @since 1.0.0
         */
        public function delete() {
            
            SM_Helper::select_blog();
            $this->before_delete();
            
            $res = false;
            if( ! empty( $this->ID ) ) {
                $res = ( false !== wp_delete_post( $this->ID, true ) );
            }
            
            $this->after_delete();
            SM_Helper::revert_blog();
            
            return $res;
            
        }
        
        /**
         * Remove meta fields for a post
         *
         * @since 1.0.0
         */
        private function clean_metadata( $data_to_keep = array() ) {
            
            global $wpdb;

            $sql = "SELECT meta_key FROM {$wpdb->postmeta} WHERE post_id = %s;";
            $sql = $wpdb->prepare( $sql, $this->ID );
            $all_fields = $wpdb->get_col( $sql );

            $remove = array_diff( $all_fields, $data_to_keep );

            $remove = apply_filters(
                'sm_clean_metadata',
                $remove,
                $all_fields,
                $this->ID,
                $data_to_keep
            );

            foreach ( $remove as $key ) {
                delete_post_meta( $this->id, $key );
            }
            
	}
        
        
        
    }
    
}