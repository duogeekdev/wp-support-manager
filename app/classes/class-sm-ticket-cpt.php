<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Ticket_CPT' ) ) {
    /**
     * Class SM_Ticket_CPT
     *
     * @since 1.0.0
     */
    class SM_Ticket_CPT extends SM_Custom_Post_Type{
        
        /**
         * Post type slug
         *
         * @since 1.0.0
         */
        protected static $_POST_TYPE = SM_Config::SM_TICKET_POST_TYPE;
        
        /**
         * Ticket Status
         *
         * @since 1.0.0
         */
        public $status = SM_Config::SM_TICKET_STATUS_ACTIVE;
        
        /**
         * Internal status
         *
         * @since 1.0.0
         */
        public $internal = false;
        
        /**
         * Priority status
         *
         * @since 1.0.0
         */
        public $priority = false;
        
        /**
         * Class Constructor
         *
         * @since 1.0.0
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
                'name'               => _x( 'Tickets', 'post type general name', 'sm' ),
                'singular_name'      => _x( 'Ticket', 'post type singular name', 'sm' ),
                'menu_name'          => _x( 'Tickets', 'admin menu', 'sm' ),
                'name_admin_bar'     => _x( 'Ticket', 'add new on admin bar', 'sm' ),
                'add_new'            => _x( 'Add New', 'topic', 'sm' ),
                'add_new_item'       => __( 'Add Ticket', 'sm' ),
                'new_item'           => __( 'New Ticket', 'sm' ),
                'edit_item'          => __( 'Edit Ticket', 'sm' ),
                'view_item'          => __( 'View Ticket', 'sm' ),
                'all_items'          => __( 'All Ticket', 'sm' ),
                'search_items'       => __( 'Search Tickets', 'sm' ),
                'parent_item_colon'  => __( 'Parent Tickets:', 'sm' ),
                'not_found'          => __( 'No topics found.', 'sm' ),
                'not_found_in_trash' => __( 'No topics found in Trash.', 'sm' )
            );
    
            $args = array(
                'labels'             => $labels,
                'description'        => __( 'Description.', 'sm' ),
                'public'             => true,
                'publicly_queryable' => true,
                'show_ui'            => true,
                'show_in_menu'       => true,
                'query_var'          => true,
                'rewrite'            => array( 'slug' => 'ticket' ),
                'capability_type'    => 'post',
                'has_archive'        => true,
                'hierarchical'       => false,
                'menu_position'      => null,
                'supports'           => array( 'title', 'editor', 'author' )
            );
    
            $args = apply_filters(
                        'sm_ticket_cpt_args',
                        $args
                    );
            
            return $args;

        }
        
        /**
         * Get support taxonomy args
         *
         * @since 1.0.0
         */
        static public function get_tax_args() {
            
            $labels = array(
        'name'              => _x( 'Categories', 'taxonomy general name' ),
        'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Categories' ),
        'all_items'         => __( 'All Categories' ),
        'parent_item'       => __( 'Parent Category' ),
        'parent_item_colon' => __( 'Parent Category:' ),
        'edit_item'         => __( 'Edit Category' ),
        'update_item'       => __( 'Update Category' ),
        'add_new_item'      => __( 'Add New Category' ),
        'new_item_name'     => __( 'New Category Name' ),
        'menu_name'         => __( 'Ticket Category' ),
            );
    
            $args = array(
                'hierarchical'      => true,
                'labels'            => $labels,
                'show_ui'           => true,
                'show_admin_column' => true,
                'query_var'         => true,
                'rewrite'           => array( 'slug' => SM_Config::SM_TICKET_TAXONOMY ),
            );
            
            $args = apply_filters(
                        'sm_support_tax_args',
                        $args
                    );
            
            return $args;
            
        }
        
        /**
         * Get status list
         *
         * @since 1.0.0
         */
        static public function get_status_list() {
            
            return apply_filters(
                        'sm_ticket_status_list',
                        array(
                            SM_Config::SM_TICKET_STATUS_ACTIVE,
                            SM_Config::SM_TICKET_STATUS_INACTIVE,
                            SM_Config::SM_TICKET_STATUS_CLOSED,
                            SM_Config::SM_TICKET_STATUS_RESOLVED
                        )
                    );
            
        }
        
        /**
         * Get priority list
         *
         * @since 1.0.0
         */
        static public function get_priority_list() {
            
            return apply_filters(
                        'sm_ticket_priority_list',
                        array(
                            SM_Config::SM_TICKET_PRIORITY_LOW,
                            SM_Config::SM_TICKET_PRIORITY_MEDIUM,
                            SM_Config::SM_TICKET_PRIORITY_HIGH,
                            SM_Config::SM_TICKET_PRIORITY_CRITICAL
                        )
                    );
            
        }
        
        /**
         * Get priority dropdown
         *
         * @since 1.0.0
         */
        static public function get_priority_dropdown() {
            
            $data = array();
            $priorities = self::get_priority_list();
            foreach( $priorities as $priority ) {
                $data[$priority] = ucfirst( $priority );
            }
            
            $data = apply_filters(
                'sm_ticket_priority_dropdown',
                $data
            );
            
            return SM_Helper::get_dropdown( $data, 'ticket_priority' );
            
        }
        
        /**
         * Render meta box
         *
         * @since 1.0.0
         */
        public function render_ticket_meta() {
            
            $statuses = self::get_status_list();
            
            wp_nonce_field( SM_Settings::SETTINGS_NONCE, '_wpnonce' );
            ?>
            <table cellpadding="5" cellspacing="5">
                <tr>
                    <td><?php _e( 'Status:', 'sm' ) ?></td>
                    <td>
                        <select name="sm_ticket_meta[status]">
                            <option value=""><?php _e( 'Set a status' , 'sm' ); ?></option>
                            <?php foreach( $statuses as $status ) { ?>
                            <option <?php echo $this->status == $status ? 'selected' : '' ?> value="<?php echo $status ?>"><?php echo ucfirst( $status ) ?></option>
                            <?php } ?>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><?php _e( 'Internal', 'sm' ) ?></td>
                    <td>
                        <label>
                            <input <?php echo $this->internal ? 'checked' : '' ?> type="radio" name="sm_ticket_meta[internal]" value="true"> <?php _e( 'Yes', 'sm' ) ?>
                        </label>
                        <label>
                            <input <?php echo ! $this->internal ? 'checked' : '' ?> type="radio" name="sm_ticket_meta[internal]" value="false"> <?php _e( 'No', 'sm' ) ?>
                        </label>
                    </td>
                </tr>
            </table>
            <?php
            
        }
        
        /**
         * Get post by ID
         *
         * @since 1.0.0
         */
        public function get_post() {
            $post = get_post( $this->ID );
            
            return apply_filters(
                    'sm_support_get_post',
                    $post,
                    $this
                );
        }        
        
    }//end class
}//end if