// uses these imports
import {addFilter} from '@wordpress/hooks';
const addBorderAttributes = (settings, name) => {


    settings.attributes.borderStyle = {
        type: 'string',
        default: '',

    }
    settings.attributes.borderWidth = {
        type: 'number',
        default: 1,

    }
    settings.attributes.borderRadius = {
        type: 'string',
        default: '1',

    }
	settings.attributes.borderColor = {
		type: 'string',
		default: '',

	}

    return settings;


}

addFilter('blocks.registerBlockType', 'tk-blockmania/border-control/settings', addBorderAttributes);

