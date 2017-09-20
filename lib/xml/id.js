/**
 * https://www.w3.org/TR/xml-id/
 */

import { XMLAttrAssembler } from './xml'

const XML_ID_LOCAL_NAME = 'id'

export class XMLIdAttrAssembler extends XMLAttrAssembler {
    static get localName() {
        return XML_ID_LOCAL_NAME
    }
}

export function id(init) {
    return new XMLIdAttrAssembler(init)
}
