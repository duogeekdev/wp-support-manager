<form action="#" method="post">
    
    <?php wp_nonce_field( SM_Settings::SETTINGS_NONCE, '_wpnonce' ); ?>
    <?php do_action( 'sm_add_new_ticket_content_before' ); ?>
    
    <div class="sm_form">
        <label for="title"><?php _e( 'Ticket title', 'sm' ) ?></label>
        <input type="text" id="sm_title">
    </div>
    
    <div class="sm_form">
        <label for="title"><?php _e( 'Ticket details', 'sm' ) ?></label>
        <?php
            $content = '';
            $editor_id = 'sm_ticket_details';
            wp_editor( $content, $editor_id );
        ?>
    </div>
    
    <div class="sm_form">
        <input type="button" id="sm_new_ticket" value="<?php _e( 'Submit', 'sm' ) ?>">
    </div>
    
    <?php do_action( 'sm_add_new_ticket_content_after' ); ?>
    
</form>