/**
 * Created by mitel on 02/05/15.
 */

import 'uikit.gradient.css';
import 'uikit';

import 'autocomplete.gradient.css';
import 'autocomplete'

import 'search.gradient.css'
import 'search';

//import 'supersonic/css/supersonic.css'
//import 'supersonic/supersonic.core.js'

import React, {Component} from 'react';
import mixin from 'cerebral/src/mixin';

class Desktop extends Component {
    
    getCerebralState() {
        return ['inputValue', 'list'];
    }
    
    onInputValueSubmit(event) {
        event.preventDefault();
        if (this.state.inputValue) {
            this.signals.inputValueSubmitted();
        }
    }
  
    changeInputValue(event) {
        this.signals.inputValueChanged(event.target.value);
    }

    renderListItem(item, index) {
        return <div className="uk-flex" key={index}>{item}</div> 
    }

    render() {
        var flili2 = [];
        flili2.push(<div className="uk-flex">start</div>);
        for (let i=0; i<100; i++){
            flili2.push(<div className="uk-flex">gogu</div>);
        }
        flili2.push(<div className="uk-flex">end</div>);

        // [uk-flex uk-flex-column] that needs scrollable content
        // vh compatibility:
        //      http://caniuse.com/#feat=viewport-units
        // cross-browser bugs:
        //      http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
        // http://webdesign.tutsplus.com/tutorials/how-to-make-responsive-scrollable-panels-with-flexbox--cms-23269
        // getuikit alternative:
        //      uk-height-viewport (https://github.com/uikit/uikit/issues/1032)
        var scrollablePanel = {
            height: 70 + 'vh'
            //height: 678 + 'px'
        };

        // wrapper for the content to be listed inside the scrollablePanel
        var scrollableContent = {
            overflowY: 'scroll',
            WebkitOverflowScrolling: 'touch'
        };

        /*
         the grid (uk-grid - uses flexbox)
         - uk-grid-divider - adds a line between the columns
         - or uk-grid-small - creates a small gutter between the columns
         - uk-hidden-small - hides the area on small devices
         - uk-width-1-4 - Divides the grid into fourths

         flexbox (uk-flex)
         - uk-flex-middle - vertically center flex items
         - uk-flex-space-between - distribute items evenly, with the
         first item at the beginning and last item at the end of the main axis
         - div with uk-grid-divider - adds a horizontal line between two stacked boxes
         */

        return (
            <div className="uk-grid uk-hidden-small">

                {/* first column: header & user list */}
                <div className="uk-width-1-4 uk-flex uk-flex-column">

                    {/* header */}
                    <div className="uk-panel uk-panel-box uk-panel-box-primary">
                        <div className="uk-flex uk-flex-middle uk-flex-space-between">
                            <a href="" className="uk-icon-button uk-icon-cog"></a>
                            <div>Hello</div>
                            <a href="" className="uk-icon-button uk-icon-music"></a>
                        </div>
                    </div>


                    {/* recent thread list, ordered by the most recent one, by user
                     scrollable area that includes a search component on top
                     and the list
                     */}

                    <div className="uk-flex uk-flex-column" style={scrollablePanel}>
                        <div style={scrollableContent}>
                            <form className="uk-search" data-uk-search>
                                <input className="uk-search-field" type="search" placeholder="search.."/>

                            </form>

                            <div className="uk-panel uk-panel-box uk-panel-box-secondary">
                                {flili2}
                            </div>
                        </div>
                    </div>
                </div>

                {/*  2nd column: chat area */}
                <div className="uk-width-2-4 uk-flex uk-flex-column">

                    {/* header
                     - other participants to the chat
                     - when they were active last time
                     - other buttons: audio, video, send file etc
                     */}
                    <div className="uk-panel uk-panel-box">
                        <div className="uk-flex uk-flex-middle uk-flex-space-between">
                            <a href="" className="uk-icon-button uk-icon-plane"></a>
                            <div>gogu - active 3h ago</div>
                        </div>
                    </div>

                    {/* message log
                     */}
                    <div className="uk-flex uk-flex-column" style={scrollablePanel}>
                        <div style={scrollableContent}>
                            {this.state.list.map(this.renderListItem)}
                        </div>
                    </div>

                    <div className="uk-grid-divider"/>

                    {/* input message
                     */}
                    <div className="uk-flex uk-flex-middle uk-flex-space-between">
                        <form className="uk-form" onSubmit={this.onInputValueSubmit.bind(this)}>
                            <input className="uk-form-width-medium" 
                                    type="text" 
                                    value={this.state.inputValue} 
                                    onChange={this.changeInputValue.bind(this)}/>
                        </form>
                        <a href="" className="uk-icon-button uk-icon-futbol-o"></a>
                    </div>
                </div>

                {/*  3rd column: TBD */}
                <div className="uk-width-1-4 uk-visible-large">
                    <button className="uk-button-primary" type="button">desktop-large</button>
                </div>
            </div>
        )
    }
}

export default mixin(Desktop);


