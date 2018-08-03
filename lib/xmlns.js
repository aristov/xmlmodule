import { AttrAssembler } from 'dommodule'

const XMLNS_NAMESPACE_URI = 'http://www.w3.org/2000/xmlns/'
const XMLNS_PREFIX = 'xmlns'

/**
 * @summary A namespace is declared using a family of reserved attributes.
 *  Such an attribute's name must either be xmlns or begin xmlns:.
 * @see https://www.w3.org/TR/REC-xml-names
 * @see http://www.w3.org/2000/xmlns/
 */
export class Xmlns extends AttrAssembler {
    /**
     * @returns {String}
     * @override
     */
    static get prefix() {
        return XMLNS_PREFIX
    }

    /**
     * @returns {String}
     * @override
     */
    static get namespace() {
        return XMLNS_NAMESPACE_URI
    }
}
