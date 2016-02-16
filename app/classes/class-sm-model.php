<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Model' ) ) {
    
    /**
     * Model class for SM
     *
     * @since 1.0.0
     */
    class SM_Model{
        
        /**
         * Constructor
         *
         * @since 1.0.0
         */
        public function __construct() {
            do_action( 'sm_model_construct', $this );
        }
        
        /**
     * Set field value, bypassing the __set validation.
     *
     * Used for loading from db.
     *
     * @since  1.0.0
     *
     * @param string $field
     * @param mixed $value
     */
    public function set_field( $field, $value ) {
            // Don't deserialize values of "private" fields.
            if ( '_' !== $field[0] ) {

                // Only set values of existing fields, don't create a new field.
                if ( property_exists( $this, $field ) ) {
                    $this->$field = $value;
                }
            }
    }
        
        /**
     * Called before saving model.
     *
     * @since  1.0.0
     */
    public function before_save() {
        do_action( 'sm_model_before_save', $this );
    }

    /**
     * Abstract method to save model data.
     *
     * @since  1.0.0
     */
    public function save() {
        throw new Exception( 'Method to be implemented in child class' );
    }
        
        /**
     * Called after saving model data.
     *
     * @since  1.0.0
     */
    public function after_save() {
        do_action( 'sm_model_after_save', $this );
    }
        
        /**
     * Get object properties.
     *
     * @since  1.0.0
     *
     * @return array of fields.
     */
    public function get_object_vars() {
        return get_object_vars( $this );
    }
        
        
        
    }
    
}