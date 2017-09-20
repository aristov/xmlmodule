import { XMLAttrAssembler } from './xml'

/**
 * https://www.w3.org/TR/xml/#sec-white-space
 */

const XML_SPACE_LOCAL_NAME = 'space'

export class XMLSpaceAttrAssembler extends XMLAttrAssembler {
    static get localName() {
        return XML_SPACE_LOCAL_NAME
    }
}

export function space(init) {
    return new XMLSpaceAttrAssembler(init)
}
