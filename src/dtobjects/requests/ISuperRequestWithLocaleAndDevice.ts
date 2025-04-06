import { ISuperRequest } from "./ISuperRequest";

export interface ISuperRequestWithLocaleAndDevice extends ISuperRequest {
    Locale?: string;
    Device?: string;
}

