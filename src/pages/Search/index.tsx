import React from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from '../../_store/configureStore'
const store = createStore()

// import animation
import LoadingAnimation from '../animation/loading.animation'
import ToasterAnimation from '../animation/toaster.animation'

// import Component
import Header from '../Header'
import Home from './Home'

export const SearchIndex = () => {

    return (
        <Provider store={store}>
            <Header />
            <div className="flex flex-row w-full h-full">
                <Home />
            </div>
            <LoadingAnimation />
            <ToasterAnimation />
        </Provider>
    );
};

export default SearchIndex