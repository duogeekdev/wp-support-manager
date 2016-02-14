<?php

if( ! function_exists( 'sm_load_classes' ) ){
    /**
     * Autoload class callback
     *
     * @since 1.0.0
     * @param Class name
     */
    function sm_load_classes( $class ){
        
        if( $class == '' ) return;
                
        $class = strtolower( str_replace( "_", "-", $class ) );
        $class_file = 'class-' . $class . '.php';
        $filepath = SM_FILES_DIR . '/classes/' . $class_file;

        // Check if class file exists
        if( file_exists( $filepath ) ){
            require_once $filepath;
        }

    }

    spl_autoload_register( 'sm_load_classes' );
}

if( ! class_exists( 'SM_Loader' ) ) {
    class SM_Loader{
        
        static private $_cached_date = array();
        
        public static function Load( $class, $id = null ) {
            
            $obj = false;
            
            if( method_exists( $class, 'get_instance' ) ) {
                /*_doing_it_wrong(
                    'SM_Loader::Load()',
                    'This class is a singleton class, needs to be called using SM_Loader::Create() method',
                    SM_VERSION
                );*/
                wp_die( 'This class - <b>' . $class . '</b> is a singleton class, needs to be called using SM_Loader::Create() method' );
            }else{
                if( $id != null ) {
                    if( isset( self::$_cached_date[ $class . '_' . $id ] ) && is_object( self::$_cached_date[ $class . '_' . $id ] ) ) {
                        return self::$_cached_date[ $class . '_' . $id ];
                    }else{
                        $obj = new $class( $id );
                        self::$_cached_date[ $class . '_' . $id ] = $obj;
                    }
                }else{
                    if( isset( self::$_cached_date[ $class ] ) && is_object( self::$_cached_date[ $class ] ) ) {
                        return self::$_cached_date[ $class ];
                    }else{
                        $obj = new $class();
                        self::$_cached_date[ $class ] = $obj;
                    }
                }
            }
            
            return $obj;
        
        }
        
        public static function Create( $class, $id = null ) {
            
            $obj = false;
            
            if( ! method_exists( $class, 'get_instance' ) ) {
                _doing_it_wrong(
                    'SM_Loader::Create()',
                    'This class needs get_instance() method to get a single instance',
                    SM_VERSION
                );
            }else{
                if( $id != null ) {
                    $obj = $class::get_instance( $id );
                }else{
                    $obj = $class::get_instance();
                }
                
            }
            
            return $obj;
        
        }
        
    }
}