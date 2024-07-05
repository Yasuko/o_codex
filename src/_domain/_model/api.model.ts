import { HttpService } from '../../_lib/http2/http.service'

const url = 'http://localhost:8800'

export const loadURL = async (val: string) => {
    await HttpService.call()
        .setURL(`${url}/api/url_to_text`)
        .setMethod('POST')
        .setBody(JSON.stringify({ url: val }))
        .getResult()
    return HttpService.call()._result().message.message[0]
}