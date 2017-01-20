import React from 'react'
import ReactDOM from 'react-dom'
import Reducer from 'redux'
import actionFunc from '../src/actions.js'

const addtodo =(text) =>dispatch(actionFunc(text))
//const addcompletetodo = (index) =>dispatch(completetodo(index))

const text = ''