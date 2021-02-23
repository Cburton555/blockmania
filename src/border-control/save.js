// uses these imports
import { addFilter } from '@wordpress/hooks';
const addBorderProps = ( saveElementProps, blockType, attributes ) => {
    if (attributes.borderStyle) {
        saveElementProps.style.borderStyle = attributes.borderStyle;
        saveElementProps.style.borderColor = attributes.borderColor;
		saveElementProps.style.borderWidth = attributes.borderWidth;
		saveElementProps.style.borderRadius = attributes.borderRadius;


	}
    return saveElementProps;
}

    addFilter('blocks.getSaveContent.extraProps', 'tk-blockmania/border-control/extra-props', addBorderProps);
