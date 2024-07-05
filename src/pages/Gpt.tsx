import React from 'react'
import { Provider } from 'react-redux'

// import rootReducer from './reducers'
import { createStore } from '../_store/configureStore'

// import components
import SearchIndex from './Search/index'
import AdminIndex from './Admin/index'


// import animation
interface FaceInterface {
    page: string
}

const store = createStore()

const Gpt = (p: FaceInterface): JSX.Element => {
    return (
        <Provider store={store}>
            { changer(p.page) }
        </Provider>
    )
}

const changer = (p: string): JSX.Element => {
    if (p === '') return <SearchIndex />
    if (p === 'admin') return <AdminIndex />

    return <SearchIndex />
}

export default Gpt
