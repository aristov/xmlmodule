import { NodeAssembler, TextAssembler } from 'dommodule'

const { Node, CDATASection, document } = window

/**
 * @summary CDATA sections may occur anywhere character data may occur;
 *  they are used to escape blocks of text containing characters
 *  which would otherwise be recognized as markup.
 * @see https://dom.spec.whatwg.org/#interface-cdatasection
 * @see https://www.w3.org/TR/xml/#sec-cdata-sect
 */
export class CDATASectionAssembler extends TextAssembler {
    /**
     * Create the specified CDATASection node
     * @returns {CDATASection}
     * @override
     */
    static create() {
        return document.createCDATASection(this.data)
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

const { CDATA_SECTION_NODE } = Node

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
    getAssemblerOf : {
        configurable : true,
        /**
         * @returns {{}}
         */
        value : function(node) {
            return node.nodeType === CDATA_SECTION_NODE?
                this.cdataSectionAssembler :
                super.getAssemblerOf(node)
        }
    }
})
