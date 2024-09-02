import { HttpService } from '../../_lib/http2/http.service'
import { uuidService } from '../../_lib/indentification/uuid'

const url = 'https://next-test-green-kappa.vercel.app'

export const verifyAPI = async () => {
    await HttpService.call()
        .setURL(`${url}/api/verify`)
        .setMethod('GET')
        .getResult()
    return HttpService.call()._result().message.message[0]
}

export const signOutAPI = async () => {
    await HttpService.call()
        .setURL(`${url}/api/signout`)
        .setMethod('POST')
        .getResult()
    return HttpService.call()._result().message.message[0]
}


export const getUUID = () => {
    return uuidService.call().getUUIDv4()
}

// urlにリダイレクトする
export const redirect = (token: string) => {
    window.location.href = `${url}/sso/${token}/?back=${window.location.href}`
}
