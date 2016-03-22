<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Reply_Manager' ) ) :
    
/**
 * Model class for SM_Reply_Manager
 *
 * @since 1.0.0
 */
class SM_Reply_Manager{
	
	 const AJAX_ACTION = "sm_add_new_reply";
	
	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
	
		add_action( 'wp_ajax_' . self::AJAX_ACTION, array( &$this, 'save_new' ) );
				  
	}

	/**
	 * Handle ajax request, Create new reply and return ajax response
	 */
	
    public function save_new(){
		   $response = array();
		//write_log($_REQUEST);
		if( ! SM_Helper::check_nonce() ) {
		
				$response['status'] = 'error';
				$response['msg'] = __( 'You don\'t have permission to save', 'sm' );
				
		}else{
			 
			 
			 if( !isset( $_REQUEST['reply_content'] ) || "" == trim( $_REQUEST['reply_content'] )  ){
				$error = true;
				$response['status'] = 'error';
				$response['msg' ] =  __( 'Reply content required', 'sm' );
			 }
							  
			 if( ! $error ){
				
				 
				  
				$reply = SM_Loader::Load( 'SM_Reply_CPT' );
								
				$reply->post_content = trim( $_REQUEST['replyt_content'] );
				if( isset( $_REQUEST['reply_private'] ) && $_REQUEST['reply_private'] == "yes" ){
					$reply->is_private = true;
				}
				
				$reply->save();
				
				$response['status'] = 'success';
				$response['msg' ] =  __( 'New reply has been created successfully', 'sm' );
				$response['reply_id'] = intval($reply->ID);
		  
				$response['redir'] = get_permalink( $reply->ID );
			}
		}
	   echo json_encode($response); exit();	
		
	}//end func
	
	
}//end class
	
    
endif;