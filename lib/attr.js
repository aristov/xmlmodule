import { AttrAssembler } from 'dommodule'

const NAMESPACE_URI = 'http://www.w3.org/XML/1998/namespace'
const PREFIX = 'xml'

/**
 * @summary The Name-AttValue pairs are referred to as the attribute specifications of the element
 * @see {@link https://www.w3.org/TR/xml/#dt-attr}
 * @see {@link http://www.w3.org/XML/1998/namespace}
 */
export class XMLAttrAssembler extends AttrAssembler {
    /**
     * @override
     * @returns {String}
     */
    static get namespace() {
        return NAMESPACE_URI
    }

    /**
     * @override
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
