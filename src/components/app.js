import { h, Component } from 'preact';

require('./app.scss')

import Sidebar from './sidebar'

export default class App extends Component {
    render() {
        return (
            <div class="container">
                <Sidebar />
            </div>
        )
    }
}
