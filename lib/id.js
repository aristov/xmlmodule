/**
 * https://www.w3.org/TR/xml-id/
 */

import { XMLAttrAssembler } from './xml'

export class Id extends XMLAttrAssembler {}

/**
 * @param {*} [init]
 * @returns {Id}
 */
export function id(...init) {
    return new Id(...init)
}
