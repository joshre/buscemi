<?php
if (!class_exists('Timber')) {
    add_action('admin_notices', function () {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url(admin_url('plugins.php#timber')) . '">' . esc_url(admin_url('plugins.php')) . '</a></p></div>';
    });
    return;
}

class StarterSite extends TimberSite
{

    public function __construct()
    {
        add_theme_support('post-formats');
        add_theme_support('post-thumbnails');
        add_theme_support('menus');
        add_filter('timber_context', array($this, 'add_to_context'));
        add_filter('get_twig', array($this, 'add_to_twig'));
        add_action('init', array($this, 'register_post_types'));
        add_action('init', array($this, 'register_taxonomies'));
        parent::__construct();
    }

    public function register_post_types()
    {

        //this is where you can register custom post types

    }

    public function register_taxonomies()
    {

        //this is where you can register custom taxonomies

    }

    public function add_to_context($context)
    {
        $context['menu']    = new TimberMenu();
        $context['site']    = $this;
        $context['version'] = '1.0';
        $context['assets']  = get_template_directory_uri() . '/app';
        return $context;
    }

    public function add_to_twig($twig)
    {

        /* this is where you can add your own fuctions to twig */
        $twig->addExtension(new Twig_Extension_StringLoader());
        $twig->addFilter('widowless', new Twig_Filter_Function('word_wrapper'));
        $twig->addFilter('to_id', new Twig_Filter_Function('createId'));
        return $twig;
    }
}

function word_wrapper($text)
{
    $minWords = 3;
    $return   = $text;
    $arr      = explode(' ', $text);
    if (count($arr) >= $minWords) {
        $arr[count($arr) - 2] .= '&nbsp;' . $arr[count($arr) - 1];
        array_pop($arr);
        $return = implode(' ', $arr);
    }
    return $return;
}
function createId($string)
{
    //Lower case everything
    $string = strtolower($string);
    //Make alphanumeric (removes all other characters)
    $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
    //Clean up multiple dashes or whitespaces
    $string = preg_replace("/[\s-]+/", " ", $string);
    //Convert whitespaces and underscore to dash
    $string = preg_replace("/[\s_]/", "-", $string);
    return $string;
}

new StarterSite();

require_once 'library/admin.php';
// admin settings & customization

require_once 'library/buscemi.php';
// lots of extra theme stuff
