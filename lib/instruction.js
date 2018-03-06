import { CharacterDataAssembler } from 'dommodule'

const { keys } = Object
const { ProcessingInstruction, document } = window
const PI_ATTRIBUTES_SEPARATOR = ' '
const PI_ATTRIBUTES_SEPARATOR_RE = /\s+/
const TYPE_STRING = 'string'
const CHARACTER_EQUAL = '='

/**
 * @summary Processing instructions allow documents to contain instructions for applications.
 * @see {@link https://www.w3.org/TR/xml/#sec-pi}
 * @see {@link https://www.w3.org/TR/dom/#interface-processinginstruction}
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
     * @param {String} [target]
     * @param {String} [data]
     * @returns {ProcessingInstruction}
     */
    static create({
        target = this.target, 
        data = this.data
    } = this) {
        return document.createProcessingInstruction(target, data)
    }

    /**
     * @returns {String}
     */
    static get target() {
        return this === ProcessingInstructionAssembler?
            instruction.name :
            this.name.toLowerCase()
    }

    /**
     * @returns {window.ProcessingInstruction}
     */
    static get interface() {
        return ProcessingInstruction
    }
}

/**
 * @param {{}|Node|String|NodeAssembler|Array} [init]
 * @returns {ProcessingInstructionAssembler}
 */
export function instruction(...init) {
    return new ProcessingInstructionAssembler(...init)
}