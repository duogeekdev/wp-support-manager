<?php

if( ! defined( 'ABSPATH' ) ) die( 'Nice try!' );

if( ! class_exists( 'SM_Config' ) ) {
    
    /**
     * Config class for SM
     *
     * @since 1.0.0
     */
    class SM_Config{
        
        const SM_TICKET_POST_TYPE = 'sm-ticket';
        const SM_REPLY_POST_TYPE = 'sm-reply';
        const SM_TICKET_TAXONOMY = 'sm-support-categories';
        
        const SM_TICKET_STATUS_ACTIVE = 'active';
        const SM_TICKET_STATUS_INACTIVE = 'inactive';
        const SM_TICKET_STATUS_CLOSED = 'closed';
        const SM_TICKET_STATUS_RESOLVED = 'resolved';
        
        /********** ShortCodes **********/
        const SM_SC_ALL_TICKETS = 'sm_all_tickets';
        const SM_SC_ADD_NEW_TICKET = 'sm_add_new_ticket';
        
    }
    
}