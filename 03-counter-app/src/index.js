import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
//import PrimeraApp from './PrimeraApp'
import './index.css'
import CounterApp from './CounterApp'

const divRoot = document.getElementById('root')
const root = createRoot(divRoot)

root.render(<CounterApp value={3} />)
