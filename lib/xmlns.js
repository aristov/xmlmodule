import { AttrAssembler } from 'dommodule'

const TYPE_STRING = 'string'
const NAMESPACE_URI = 'http://www.w3.org/2000/xmlns/'

/**
 * @summary A namespace is declared using a family of reserved attributes.
 *  Such an attribute's name must either be xmlns or begin xmlns:.
 * @see {@link https://www.w3.org/TR/REC-xml-names}
 * @see {@link http://www.w3.org/2000/xmlns}
 */
export class XMLNSAttrAssembler extends AttrAssembler {
    /**
     * @param {*} [init]
     * @override
     */
    create(init) {
        if(!init || typeof init === TYPE_STRING) {
            super.create({ prefix : null, name : xmlns.name })
        }
        else super.create(init)
    }

    /**
     * @returns {String}
     * @override
     */
    static get prefix() {
        return xmlns.name
    }

    /**
     * @returns {String}
     * @override
     */
    static get namespace() {
        return NAMESPACE_URI
    }
}

/**
 *
 * @param {*} [init]
 * @returns {XMLNSAttrAssembler}
 */
export function xmlns(...init) {
    return new XMLNSAttrAssembler(...init)
}
