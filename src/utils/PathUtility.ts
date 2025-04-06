export class PathUtility {
    constructor() {}

    public static RemoveTrailingSlash(path: string): string {
        if (!path?.trim()) {
            throw new Error('RemoveTrailingSlash failed because path is either null or empty or blank');
        }
        if (path[path.length - 1] == '/') {
            path = path.substring(0, path.length - 1);
        }
        return path;
    }

    public static RemoveLastSlash(path: string): string {
        if (!path?.trim()) {
            throw new Error('RemoveTrailingSlash failed because path is either null or empty or blank');
        }
        if (path[0] == '/') {
            path = path.substring(1, path.length);
        }
        return path;
    }

    public static GetRelativeRedirect(originalUrl: string, url: string, redirectTo: string): string {
        if (!url?.trim() && !originalUrl?.trim()) {
            throw new Error('GetRelativeRedirect failed because url & originalUrl are both either null or empty or blank');
        }
        const redirectedUrl = originalUrl || url;
        const lastSlash = url.lastIndexOf('/');
        if (lastSlash >= 0) {
            url = './' + url.substr(lastSlash + 1) + redirectTo;
        }
        return redirectedUrl;
    }
}
