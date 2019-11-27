import '@babel/polyfill'

import JupyterCon from './JupyterCon'

import debounce from 'lodash.debounce'

import { Kernel, ServerConnection } from '@jupyterlab/services'

import * as util from './util.js'
import BinderHub from './BinderHub'

// Define globally for use in browser.
if (typeof window !== 'undefined') {
  window.JupyterCon = {Kernel, ServerConnection, BinderHub, JupyterCon, debounce}
}

export default {Kernel, ServerConnection, BinderHub, JupyterCon, debounce}
