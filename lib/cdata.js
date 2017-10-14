import { TextAssembler, document } from 'dommodule'

/**
 * CDATASection DOM node assembler
 */
export class CDATASectionAssembler extends TextAssembler {
    /**
     * Create the specified CDATASection node
     * @param {String} init.data
     * @returns {CDATASection}
     */
    static create(init) {
        return document.createCDATASection(init.data)
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
