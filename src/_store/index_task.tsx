import { all } from 'redux-saga/effects'

import { RootSocketAction } from '../_domain/socket/socket.action'
import { RootSearchAction } from '../_domain/search/search.action'
import { RootDebugAction } from '../_domain/debug/debug.action'
import { RootDocumentAction } from '../_domain/document/document.action'
import { RootSourceAction } from '../_domain/source/source.action'
import { RootAdminAction } from '../_domain/admin/admin.action'
import { RootTokenAction } from '../_domain/token/token.action'

// Load AnimationAction
import { AnimationTask } from '../pages/animation/index.task'


export default function* rootSaga() {
    yield all([
        ...RootAdminAction,
        ...RootSocketAction,
        ...RootSearchAction,
        ...RootDebugAction,
        ...RootDocumentAction,
        ...RootSourceAction,
        ...RootTokenAction,
        ...AnimationTask
    ]);
}
