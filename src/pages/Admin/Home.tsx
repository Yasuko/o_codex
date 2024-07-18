import React, { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

// import Reducer
import {
    AdminScreenInterface,
    AdminScreenPropsInterface,
    initialState
} from '../../_domain/admin/AdminScreen'

// import Component
import DocumentIndex from './Document/index'
import SourceIndex from './Source/index'
import Header from '../Header'
import AdminHeader from './AdminHeader'

import TokenForm from '../_components/TokenForm'
import { useEffect } from 'react'

export const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'AdminAction/checkToken'
        })
    }, [])

    const a = useSelector((state: AdminScreenPropsInterface): AdminScreenInterface => {
        return (state.AdminScreen === undefined) ? initialState : state.AdminScreen
    })
    
    return (
        <div>
            <Header />
            <AdminHeader />
            <div className="flex flex-row w-full h-full">
                { a.document ?  <DocumentIndex /> : <></>}
                { a.source ? <SourceIndex /> : <></> }
                { a.token  ? <TokenForm toDispatch='AdminScreen/reset' /> : <></>}
            </div>
        </div>
    )
}

export default Home