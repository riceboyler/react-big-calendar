import React from 'react';
import Api from './Api';
import Intro from './Intro.md';
import cn from 'classnames';
import {render} from 'react-dom';

import localizer from 'react-big-calendar/localizers/moment';
import moment from 'moment';

localizer(moment);

import 'react-big-calendar/less/styles.less';
import './styles.less';
import './prism.less';

let demoRoot = 'https://github.com/intljusticemission/react-big-calendar/tree/master/examples/demos'

const Example = React.createClass({
    getInitialState(){
        return {
            selected: 'advysan'
        };
    },

    render() {
        let selected = this.state.selected;
        let Current = {
            basic: require('./demos/basic'),
            selectable: require('./demos/selectable'),
            cultures: require('./demos/cultures'),
            popup: require('./demos/popup'),
            rendering: require('./demos/rendering'),
            customView: require('./demos/customView'),
            advysan: require('./demos/advysan')
        }[selected];

        return (
            <div className='app'>
                <div className='examples contain'>
                    <aside>
                        <ul className='nav nav-pills'>
                            <li className={cn({ active: selected === 'basic' })}>
                                <a href='#' onClick={this.select.bind(null, 'basic')}>Basic</a>
                            </li>
                            <li className={cn({ active: selected === 'selectable' })}>
                                <a href='#' onClick={this.select.bind(null, 'selectable')}>Selectable</a>
                            </li>
                            <li className={cn({ active: selected === 'cultures' })}>
                                <a href='#' onClick={this.select.bind(null, 'cultures')}>I18n and Locales</a>
                            </li>
                            <li className={cn({ active: selected === 'popup' })}>
                                <a href='#' onClick={this.select.bind(null, 'popup')}>Popup</a>
                            </li>
                            <li className={cn({ active: selected === 'rendering' })}>
                                <a href='#' onClick={this.select.bind(null, 'rendering')}>Custom rendering</a>
                            </li>
                            <li className={cn({ active: selected === 'adyvsan' })}>
                                <a href='#' onClick={this.select.bind(null, 'advysan')}>Advysan</a>
                            </li>
                            {/* temporary hide link to documentation
                             <li className={cn({active: selected === 'customView' })}>
                             <a href='#' onClick={this.select.bind(null, 'customView')}>Custom View</a>
                             </li>
                             */}
                        </ul>
                    </aside>
                    <div className='example'>
                        <Current className='demo'/>
                    </div>
                </div>
            </div>
        );
    },

    select(selected, e){
        e.preventDefault();
        this.setState({ selected })
    }
});

render(<Example/>, document.getElementById('root'));
