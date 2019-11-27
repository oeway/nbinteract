import '@babel/polyfill'

import JupyterCon from './JupyterCon'

// Define globally for use in browser.
if (typeof window !== 'undefined') {
  window.JupyterCon = JupyterCon
}

export default JupyterCon
