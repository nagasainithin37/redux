# REDUX

## STEP 1 :

### Install @reduxjs/toolkit(for js) react-redux (mapping to react)

reactredux only used in index.js and in useSelector
cmd:
npm i @reducjs/toolkit react-redux

## STEP 2 :

### Creating a redux store using configureStore from '@reduxjs/toolkit' in store.js

import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({})

## Step 3:

### Provide this store to application

    in index.js

    import {store} from '.\store'
    import {Provider} from 'react-redux'
    <provider store={store}>
    <App/>
    </provider>

# Creating a Slice

## Step 4:

### create a part of slice :

use createSlice from @reduxjs/toolkit

import {createSlice} from '@reduxjs/toolkit'

export const todoSlice=createSlice({})

#### A slice contains name,initialState, reducers

in todoSlice.js

import {createSlice} from '@reduxjs/toolkit'

export const todoSlice=createSlice({
name:"todos",
initialState:[]
})

export default todoSlice.reducer; {Contains all information about reducer which is imported in store}

## STEP 5:

### import reducer of todo

import todoReducer from 'todoSlice.js'

export const store=configureStore({
reducer:{
todos:todoReducer
}
})

# Accessing a slice

## STEP 6 :

### any file can access store using useSelector

use useSelector hook from react-redux

import {useSelector} from 'react-redux

let todo=useSelector(state=>state.todos)

# modifying state of redux

reducer functions can onlly modify state of redux store
state + action object ====> reducer function

action objects are created by action creator functions

action object contains the following
{
type="",
payload:data,
}

## STEP 7 :

### add reducer to slices

createSlice({
reducers:{
addToDo:(state,action)=>{
state.push(action.payload)
}
}
})

## STEP 8 :

### Create action Creator Functions

in slices

export const {addToDo}=todoSlice.actions

## STEP 9:

### import addToDo into js file to use and useDispatcher from react-redux

import {addToDo} fromom '/todos.js'

import {useDispatch} from 'react-redux'

let actionobj=addToDo(todoObj.newTodo)
let dispatch=useDispatch()
dispatch(actionObj)
