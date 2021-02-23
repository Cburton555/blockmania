// uses these imports
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls} from "@wordpress/block-editor";
import { PanelBody, SelectControl, PanelRow, RangeControl, ColorPalette } from "@wordpress/components";
import { addFilter } from '@wordpress/hooks';
import {select} from "@wordpress/data";
import {__} from "@wordpress/i18n";
const borderInspectorControls = createHigherOrderComponent(( BlockEdit )=> {
    return (props) => {
        let divStyles = {
            borderStyle: props.attributes.borderStyle || 'none',
            borderWidth: props.attributes.borderWidth + "px",
            borderRadius: props.attributes.borderRadius,
            borderColor: props.attributes.borderColor,


        }
        let settings =select('core/editor').getEditorSettings();
        return (
            <Fragment>
                <div className="wp-block" style={divStyles}>
                    <BlockEdit {...props} />
                </div>
                <InspectorControls>
                    <PanelBody title="Border Controls" initialOpen={false}>
                        <PanelRow>
                            <SelectControl
                                label="Style"
                                value={props.attributes.borderStyle}
                                options={[
                                    {label: 'None', value: 'none'},
                                    {label: 'Solid', value: 'solid'},
                                    {label: 'Dashed', value: 'dashed'},
                                    {label: 'Dotted', value: 'dotted'},
                                ]}
                                onChange={(value) => {
                                    props.setAttributes({
                                        borderStyle: value
                                    })
                                }}
                            />
                            </PanelRow>
                            <PanelRow>
                            <RangeControl
                                label ="Border Width"
                                value={props.attributes.borderWidth}
                                onChange={ (value) => {
                                    props.setAttributes({
                                        borderWidth: value
                                        })
                                }}
                                step={0.5}
                                min={0.5}
                                max={5.5}/>


                            </PanelRow>
                        <PanelRow>
                            <RangeControl
                                label ="Border Radius"
                                value={props.attributes.borderRadius}
                                onChange={ (value) => {
                                    props.setAttributes({
                                        borderRadius: value
                                    })
                                }}
                                step={1.0}
                                min={0.0}
                                max={10.0}/>


                        </PanelRow>

                        <PanelRow>
                            <ColorPalette
                                label ={__('Border Color')}
                                colors={ settings.colors }
                                value={props.attributes.borderColor}

                                onChange={ (value) => {
                                    props.setAttributes({
                                        borderColor: value
                                    })
                                }}

                            />


                        </PanelRow>



                    </PanelBody>


                </InspectorControls>
            </Fragment>
        )
    };
}, 'borderInspectorControls');


addFilter('editor.BlockEdit','tk-blockmania/border-control/inspector-controls', borderInspectorControls);
