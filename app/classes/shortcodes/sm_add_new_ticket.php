<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SC_sm_add_new_ticket' ) ) {
    /**
     * ShortCode class SM_all_tickets
     */
   
	class SC_sm_add_new_ticket{
	
		const AJAX_ACTION = "sm_add_new_ticket";
        
        public function __construct() {
             add_action( 'wp_ajax_' . self::AJAX_ACTION, array( &$this, 'save_new_ticket' ) );
        }
        
        public function render_shortcode() {
            
            if( ! is_user_logged_in() ) {
                return __( 'You have to login to create a ticket', 'sm' );
            }
            
            ob_start();
            SM_Helper::get_template( 'add-new-ticket.php' );
            $output = ob_get_contents();
            ob_end_clean();
            
            return $output;
            
        }
		
		/**
		 * Handle ajax request, Create new ticket and return ajax response
		 */
		
		public function save_new_ticket(){
			   $response = array();
			
			if( ! SM_Helper::check_nonce() ) {
			
                    $response['status'] = 'error';
                    $response['msg'] = __( 'You don\'t have permission to save', 'sm' );
					
            }else{
				 
				 $error = false;
				 if( !isset( $_REQUEST['ticket_title'] ) && "" != trim( $_REQUEST['ticket_title'] )  ){
				 	$error = true;
					$response['status'] = 'error';
					$response['msg' ] =  __( 'Ticket title required', 'sm' );
				 }
				 
				 if( !isset( $_REQUEST['ticket_content'] ) && "" != trim( $_REQUEST['ticket_content'] )  ){
				 	$error = true;
					$response['status'] = 'error';
					$response['msg' ] =  __( 'Ticket content required', 'sm' );
				 }
				 				 
				 if( ! $error ){
					$current_user = SM_Loader::Load( 'SM_User', get_current_user_id() );               
					
					$ticket = SM_Loader::Load( 'SM_Ticket_CPT' );
					$ticket->post_title = trim( $_REQUEST['ticket_title'] );
					$ticket->post_content = trim( $_REQUEST['ticket_content'] );
					
					$ticket->save();
					
					$response['status'] = 'success';
					$response['msg' ] =  __( 'New ticket has been created successfully', 'sm' );
					$response['ticket_id'] = intval($ticket->ID);
			  
					if( isset($_REQUEST['redir']) ) $response['redir']=$_REQUEST['redir'];
				}
            }
           echo json_encode($response); exit();
		   
		}//end func
        
    }//end calss
}