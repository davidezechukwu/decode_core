import {IncomingHttpHeaders} from 'http'
import {IUserResponse} from './IUserResponse'

export interface IWhoAmIResponse {
    UserDetails: IUserResponse
    RequestHeaders: IncomingHttpHeaders
    XSLTStylesheet?: string
	Phrases?: object
	HostUrl?: string
	HostName?: string
}
