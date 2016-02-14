<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Reply_CPT' ) ) {
    /**
     * Class SM_Support_CPT
     *
     * @since 1.0.0
     */
    class SM_Reply_CPT extends SM_Custom_Post_Type{
        
        /**
         * Post type slug
         *
         * @since 1.0.0
         */
        protected static $_POST_TYPE = SM_Config::SM_REPLY_POST_TYPE;
        
        /**
         * Class Constructor
         */
        public function __construct( $id = null ) {
            parent::__construct( $id );
        }
        
        /**
         * Get post type
         *
         * @since 1.0.0
         */
        static public function get_post_type() {
            return self::$_POST_TYPE;
        }
        
        /**
         * Get post type args
         *
         * @since 1.0.0
         */
        static public function get_post_type_args() {
            
            $labels = array(
                'name'               => _x( 'Replies', 'post type general name', 'sm' ),
                'singular_name'      => _x( 'Reply', 'post type singular name', 'sm' ),
                'menu_name'          => _x( 'Replies', 'admin menu', 'sm' ),
                'name_admin_bar'     => _x( 'Reply', 'add new on admin bar', 'sm' ),
                'add_new'            => _x( 'Add New', 'topic', 'sm' ),
                'add_new_item'       => __( 'Add Reply', 'sm' ),
                'new_item'           => __( 'New Reply', 'sm' ),
                'edit_item'          => __( 'Edit Reply', 'sm' ),
                'view_item'          => __( 'View Reply', 'sm' ),
                'all_items'          => __( 'All Replies', 'sm' ),
                'search_items'       => __( 'Search Replies', 'sm' ),
                'parent_item_colon'  => __( 'Parent Reply:', 'sm' ),
                'not_found'          => __( 'No Reply found.', 'sm' ),
                'not_found_in_trash' => __( 'No Reply found in Trash.', 'sm' )
            );
    
            $args = array(
                'labels'             => $labels,
                'description'        => __( 'Description.', 'sm' ),
                'public'             => true,
                'publicly_queryable' => true,
                'show_ui'            => true,
                'show_in_menu'       => true,
                'query_var'          => true,
                'rewrite'            => array( 'slug' => self::get_post_type() ),
                'capability_type'    => 'post',
                'has_archive'        => true,
                'hierarchical'       => false,
                'menu_position'      => null,
                'supports'           => array( 'editor', 'author' )
            );
    
            $args = apply_filters(
                        'sm_reply_cpt_args',
                        $args
                    );
            
            return $args;

        }
        
    }
}