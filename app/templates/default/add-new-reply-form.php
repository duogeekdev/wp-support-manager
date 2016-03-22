<?php global $post; $ticket_id = $post->ID; ?>
<form action="" method="post">
    <input  name="ticket_id" type="hidden" value="<?php echo $ticket_id;?>" />
	<input  name="action" type="hidden" value="<?php echo SM_Reply_Manager::AJAX_ACTION;?>" />
    <?php wp_nonce_field( SM_Settings::SETTINGS_NONCE, '_wpnonce' ); ?>
    <?php do_action( 'sm_add_new_reply_form_top' ); ?> 

    <div class="sm_form">
        <label for="title"><?php _e( 'Reply Details', 'sm' ) ?></label>
        <?php
            $content = '';
            $editor_id = 'reply_content';
            wp_editor( $content, $editor_id );
        ?>
    </div>
    <div class="sm_form">
        <label for="reply_private"><?php _e( 'Private Reply', 'sm' ) ?></label><input type="checkbox" name="reply_private" id="reply_private" value="yes" />
    </div>	
    <?php do_action( 'sm_add_new_reply_form_bottom' ); ?>
    
    <div class="sm_form">
        <input type="button" class="sm_save_ajax_form" value="<?php _e( 'Submit', 'sm' ) ?>">
    </div>
    
</form>