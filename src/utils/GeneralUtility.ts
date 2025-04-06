/**
 * todo add converters to this class
 */
export class GeneralUtility {
    public static DeepCopyWithDescriptors(sources: object[]) {
        const target: object = {};
        sources.forEach((source: any) => {
            const descriptors = Object.keys(source).reduce((descriptors: any, key: string) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
                return descriptors;
            }, {});

            // By default, Object.assign copies enumerable Symbols, too
            Object.getOwnPropertySymbols(source).forEach(sym => {
                const descriptor = Object.getOwnPropertyDescriptor(source, sym);
                if (descriptor && descriptor.enumerable) {
                    descriptors[sym] = descriptor;
                }
            });
            Object.defineProperties(target, descriptors);
        });
        return target;
    }

    public static DeepCopyWithoutDescriptors(source: object) {
        return JSON.parse(JSON.stringify(source));
    }

    protected static DebugFunc = require('debug')('decode');
    public static get Debug() {
        return GeneralUtility.DebugFunc;
    }

    public static IsValidURL(url: string) {
        /*
		const urls = [
			'ssh://user@host.xz:1234/path/to/repo.git',
			'ssh://user@host.xz/path/to/repo.git',
			'ssh://host.xz:port/path/to/repo.git',
			'ssh://host.xz/path/to/repo.git',
			'ssh://user@host.xz/path/to/repo.git',
			'ssh://host.xz/path/to/repo.git',
			'ssh://user@host.xz/~user/path/to/repo.git',
			'ssh://host.xz/~user/path/to/repo.git',
			'ssh://user@host.xz/~/path/to/repo.git',
			'ssh://host.xz/~/path/to/repo.git',
			'user@host.xz:/path/to/repo.git',
			'host.xz:/path/to/repo.git',
			'user@host.xz:~user/path/to/repo.git',
			'host.xz:~user/path/to/repo.git',
			'user@host.xz:path/to/repo.git',
			'host.xz:path/to/repo.git',
			'rsync://host.xz/path/to/repo.git',
			'git://host.xz/path/to/repo.git',
			'git://host.xz/~user/path/to/repo.git',
			'http://host.xz/path/to/repo.git',
			'https://host.xz/path/to/repo.git',
			'/path/to/repo.git',
			'path/to/repo.git',
			'~/path/to/repo.git',
			'file://path/to/repo.git',
			'file://~/path/to/repo.git',
			'https://127.0.0.1/path?param1=1&param2=2#test1',
			'https://127.0.0.1/path?param1=1&param2=2',
			'https://localhost',
			'mailto://firstname.surname@hotmail.com',
			'ftp://ftp.example.com/file100.txt',
			'ftps://ftp.example.com/file100.txt',
			'gopher://host:8001/7a_gopher_selector%09foobar',
			'gopher://host/7a_gopher_selector%09foobar',
			'imap://minbari.example.org/gray-councilUIDVALIDITY=385759045',
			'imap://psicorp.example.org/~peter/%E6%97%A5%E6%9C%AC%E8%AA%9E/%E5%8F%B0%E5%8C%97'
			'imap://AUTH=GSSAPI@minbari.example.org/gray-council/uid=20/section=1.2',
			'imap://AUTH=*@minbari.example.org/gray%20council?SUBJECT%20shadows',
			'ldap://hostname:636',
			'ldap://127.0.0.1:636'
		]

		urls.forEach(url => {
			try {
				const myURL = new URL(url)
				console.log(myURL)
			}
			catch (e) {
				console.error(`'${url}' is an invalid URL.\n ${e}`)
			}
		})
		*/
        try {
            const myURL = new URL(url);
            return true;
        } catch {
            return false;
        }
    }
}
