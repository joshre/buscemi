<?php
add_action('wp_ajax_search', 'search_filter'); // wp_ajax_{ACTION HERE}
add_action('wp_ajax_nopriv_search', 'search_filter');

function search_filter()
{

    // print_r($_POST);
    // All form data sent lives within $_POST. Print it out and make sure that the array keys corespond to the correct $_POST filters
    
    if (!empty($_POST['categories'])) {
        $categories = $_POST['categories'];
    } else {
        $categories = null;
    }
    if (!empty($_POST['search'])) {
        $search = $_POST['search'];
    } else {
        $search = null;
    }

    $context['ajax_searchs'] = getCustomPosts( $posttype = '',  $limit = '',  $category = '', $order = 'title',  $excluded = null,  $tag = null,  $search = null);
    $context['filtering']    = true;
    
    // This is the custom part, point to the area that the content to be updated lives. You'll make your life a thousand times easier if each item is in a clean, seperate template (this example is from CA Figs)

    // Timber::render('components/sections/section--search-wrap.twig', $context);


// all JS lives in site.js
    die();
}
