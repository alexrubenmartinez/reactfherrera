import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

const divRoot = document.getElementById('root')
const root = createRoot(divRoot)

root.render(<GifExpertApp />)
