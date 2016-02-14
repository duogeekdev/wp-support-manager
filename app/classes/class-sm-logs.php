<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Logs' ) ) {

    class SM_Logs {
            
        // declare log file and file pointer as private properties
        private $log_file, $fp;
        
        public function __construct( $path = '' ) {
            if( $path == '' ) {
                if( defined( 'SM_LOG_FILE_PATH' ) && SM_LOG_FILE_PATH ) {
                    $this->log_file = SM_LOG_FILE_PATH;
                }else{
                    $this->log_file = SM_PLUGIN_DIR . 'sm-error.log';
                }
                
            }else{
                $this->log_file = $path;
            }
        }
        
        // write message to the log file
        public function log_write( $message, $server_log = false, $script_name = false ) {
            // if file pointer doesn't exist, then open log file
            if( ! is_resource( $this->fp ) ) {
                $this->_log_open();
            }
            
            // define script name
            if( $script_name ) {
                $script_name = '('. pathinfo( $_SERVER['PHP_SELF'], PATHINFO_FILENAME ) . ') ';
            }
            // define current time and suppress E_WARNING if using the system TZ settings
            // (don't forget to set the INI setting date.timezone)
            $time = @date_i18n( '<b>[' . get_option( 'date_format' ) . ' ' . get_option( 'time_format' ) . ']</b>' );
            // write current time, script name and message to the log file
            fwrite( $this->fp, "$time $message" . PHP_EOL );
            
            // Add log to wp error log
            if( $server_log ) {
                $this->_write_log( $message );
            }
            
            $this->log_close();
        }
        
        // close log file (it's always a good idea to close a file when you're done with it)
        public function log_close() {
            fclose( $this->fp );
        }
        
        // open log file (private method)
        private function _log_open() {
            // define log file from lfile method or use previously set default
            $lfile = $this->log_file ? $this->log_file : $log_file_default;
            // open log file for writing only and place file pointer at the end of the file
            // (if the file does not exist, try to create it)
            $this->fp = fopen( $lfile, 'a' ) or exit( "Can't open $lfile!" );
        }
        
        
        private function _write_log( $log )  {
            if ( true === WP_DEBUG ) {
                if ( is_array( $log ) || is_object( $log ) ) {
                    error_log( print_r( $log, true ) );
                } else {
                    error_log( $log );
                }
            }
        }
        
        public function write_log_file() {
            $file = new SplFileObject( $this->log_file );
            if ( $file ) {
                while ( ! $file->eof() ) {
                     echo '$ &nbsp;&nbsp; ' . $file->fgets() . '<br>';
                }
            
                $file = null;
            } else {
                // error opening the file.
                echo 'File can\'t be read!';
            } 
        }
        
        public function delete_logs() {
            $file = fopen( $this->log_file, 'a' );
            ftruncate($file, 0);
        }
        
    }

}