import { NodeAssembler, TextAssembler } from 'dommodule'

const { Node, CDATASection, document } = window

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
     * @returns {window.CDATASection}
     * @override
     */
    static get interface() {
        return CDATASection
    }
}

NodeAssembler.CDATASectionAssembler = CDATASectionAssembler

const { assign } = Object
const { CDATA_SECTION_NODE } = Node
const resolver = Object.getOwnPropertyDescriptor(NodeAssembler, 'nodeTypeResolver').get

Object.defineProperties(NodeAssembler, {
    cdataSectionAssembler : {
        configurable : true,
        /**
         * @returns {Function} CDATASectionAssembler
         */
        get() {
            return CDATASectionAssembler
        }
    },
    nodeTypeResolver : {
        configurable : true,
        /**
         * @returns {{}}
         */
        get() {
            return assign(resolver.call(this), {
                [CDATA_SECTION_NODE] : this.cdataSectionAssembler
            })
        }
    }
})

/**
 * @param {*} [init]
 * @returns {CDATASectionAssembler}
 */
export function cdata(...init) {
    return new CDATASectionAssembler(...init)
}
