/**
 * Created by mitel on 02/05/15.
 */

import 'uikit.gradient.css';
import 'uikit';

import React, {Component} from 'react';
import Desktop from 'components/Desktop';

class Mobile extends React.Component {
    render() {
        return (
            <div className="uk-grid uk-visible-small">
                <div className="uk-width-1-1">
                    <button className="uk-button-primary" type="button">mobile</button>
                </div>
            </div>
        )
    }
}


export default class Chat extends React.Component {
    render() {
        return (
            <div>
                <Desktop/>
                <Mobile/>
            </div>
        )
    }
}
