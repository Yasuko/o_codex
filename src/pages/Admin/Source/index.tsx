import React from 'react-redux'

// import Component
import List from './List'
import Screen from './Screen'

export const SourceIndex = () => {

    return (
        <div className="flex flex-row w-full h-full">
            <List />
            <Screen />
        </div>
    )
}

export default SourceIndex