import { XMLAttrAssembler } from './xml'

/**
 * https://www.w3.org/TR/xmlbase/
 */
export class Base extends XMLAttrAssembler {}

/**
 * @param {*} [init]
 * @returns {Base}
 */
export function base(...init) {
    return new Base(...init)
}
