<form action="" method="post">
    <input  name="action" type="hidden" value="<?php echo SC_sm_add_new_ticket::AJAX_ACTION;?>" />
	<input type="hidden" name="redir" value="<?php bloginfo('url');?>" />
    <?php wp_nonce_field( SM_Settings::SETTINGS_NONCE, '_wpnonce' ); ?>
    <?php do_action( 'sm_add_new_ticket_form_top' ); ?>
    
    <div class="sm_form">
        <label for="title"><?php _e( 'Ticket title', 'sm' ) ?></label>
        <input  class="sm_input" type="text" id="ticket_title"  name="ticket_title" value="">
    </div>
    
    <div class="sm_form">
        <label for="title"><?php _e( 'Ticket details', 'sm' ) ?></label>
        <?php
            $content = '';
            $editor_id = 'ticket_content';
            wp_editor( $content, $editor_id );
        ?>
    </div>
    <?php do_action( 'sm_add_new_ticket_form_bottom' ); ?>
    
	<div class="sm_form">
        <input type="button" class="sm_save_ajax_form" value="<?php _e( 'Submit', 'sm' ) ?>">
    </div>
    
</form>