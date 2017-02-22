import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

require('./index.html')
require('./styles/main.scss')

ReactDOM.render(<App />, document.getElementById('app'))
