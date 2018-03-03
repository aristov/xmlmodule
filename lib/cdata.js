import { TextAssembler } from 'dommodule'

const { document } = window

/**
 * @summary CDATA sections may occur anywhere character data may occur;
 *  they are used to escape blocks of text containing characters
 *  which would otherwise be recognized as markup.
 * @see {@link https://dom.spec.whatwg.org/#interface-cdatasection}
 * @see {@link https://www.w3.org/TR/xml/#sec-cdata-sect}
 */
export class CDATASectionAssembler extends TextAssembler {
    /**
     * Create the specified CDATASection node
     * @param {String} data
     * @returns {CDATASection}
     * @override
     */
    static create({ data = this.data } = this) {
        return document.createCDATASection(data)
    }

    /**
     * @returns {Function}
     * @override
     */
    static get interface() {
        return CDATASection
    }
}

/**
 * CDATASection assembler factory
 * @param {{}|Node|String|NodeAssembler|Array} [init]
 * @returns {CDATASectionAssembler}
 */
export function cdata(...init) {
    return new CDATASectionAssembler(...init)
}
