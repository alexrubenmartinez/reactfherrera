import React from 'react'
//import HookApp from './HookApp'
//import CounterApp from './components/01-useState/CounterApp'
import { createRoot } from 'react-dom/client'
//import { TodoApp } from './components/08-useReducer/TodoApp'
//import { HomeScreens } from './components/09-useContext/HomeScreens'
import { MainApp } from './components/09-useContext/MainApp'
//import CounterWithCustomHooks from './components/01-useState/CounterWithCustomHooks'
//import { SimpleForm } from './components/02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
//import { MultipleCustomHook } from './components/examples/MultipleCustomHook'
//import { FocusScreen } from './components/04-useRef/FocusScreen'
//import { RealExampleApp } from './components/04-useRef/RealExampleApp'
//import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect'
//import { Memorize } from './components/06-memos/Memorize'
//import { MemoHook } from './components/06-memos/MemoHook'
//import { CallbackHooks } from './components/06-memos/CallbackHooks'
//import { Padre } from './components/07-tarea-memo/Padre'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<MainApp />)
