<?php 
#functions

function smdtmp_header_script(){
	$template_url = SM_Helper::get_template_url();
	?>
	<link rel="stylesheet" href="<?php echo $template_url ?>/style.css"  />
<?php 
}

add_action( "sm_wp_head", "smdtmp_header_script" );

function smdtmp_footer_script(){


}

add_action( "sm_wp_footer", "smdtmp_footer_script" );