import React from 'react-redux'
import { Provider } from 'react-redux'

import { createStore } from '../../_store/configureStore'
const store = createStore()

// import animation
import LoadingAnimation from '../animation/loading.animation'
import ToasterAnimation from '../animation/toaster.animation'

// import Component
import Home from './Home'

export const AdminIndex = () => {
    return (
        <Provider store={store}>
            <Home />
            <LoadingAnimation />
            <ToasterAnimation />
        </Provider>
    )
}

export default AdminIndex