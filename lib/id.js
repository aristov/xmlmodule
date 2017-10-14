import { XMLAttrAssembler } from './xml'

/**
 * https://www.w3.org/TR/xml-id/
 */
export class Id extends XMLAttrAssembler {}

/**
 * @param {*} [init]
 * @returns {Id}
 */
export function id(...init) {
    return new Id(...init)
}
