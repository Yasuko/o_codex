import React, { useEffect } from 'react'

// import reducer

// import component
import Form from './Form'
import ResultList from './ResultList'
import Screen from './Screen'
import { useDispatch } from 'react-redux'

export const Home = (): JSX.Element => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'SearchAction/checkToken'
        })
    }, [])
    return (
        <div className='w-[100vw] h-[100vh'>
            <ResultList />
            <Form />
            <Screen />
        </div>
    )
}

export default Home
