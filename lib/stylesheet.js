import { ProcessingInstructionAssembler } from './instruction'

const { assign } = Object
const XML_STYLESHEET_TARGET = 'xml-stylesheet'

/**
 * @summary A processing instruction information item is said to be a potential
 *  xml-stylesheet processing instruction if it has the [target] property xml-stylesheet
 *  and it either is in the [children] property of a document information item and appears
 *  before the element information item of the document information item's [children] property,
 *  or it appears in the [children] property of a document type declaration information item.
 * @see {@link https://www.w3.org/TR/xml-stylesheet}
 */
export class XMLStylesheet extends ProcessingInstructionAssembler {
    /**
     * @param {String} href
     */
    set href(href) {
        this.attrset = assign(this.attrset, { href })
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.attrset.href
    }

    /**
     *
     * @param {String} type
     */
    set type(type) {
        this.attrset = assign(this.attrset, { type })
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.attrset.type
    }

    /**
     * @param {String} title
     */
    set title(title) {
        this.attrset = assign(this.attrset, { title })
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.attrset.title
    }

    /**
     * @param {String} media
     */
    set media(media) {
        this.attrset = assign(this.attrset, { media })
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.attrset.media
    }

    /**
     * @param {String} charset
     */
    set charset(charset) {
        this.attrset = assign(this.attrset, { charset })
    }

    /**
     * @returns {String}
     */
    get charset() {
        return this.attrset.charset
    }

    /**
     * @param {String} alternate
     */
    set alternate(alternate) {
        this.attrset = assign(this.attrset, { alternate })
    }

    /**
     * @returns {String}
     */
    get alternate() {
        return this.attrset.alternate
    }

    /**
     * @returns {String}
     * @override
     */
    static get target() {
        return XML_STYLESHEET_TARGET
    }
}

/**
 * @param {*} [init]
 * @returns {XMLStylesheet}
 */
export function stylesheet(...init) {
    return new XMLStylesheet(...init)
}
