const Pluralize = require('pluralize');
/**
 * String Utility
 */
export class StringUtility {
    constructor() {}

    /**
     *
     * @param input The Input string to be formated
     * @param replacements - The placements values for the placement keys
     * #####Example
     * ``
     * const outputStr = StringUtility.StringFormat('Use Placeholders such as {{0}} and {{1}} and {{0}}', 'this', 'that')
     * Console.log(outputStr)
     * ``
     */
    public static StringFormat(input: string, ...replacements: string[]): string {
        if (input === undefined || input === null) {
            throw new Error('StringFormat expects input to be a valid string');
        }
        return input.replace(/{{(\d+)}}/g, (match, number) => {
            return typeof replacements[number] != 'undefined' ? replacements[number] : match;
        });
    }


    public static StringFormatUsingAnObject(paramterisedPhrase: string, parameters: any): string {
		return paramterisedPhrase.replace(/\{{([^}]+)\}}/g, function(match, key) {
			return parameters[key];
		})     
    }

    public static Singular(input: string): string {
        return Pluralize.singular(input);
    }

    public static Plural(input: string): string {
        return Pluralize.plural(input);
    }

    /**
     * Convert a hex string to an ArrayBuffer.
     *
     * @param {string} hexString - hex representation of bytes
     * @return {ArrayBuffer} - The bytes in an ArrayBuffer.
     */
    public static HexStringToUint8Array(hexString: string) {
        // remove the leading 0x
        hexString = hexString.replace(/^0x/, '');
        if (hexString.length % 2 != 0) {
            throw new Error(`StringFormat.HexStringToUint8Array expecting an even number of characters in the hexString but got ${hexString.length}`);
        }

        // check for some non-hex characters
        const bad = hexString.match(/[G-Z\s]/i);
        if (bad) {
            throw new Error(`StringFormat.HexStringToUint8Array found non-hex characters: ${bad} in ${hexString}`);
        }

        // split the string into pairs of octets
        const pairs = hexString.match(/[\dA-F]{2}/gi);

        // convert the octets to integers
        const integers = pairs?.map(function (s) {
            return parseInt(s, 16);
        });
        const array = new Uint8Array(integers!);
        return array.buffer;
    }

    public static StringToUTF8Array(data: string) {
        const utf8 = [];
        for (let i = 0; i < data.length; i++) {
            let charcode = data.charCodeAt(i);
            if (charcode < 0x80) utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
            } else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
            // surrogate pair
            else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (data.charCodeAt(i) & 0x3ff));
                utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    }

    public static BufferToUTF8Array(_data: Buffer) {
        return StringUtility.StringToUTF8Array(_data.toString());
    }

    public static ToUTF8String(data: string) {
        const buf1 = Buffer.from(data);
        console.log(Buffer.isEncoding('utf8') ? 'sssssdsd buf1 is utf8ppppppppppppppppppppppppp' : '');
        console.log(Buffer.isEncoding('utf16') ? 'sssssdsd buf1 is utf166666666ppppppppppppppppppppppppp' : '');
        return Buffer.from(data, 'utf-8').toString('utf-8');
    }
}
