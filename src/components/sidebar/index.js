import { h, Component } from 'preact';

require('./sidebar.scss')

import Icon from 'icon'

export default class Sidebar extends Component {
    render() {
        return (
            <div class="sidebar">
                <Icon />
            </div>
        )
    }
}
