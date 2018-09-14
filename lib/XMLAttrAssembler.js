import { AttrAssembler } from 'dommodule'

const XML_NAMESPACE_URI = 'http://www.w3.org/XML/1998/namespace'
const XML_NAMESPACE_PREFIX = 'xml'

/**
 * @summary The Name-AttValue pairs are referred to as the attribute specifications of the element.
 * @see https://www.w3.org/TR/xml/#dt-attr
 * @see http://www.w3.org/XML/1998/namespace
 */
export class XMLAttrAssembler extends AttrAssembler {
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
