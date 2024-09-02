import React, { useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from '../../_store/configureStore'
const store = createStore()

// import animation
import LoadingAnimation from '../animation/loading.animation'
import ToasterAnimation from '../animation/toaster.animation'

// import Component
import Header from '../Header'
import Home from './Home'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const SearchIndex = () => {
    const dispatch = useDispatch()

    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const name = query.get('unko')

    useEffect(() => {
        dispatch({
            type: 'AuthAction/verify',
        }) 
    }, [])


    return (
        <Provider store={store}>
            <Header />
            <div className="flex flex-row w-full h-full">
                <Home />
            </div>
            {name}
            <LoadingAnimation />
            <ToasterAnimation />
        </Provider>
    );
};

export default SearchIndex