/**
 * http://www.w3.org/TR/xml/
 */

import { AttrAssembler } from 'dommodule'

export const XML_NAMESPACE_URI = 'https://www.w3.org/XML/1998/namespace'
export const XML_PREFIX = 'xml'

export class XMLAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return XML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return XML_PREFIX
    }
}
