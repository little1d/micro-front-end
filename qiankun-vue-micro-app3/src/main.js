import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'

let app

const render = (container) => {
    app = createApp(App)
    app.mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
    renderWithQiankun({
        mount(props) {
            const { container } = props
            render(container)
        },
        bootstrap() { },
        unmount() {
            app.unmount()
        }
    })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()