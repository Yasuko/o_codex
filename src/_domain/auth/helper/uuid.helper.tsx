// import Library
import { uuidService } from '../../../_lib/indentification/uuid'

export const getUUID = () => {
    return uuidService.call().getUUIDv4()
}