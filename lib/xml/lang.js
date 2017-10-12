import { XMLAttrAssembler } from './xml'

/**
 * https://www.w3.org/TR/xml/#sec-lang-tag
 */
export class Lang extends XMLAttrAssembler {}

/**
 * @param {*} [init]
 * @returns {Lang}
 */
export function lang(...init) {
    return new Lang(...init)
}
