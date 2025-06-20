import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoPulse,FaMicrophoneAlt, MdWifitetheringTwotone, IoContrastOutline,BiGearFill, BiPersonCircle, RiKey2Fill,IoFingerPrintOutline, IoRadio, BiHeartFill, IoMusicalNoteSharp, RiArrowLeftSLine, BiSearch, FaPlayCircle, MdMorehoriz } from "oh-vue-icons/icons";
addIcons(IoPulse, FaMicrophoneAlt, MdWifitetheringTwotone, IoContrastOutline,BiGearFill, BiPersonCircle, RiKey2Fill,IoFingerPrintOutline, IoRadio, BiHeartFill, IoMusicalNoteSharp, RiArrowLeftSLine, BiSearch, FaPlayCircle, MdMorehoriz)

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')
