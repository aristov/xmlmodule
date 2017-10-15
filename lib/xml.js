import { AttrAssembler } from 'dommodule'

const NAMESPACE_URI = 'http://www.w3.org/XML/1998/namespace'
const PREFIX = 'xml'

/**
 * http://www.w3.org/TR/xml/
 */
export class XMLAttrAssembler extends AttrAssembler {
    /**
     * @returns {String}
     */
    static get namespaceURI() {
        return NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return PREFIX
    }
}

/**
 * @param {*} [init]
 * @returns {XMLAttrAssembler}
 */
export function xml(...init) {
    return new XMLAttrAssembler(...init)
}
