import { AttrAssembler } from 'dommodule'
import { XMLElementAssembler } from './element'

const XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
const XML_PREFIX = 'xml'

/**
 * @summary The Name-AttValue pairs are referred to as the attribute specifications of the element
 * @see {@link https://www.w3.org/TR/xml/#dt-attr}
 * @see {@link http://www.w3.org/XML/1998/namespace}
 */
export class XMLAttrAssembler extends AttrAssembler {
    /**
     * @returns {Function} XMLElementAssembler
     */
    static get elementAssembler() {
        return XMLElementAssembler
    }

    /**
     * @override
     * @returns {String}
     */
    static get namespace() {
        return XML_NAMESPACE
    }

    /**
     * @override
     * @returns {String}
     */
    static get prefix() {
        return XML_PREFIX
    }
}
