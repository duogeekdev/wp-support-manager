<?php
#some public functions

/**
 * return the url of current active template directory. Without trailing slash
*/

function sm_get_template_uri(){
	return SM_Helper::get_template_uri();

}


/**
 * print the url of current active template directory. Without trailing slash
 **/

function sm_template_uri(){
	echo sm_get_template_uri();
}

/**
 * return the path of current active template directory. Without trailing slash
*/

function sm_get_template_path(){
	return SM_Helper::get_template_path();
}


/**
 * print the path of current active template directory. Without trailing slash
 **/

function sm_template_path(){
	echo sm_get_template_path();
}