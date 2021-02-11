<?php
/**
 * Plugin Name:     Blockmania
 * Description:     A collection of editor blocks.
 * Version:         0.1.0
 * Author:          Tyler Kowalchuk
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     tk-blockmania
 *
 * @package         tk-blockmania
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function tk_blockmania_tk_blockmania_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "tk-blockmania/tk-blockmania" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'tk-blockmania-tk-blockmania-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'tk-blockmania-tk-blockmania-block-editor', 'tk-blockmania' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'tk-blockmania-tk-blockmania-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'tk-blockmania-tk-blockmania-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'tk-blockmania/tk-blockmania',
		array(
			'editor_script' => 'tk-blockmania-tk-blockmania-block-editor',
			'editor_style'  => 'tk-blockmania-tk-blockmania-block-editor',
			'style'         => 'tk-blockmania-tk-blockmania-block',
		)
	);
}
add_action( 'init', 'tk_blockmania_tk_blockmania_block_init' );
