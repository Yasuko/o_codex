import React from 'react-redux'

// import Component
import DocumentList from './DocumentList'
import DocumentScreen from './DocumentScreen'

export const SearchIndex = () => {

    return (
        <div className="flex flex-row w-full h-full">
            <DocumentList />
            <DocumentScreen />
        </div>
    )
}

export default SearchIndex