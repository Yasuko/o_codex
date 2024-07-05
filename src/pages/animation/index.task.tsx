import { put } from 'redux-saga/effects'

export const AnimationTask = [loading_animation, toaster_animation]

function* loading_animation(status: boolean) {
    yield put({
        type: 'Animation/LOADING_ANIMATION',
        isLoading: status
    });
}

function* toaster_animation(
    status: {
        toasterLoading: boolean,
        toasterText: string,
        toasterMode: string
}) {
    yield put({
        type: 'Toaster/setShow',
        toasterLoading: status.toasterLoading,
        toasterText: status.toasterText,
        toasterMode: status.toasterMode
    })
}
