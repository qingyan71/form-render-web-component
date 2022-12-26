import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const schema = {
  type: 'object',
  properties: {
    "inputName": {
      "title": "url输入框",
      "type": "string",
      "format": "url",
      required: true,
    },
    "imageName": {
      "title": "图片展示",
      "type": "string",
      "format": "image"
    },
    "inputName2": {
      "title": "email输入框",
      "type": "string",
      "format": "email"
    },
    "cc": {
      "type": "string",
      "widget": 'title',
      "titleValue": "你好哇",
      "titleDescription": "啊哈哈哈",
    },
    "string": {
      "description": "a-z",
      "type": "string",
      "rules": [{
        "pattern": "^[a-z]+$"
      }]
    },
  },
};

window.createFormRenderElement = (ele, props) => {
  const root = ReactDOM.createRoot(ele);
  root.render(
    <App  {...props} ele={ele} />
  )
  return () => root.unmount();
}

// createFormRenderElement(document.getElementById('root'));
