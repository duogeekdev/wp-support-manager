<?php

if( ! class_exists( 'SM_Support_Settings_Page' ) ) {
    /**
     * Class SM_Support_Settings_Page
     */
    class SM_Support_Settings_Page extends SM_Settings_Parent{
        
        public $data, $log;
        
        protected function __construct() {
            $obj = SM_Loader::Create( 'SM_Settings_Parent' );
            $this->data = $obj->data;
            $this->log = new SM_Logs();
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
        
        public function to_html() {
            $this->get_settings_content_before( __( 'Support Manager Settings', 'sm' ) );
            
            $this->get_item_wrapper(
                __( 'Settings', 'sm' ),
                self::_page_selection(),
                true
            );         
			
            $this->get_settings_content_after();
        }
        
        private function _page_selection() {
            ob_start();
            $pages = SM_Utility::get_pages();
			$templates = SM_Helper::get_all_templates();
            ?>
            <tr>
                <td><?php _e( 'Select page for all ticket page:', 'sm' ); ?></td>
                <td>
                    <select name="sm_options[all_tickets_page]" data-option="all_tickets_page">
                        <option value=""><?php _e( 'Select page', 'sm' ); ?></option>
                        <?php foreach( $pages as $page ) { ?>
                        <option <?php echo isset( $this->data['all_tickets_page'] ) && $this->data['all_tickets_page'] == $page->ID ? 'selected' : '' ?> value="<?php echo $page->ID ?>"><?php echo $page->post_title ?></option>
                        <?php } ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td><?php _e( 'Select page add new ticket:', 'sm' ); ?></td>
                <td>
                    <select name="sm_options[add_ticket_page]" data-option="add_ticket_page">
                        <option value=""><?php _e( 'Select page', 'sm' ); ?></option>
                        <?php foreach( $pages as $page ) { ?>
                        <option <?php echo isset( $this->data['add_ticket_page'] ) && $this->data['add_ticket_page'] == $page->ID ? 'selected' : '' ?> value="<?php echo $page->ID ?>"><?php echo $page->post_title ?></option>
                        <?php } ?>
                    </select>
                </td>
            </tr>

            <tr>
                <td><?php _e( 'Select Template:', 'sm' ); ?></td>
                <td>
                    <select name="sm_options[active_template]" data-option="active_template">
                        <option value=""><?php _e( 'Select Template', 'sm' ); ?></option>
                        <?php 
						foreach( $templates as $t=>$val ) { ?>
                        <option <?php echo isset( $this->data['active_template'] ) && $this->data['active_template'] == $t ? 'selected' : '' ?> value="<?php echo $t ?>"><?php echo ucfirst($t) ?></option>
                        <?php } ?>
                    </select>
                </td>
            </tr>			
            <?php
            $output = ob_get_contents();
            ob_get_clean();
            
            return $output;
        }
        
        public function log_page() {
            $this->get_settings_content_before( __( 'M2 Logs', 'sm' ) );
            
            $this->get_item_wrapper(
                __( 'M2 Subscription Settings', 'sm' ),
                self::_show_logs(),
                true
            );
            
            $this->get_settings_content_after();
        }
        
        private function _show_logs() {
            ob_start();
            ?>
            <tr>
                <td colspan="2">
                    <div class="sm_logs">
                        <?php echo $this->log->write_log_file(); ?>
                    </div>
                    <?php
                        $target_url = admin_url(
                                        add_query_arg(
                                            array(
                                                'action' => SM_Settings::SETTINGS_LOG_DELETE_ACTION,
                                                '_wpnonce' => SM_Helper::get_nonce()
                                            ),
                                            'admin.php'
                                        )
                                    );
                    ?>
                    <a data-pop="deleteChecker" class="action_confirm button button-primary" href="<?php echo esc_url( $target_url ) ?>"><?php _e( 'Delete Log', 'sm' ) ?></a>
                    <div class="sm_popup deleteChecker">
                        <div class="sm_popup_padding">
                            <div class="sm_popup_close">x</div>
                            <div class="sm_popup_content">
                                <div style="width: 400px">
                                    Are you sure you want to delete?
                                    <button id="yes" value="1">Yes</button>
                                    <button id="no" value="0">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <?php
            $output = ob_get_contents();
            ob_get_clean();
            
            return $output;
        }
        
    }
}