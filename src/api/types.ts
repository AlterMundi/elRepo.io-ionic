import { string } from "prop-types";

export interface apiState {
    url?: string,
    port?: string,
    login?: boolean,
    user?: {
        mLocationId: string
    },
    password?: string
}

export interface apiRequest {
    path: string,
    data: any,
    method?: string
}

export interface basicResponse {
    retval: boolean
}

export interface apiCall {
    (callOptions:apiRequest): Promise<basicResponse>
}