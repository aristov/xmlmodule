import { XMLAttrAssembler } from './xml'

/**
 * https://www.w3.org/TR/xml/#sec-white-space
 */
export class Space extends XMLAttrAssembler {}

/**
 * @param {*} [init]
 * @returns {Space}
 */
export function space(...init) {
    return new Space(...init)
}
