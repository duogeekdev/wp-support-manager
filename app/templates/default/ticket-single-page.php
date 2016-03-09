<?php get_header() ?>
	<div class="sm_single_ticket_page_wrap">
		<?php while ( have_posts() ) : the_post(); ?>
		<div><h2><?php the_title(); ?></h2></div>
		<div>
		<?php 
		global $post;
		echo "<pre>"; print_r($post); echo "</pre>";
		the_content(); ?>
		</div>
		
		<?php endwhile; ?>
		
		
	</div>	
	
<?php get_footer() ?>