import { TYPE_STRING ,AttrAssembler } from 'dommodule'

const NAMESPACE_URI = 'http://www.w3.org/2000/xmlns/'

/**
 * https://www.w3.org/TR/REC-xml-names/
 */
export class XMLNSAttrAssembler extends AttrAssembler {
    /**
     * @param {*} [init]
     * @returns {init}
     */
    create(init) {
        return !init || typeof init === TYPE_STRING?
            super.create({ prefix : null, name : xmlns.name }) :
            super.create(init)
    }

    /**
     *
     * @returns {String}
     */
    static get prefix() {
        return xmlns.name
    }

    /**
     *
     * @returns {String}
     */
    static get namespaceURI() {
        return NAMESPACE_URI
    }
}

/**
 *
 * @param {*} init
 * @returns {XMLNSAttrAssembler}
 */
export function xmlns(...init) {
    return new XMLNSAttrAssembler(...init)
}
