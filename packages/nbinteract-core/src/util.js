/**
 * Private utility functions used primarily by NbInteract.js
 */

import { KernelMessage } from '@jupyterlab/services'

/**
 * Converts a notebook HTTP URL to a WebSocket URL
 */
export const baseToWsUrl = baseUrl =>
  (baseUrl.includes('localhost') ? 'ws:' : 'wss:') +
  baseUrl
    .split(':')
    .slice(1)
    .join(':')

/**
 * Message type for widgets
 */
export const WIDGET_MSG = 'application/vnd.jupyter.widget-view+json'

/**
 * Functions to work with notebook DOM
 */
export const codeCells = () => document.querySelectorAll('.code_cell')

export const pageHasWidgets = () =>
  document.querySelector('.output_widget_view') !== null

export const cellToCode = cell =>
  cell.querySelector('.input_area').textContent.trim()

export const isWidgetCell = cell =>
  cell.querySelector('.output_widget_view') !== null

export const cellToWidgetOutput = cell =>
  cell.querySelector('.output_widget_view')


/**
 * Functions to work with kernel messages
 */
export const isErrorMsg = msg => msg.msg_type === 'error'
export const msgToModel = async (msg, manager) => {
  if (!KernelMessage.isDisplayDataMsg(msg)) {
    return false
  }

  const widgetData = msg.content.data[WIDGET_MSG]
  if (widgetData === undefined || widgetData.version_major !== 2) {
    return false
  }

  const model = await manager.get_model(widgetData.model_id)
  return model
}
