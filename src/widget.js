import './style/ui.less'

import codeSnippet from './widgets/codeSnippet'
import transitionCollapse from './widgets/transitionCollapse'
import collapse from './widgets/collapse'
import collapseGroup from './widgets/collapseGroup'
import block from './widgets/block'
import btn from './widgets/btn'
import radio from './widgets/radio'
import calendar from './widgets/calendar'
import datePicker from './widgets/datePicker'
import textarea from './widgets/textarea'
import select from './widgets/select'
import cascader from './widgets/cascader'
import slider from './widgets/slider'
import pagination from './widgets/pagination'
import input from './widgets/input'
import menu from './widgets/menu'
import modals from './widgets/modal'
import checkboxCompnent from './widgets/checkbox'
import tag from './widgets/tag'

import Layout from './widgets/layout'
import Form from './widgets/form'

const { checkbox, checkboxes } = checkboxCompnent
const { Row, Col } = Layout

// 注册 Vue.use 调用方法
const install = Vue => {
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Form.name, Form)

  Vue.component(codeSnippet.name, codeSnippet)
  Vue.component(transitionCollapse.name, transitionCollapse)
  Vue.component(collapse.name, collapse)
  Vue.component(collapseGroup.name, collapseGroup)
  Vue.component(block.name, block)
  Vue.component(btn.name, btn)
  Vue.component(radio.name, radio)
  Vue.component(checkbox.name, checkbox)
  Vue.component(checkboxes.name, checkboxes)
  Vue.component(datePicker.name, datePicker)
  Vue.component(calendar.name, calendar)
  Vue.component(textarea.name, textarea)
  Vue.component(select.name, select)
  Vue.component(cascader.name, cascader)
  Vue.component(slider.name, slider)
  Vue.component(pagination.name, pagination)
  Vue.component(modals.modal.name, modals.modal)
  Vue.component(input.name, input)
  Vue.component(menu.name, menu)
  Vue.component(tag.name, tag)

  // 挂载实例到dom
  const globalModal = ['confirm', 'tip', 'alert', 'toast']
  globalModal.forEach(item => {
    const instance = Vue.prototype[`$one${item}`] = new Vue(modals[item]).$mount()
    document.body.appendChild(instance.$el)
  })
}

// codeSnippet,
// transitionCollapse,
// collapse,
// collapseGroup,
// block,
// btn,
// radio,
// checkbox,
// checkboxes,
// datePicker,
// calendar,
// textarea,
// select,
// cascader,
// slider,
// pagination,
// modals,
// input,
// menu,

export default {
  install
}
