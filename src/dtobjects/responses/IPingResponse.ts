import {IncomingHttpHeaders} from 'http'

export interface IPingResponse {
    RequestHeaders: IncomingHttpHeaders
    XSLTStylesheet?: string
	Phrases?: object
}
