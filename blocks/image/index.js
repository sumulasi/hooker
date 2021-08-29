import style from './styles/style.scss';
import editor from './styles/editor.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

import Edit from './component/edit'
import Save from './component/save'

export default registerBlockType( 'sp-blocks/image', {
	// Block title
	title: __( 'SP Image', 'hooker' ),
	// Block description
	description: __( 'Block description', 'hooker' ),
	// Block icon (https://developer.wordpress.org/resource/dashicons/)
	icon: 'smiley',
	// Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed
	category: 'sp',
	// To handle block toolbar controls.
	attributes: {
		image: {
			type: "number",
			default: 0,
		},
		mask_image: {
			type: "number",
			default: 0,
		},
		image_alt: {
			type: "string",
			default: "",
		},
		image_url: {
			type: "string",
			default: "",
		},
		mask_image_url: {
			type: "string",
			default: "",
		}
	},
	// Function callback of edit property (to render block and block controls in Gutenberg editor)
	edit: Edit,
	// Function callback of save property (to save block content in post_content)
	save: Save
} );