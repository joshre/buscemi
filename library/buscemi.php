<?php

// Adding documentation to the dash
function bc_dashboard_widget_function()
{
    $docs_template = get_template_directory() . '/library/docs.php';
    load_template($docs_template);
}
function bc_add_dashboard_widgets()
{
    wp_add_dashboard_widget('wp_dashboard_widget', 'Buscemi Docs', 'bc_dashboard_widget_function');
}
add_action('wp_dashboard_setup', 'bc_add_dashboard_widgets');

// add ie conditional html5 shim to header
function add_ie_html5_shim()
{
    echo '<!--[if lt IE 9]>';
    echo '<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>';
    echo '<![endif]-->';
}
add_action('wp_head', 'add_ie_html5_shim');

// Remove WP 4.2 emoji
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');

// Getting rid of WP Default jquery and adding from google
if (!is_admin()) {
    add_action("wp_enqueue_scripts", "jquery_enqueue", 11);
}

// Getting rid of WP Default jquery and adding from google
if (!is_admin()) {
    add_action("wp_enqueue_scripts", "jquery_enqueue", 11);
}

function jquery_enqueue()
{
    wp_dequeue_script('jquery');
    wp_deregister_script('jquery');
    wp_register_script('jquery',  get_template_directory_uri() . '/app/jquery-1.9.1.min.js', false, null);
}

function localInstall()
{

    if (strpos($_SERVER["HTTP_HOST"], 'test') !== false) {
        $reloadScript = 'http://localhost:35729/livereload.js';
        wp_register_script('livereload', $reloadScript, null, false, true);
        wp_enqueue_script('livereload');
    }
}

// Enqueuing all of our scripts and styles
function buscemi_scripts()
{
    wp_enqueue_script('jquery');
    localInstall();
    wp_register_script('lazyload', get_template_directory_uri() . '/app/vendors/lazyload.min.js', null, false, true);
    wp_enqueue_script('lazyload');
    wp_register_script('appear', get_template_directory_uri() . '/app/vendors/appear.min.js', null, false, true);
    // wp_enqueue_script('appear');
    wp_register_script('picturefill', get_template_directory_uri() . '/app/vendors/picturefill.min.js', null, false, true);
    wp_enqueue_script('picturefill');
    wp_register_script('parallax', get_template_directory_uri() . '/app/vendors/smooth-parallax.min.js', null, false, true);

    // wp_enqueue_script('parallax');
    wp_enqueue_style('buscemi_style', get_template_directory_uri() . '/app/main.min.css', null, null, null);
    wp_enqueue_script('buscemi_script', get_template_directory_uri() . '/app/app.min.js', array('jquery'), null, null, true);
}
add_action('wp_enqueue_scripts', 'buscemi_scripts');

function slider_scripts()
{

    wp_register_script('flickity', get_template_directory_uri() . '/app/vendors/flickity/flickity.min.js', null, false, true);
    wp_enqueue_script('flickity');

    wp_enqueue_style('flickity_style', get_template_directory_uri() . '/app/vendors/flickity/flickity.css', null, null, null);
}

// this goes in the .php file that needs a slider, not here. It's here because I love you.
// add_action('wp_enqueue_scripts', 'slider_scripts');

// Allowing SVG preveiw in WP Upload
function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// Setting up ACF options page
if (function_exists('acf_add_options_page')) {
    acf_add_options_page();

    // acf_add_options_sub_page('Site Options');
    // acf_add_options_sub_page('Defaults');
    // acf_add_options_sub_page('Footer');
    // acf_add_options_sub_page('Header');
}

// Changes Gravity Forms Ajax Spinner (next, back, submit) to a transparent image
// this allows you to target the css and create a pure css spinner like the one used below in the style.css file of this gist.
add_filter( 'gform_ajax_spinner_url', 'spinner_url', 10, 2 );
function spinner_url( $image_src, $form ) {
    return  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // relative to you theme images folder

}
require_once 'functions--custom-fields.php';
require_once 'functions--custom-posts.php';
// require_once 'functions--ajax.php';


// Make sure to put the correct fields in the list_searchable_acf() array!
// require_once 'functions--search.php';

add_filter( 'auto_update_plugin', '__return_true' );
add_filter( 'auto_update_theme', '__return_true' );


// function to add a Google Maps API Key


//  Make sure the Google Maps Api’s are enabled: //
//////////////////////////////////////////////////
///// Google Maps Directions API
///// Google Maps Distance Matrix API
///// Google Maps Elevation API
///// Google Maps Geocoding API
///// Google Maps JavaScript API
///// Google Places API Web Service
///// Google Static Maps API
//////////////////////////////////////////////////


function my_acf_init() {
    
    acf_update_setting('google_api_key', 'API KEY');
}

add_action('acf/init', 'my_acf_init');
