/**
 * https://www.w3.org/TR/REC-xml-names/
 */

import { AttrAssembler } from 'dommodule'

export const XMLNS_NAMESPACE_URI = 'http://www.w3.org/2000/xmlns/'
export const XMLNS_PREFIX = 'xmlns'

export class XMLNSAttrAssembler extends AttrAssembler {
    /**
     *
     * @returns {String}
     */
    static get prefix() {
        return XMLNS_PREFIX
    }

    /**
     *
     * @returns {String}
     */
    static get namespaceURI() {
        return XMLNS_NAMESPACE_URI
    }
}

/**
 *
 * @param {*} init
 * @returns {XMLNSAttrAssembler}
 */
export function xmlns(init) {
    return new XMLNSAttrAssembler(init)
}
