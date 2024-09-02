import { animationReducers } from '../pages/animation/index.reducer'
import { SearchReducer } from '../_domain/search/index.reducers'
import { DocumentReducer } from '../_domain/document/index.reducers'
import { SourceReducer } from '../_domain/source/index.reducers'
import { AuthReducer } from '../_domain/auth/index.reducers'
import AdminScreen from '../_domain/admin/AdminScreen'

export const reducer = {
    ...animationReducers,
    ...SearchReducer,
    ...DocumentReducer,
    ...SourceReducer,
    ...AuthReducer,
    AdminScreen,
}
