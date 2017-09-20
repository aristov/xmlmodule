/**
 * https://www.w3.org/TR/xmlbase/
 */

import { XMLAttrAssembler } from './xml'

const XML_BASE_LOCAL_NAME = 'base'

export class XMLBaseAttrAssembler extends XMLAttrAssembler {
    /**
     * @returns {String}
     */
    static get localName() {
        return XML_BASE_LOCAL_NAME
    }
}

/**
 * @param {*} init
 * @returns {XMLBaseAttrAssembler}
 */
export function base(init) {
    return new XMLBaseAttrAssembler(init)
}
