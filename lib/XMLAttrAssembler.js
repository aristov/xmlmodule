import { AttrAssembler } from 'dommodule'

const EMPTY_STRING = ''
const XML_CLASS_PREFIX_RE = /^XML/i
const XML_NAMESPACE_PREFIX = 'xml'
const XML_NAMESPACE_URI = 'http://www.w3.org/XML/1998/namespace'

/**
 * @summary The Name-AttValue pairs are referred to as the attribute specifications of the element.
 * @see https://www.w3.org/TR/xml/#dt-attr
 * @see http://www.w3.org/XML/1998/namespace
 */
export class XMLAttrAssembler extends AttrAssembler {
    /**
     * @returns {string}
     * @override
     */
    static get localName() {
        return super.localName.replace(XML_CLASS_PREFIX_RE, EMPTY_STRING)
    }

    /**
     * @returns {String}
     * @override
     */
    static get namespace() {
        return XML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     * @override
     */
    static get prefix() {
        return XML_NAMESPACE_PREFIX
    }
}
