import { NodeAssembler, CharacterDataAssembler } from 'dommodule'

const { keys } = Object
const { Node, ProcessingInstruction, document } = window
const PI_ATTRIBUTES_SEPARATOR = ' '
const PI_ATTRIBUTES_SEPARATOR_RE = /\s+/
const TYPE_STRING = 'string'
const CHARACTER_EQUAL = '='

/**
 * @summary Processing instructions allow documents to contain instructions for applications.
 * @see https://www.w3.org/TR/xml/#sec-pi
 * @see https://www.w3.org/TR/dom/#interface-processinginstruction
 */
export class ProcessingInstructionAssembler extends CharacterDataAssembler {
    /**
     * @param {{}} attrset
     */
    set attrset(attrset) {
        const result = []
        keys(attrset).forEach(key => {
            if(key) result.push(key + `="${ attrset[key] }"`)
        })
        this.data = result.join(PI_ATTRIBUTES_SEPARATOR)
    }

    /**
     * @returns {{}}
     */
    get attrset() {
        const data = this.data.split(PI_ATTRIBUTES_SEPARATOR_RE)
        return data.reduce((res, pair) => {
            const [key, value] = pair.split(CHARACTER_EQUAL)
            if(typeof value === TYPE_STRING) {
                res[key] = value.substr(1, value.length - 2)
            }
            return res
        }, {})
    }

    /**
     * @param {string} [target]
     * @param {string} [data]
     * @returns {ProcessingInstruction}
     * @override
     */
    static create({
        target = this.target,
        data = this.data
    } = this) {
        return document.createProcessingInstruction(target, data)
    }

    /**
     * @returns {string}
     */
    static get target() {
        return this.name.toLowerCase()
    }

    /**
     * @returns {window.ProcessingInstruction}
     * @override
     */
    static get interface() {
        return ProcessingInstruction
    }
}

NodeAssembler.ProcessingInstructionAssembler = ProcessingInstructionAssembler

const { PROCESSING_INSTRUCTION_NODE } = Node

Object.defineProperties(NodeAssembler, {
    processingInstructionAssembler : {
        configurable : true,
        /**
         * @returns {Function} ProcessingInstructionAssembler
         */
        get() {
            return ProcessingInstructionAssembler
        }
    },
    getAssemblerOf : {
        configurable : true,
        /**
         * @returns {{}}
         */
        value : function(node) {
            return node.nodeType === PROCESSING_INSTRUCTION_NODE?
                this.processingInstructionAssembler :
                super.getAssemblerOf(node)
        }
    }
})
