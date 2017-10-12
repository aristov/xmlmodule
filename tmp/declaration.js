/**
 * https://www.w3.org/TR/xml
 */

/**
 * Note: an XML declaration actually is not an XML processing instruction.
 * We define it as a PI subclass just for convenience.
 */
import { ProcessingInstructionAssembler } from 'dommodule'

const { assign } = Object

const XML_DECLARATION_TARGET = 'xml'
const DEFAULT_XML_VERSION = '1.0'
const DEFAULT_XML_ENCODING = 'UTF-8'

export class XMLDeclaration extends ProcessingInstructionAssembler {
    /**
     * @param {String} version
     */
    set version(version) {
        this.data = assign(this.data, { version })
    }

    /**
     * @returns {String}
     */
    get version() {
        return this.data.version
    }

    /**
     * @param {String} encoding
     */
    set encoding(encoding) {
        this.data = assign(this.data, { encoding })
    }

    /**
     * @returns {String}
     */
    get encoding() {
        return this.data.encoding
    }

    /**
     * @returns {String}
     */
    static get target() {
        return XML_DECLARATION_TARGET
    }

    /**
     * @returns {String}
     */
    static get version() {
        return DEFAULT_XML_VERSION
    }

    /**
     * @returns {String}
     */
    static get encoding() {
        return DEFAULT_XML_ENCODING
    }

    /**
     * @returns {Object}
     */
    static get data() {
        return { version : this.version, encoding : this.encoding }
    }
}

/**
 * @param {*} init
 * @returns {XMLDeclaration}
 */
export function declaration(init) {
    return new XMLDeclaration(init)
}
