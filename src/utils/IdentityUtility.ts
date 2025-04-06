import {Guid} from 'guid-typescript';
const uniqid = require('uniqid');

export class IdentityUtility {
    constructor() {}

    /**
     * summary: // ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
     */
    public static NewGUIdString(): string {
        return Guid.create().toString();
    }

    /**
     * summary: // ==> 4n5pxq24kpiob12og9
     */
    public static NewHexatridecimalIdString(): string {
        return uniqid().toString();
    }
}
