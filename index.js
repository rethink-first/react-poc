'use strict'

// "fetch" global
require('whatwg-fetch')

import React from 'react'
// import only the render function of react-dom using ES2015 destructuring
import { render } from 'react-dom'
import CommentBox from './components/team-box'

render(
  <CommentBox url='http://localhost:3000/team'  />,
  document.getElementById('content')
)
