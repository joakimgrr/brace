import { h, render } from 'preact';

import App from './components/app';

require('./index.html');
require('./styles/main.scss');

render(<App />, document.getElementById('app'));
