import {Octokit as Core} from '@octokit/core'
import {paginateRest} from '@octokit/plugin-paginate-rest'
import {restEndpointMethods} from '@octokit/plugin-rest-endpoint-methods'
import {HttpsProxyAgent} from 'https-proxy-agent'
export {RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods'
export {OctokitOptions} from '@octokit/core/dist-types/types'

let agent = {};
var proxy = process.env.https_proxy || process.env.HTTPS_PROXY;
if (proxy) {
    agent = new HttpsProxyAgent(proxy)
}

// export const Octokit = Core.plugin(paginateRest, restEndpointMethods)
export const Octokit = Core.defaults({
    request: { agent: agent }
}).plugin(paginateRest, restEndpointMethods)
// }paginateRest, restEndpointMethods)
