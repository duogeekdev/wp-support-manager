<?php

if( ! class_exists( 'SM_Settings_Parent' ) ) {
    /**
     *
     */
    class SM_Settings_Parent{
        
        public $data;
        
        protected function __construct() {
            $options = SM_Loader::Create( 'SM_Options' );
            $this->data = $options->get_options();
        }
        
        /**
         * Create singleton instance
         *
         * @since 1.0.0
         */
        static public function get_instance() {
            static $Inst = null;
            if( $Inst == null ) {
                $Inst = new self();
            }
            
            return $Inst;
        }
        
        public function get_item_wrapper( $title = '', $content = '', $echo = false ) {
            ob_start();
            ?>
            <div class="postbox">
                <h3 class="hndle"><span><?php echo $title; ?></span></h3>
                <div class="inside">
                    <table cellpadding="5" cellspacing="5" width="100%">
                        <?php echo $content; ?>
                    </table>
                </div>
            </div>
            <?php
            $output = ob_get_contents();
            ob_get_clean();
            
            if( $echo ){
                echo $output;
            }else{
                return $output;
            }
            
        }
        
        public function get_sidebar() {
            
            $sidebars = array(
                            array(
                                'title' => __( 'M2 Subscription Settings 1', 'sm' ),
                                'content' => __( 'M2 Subscription Settings 1', 'sm' )
                            ),
                            array(
                                'title' => __( 'M2 Subscription Settings 2', 'sm' ),
                                'content' => __( 'M2 Subscription Settings 2', 'sm' )
                            )
                        );
            
            foreach( $sidebars as $sidebar ) {
                echo $this->get_item_wrapper( $sidebar['title'], $sidebar['content'] );
            }
            
        }
        
        public function get_settings_content_before( $title = '' ) {
            ?>
            <form method="post" action="" class="sm_settings">
                <input type="hidden" class="action" value="<?php echo SM_Settings::SETTINGS_AJAX_ACTION; ?>">
                <?php wp_nonce_field( SM_Settings::SETTINGS_NONCE, '_wpnonce' ); ?>
                <div class="wrap sm_wrap">
                    <div class="saving_message">
                        <img src="<?php echo SM_FILES_URI . '/assets/images/loadingAnimation.gif' ?>">
                        <br>
                        <span class="save_msg"><?php _e( 'Saving...', 'sm' ) ?></span>
                    </div>
                    <h2><?php echo $title; ?></h2>
                    <div id="poststuff">
                        <div id="post-body" class="metabox-holder columns-2">
                            <div id="post-body-content">
            <?php
        }
        
        public function get_settings_content_after() {
            ?>
                            </div>
                            <div class="postbox-container" id="postbox-container-1">
                                <?php echo $this->get_sidebar(); ?>
                            </div>
                        </div>
                    </div>
                    <?php if( defined( 'SM_DISABLE_AJAX_SAVE' ) && SM_DISABLE_AJAX_SAVE ) { ?>
                    <input type="submit" name="sm_option_save" value="<?php _e( 'Save Settings', 'sm' ); ?>" class="button button-primary">
                    <?php } ?>
                </div>
            </form>
            <?php
        }
        
    }
}