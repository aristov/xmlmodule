import { ProcessingInstructionAssembler } from 'dommodule'

const { assign } = Object

const XML_STYLESHEET_TARGET = 'xml-stylesheet'

/**
 * https://www.w3.org/TR/xml-stylesheet/
 */
export class XMLStylesheet extends ProcessingInstructionAssembler {
    /**
     * @param {String} href
     */
    set href(href) {
        this.data = assign(this.data, { href })
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.data.href
    }

    /**
     *
     * @param {String} type
     */
    set type(type) {
        this.data = assign(this.data, { type })
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.data.type
    }

    /**
     * @param {String} title
     */
    set title(title) {
        this.data = assign(this.data, { title })
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.data.title
    }

    /**
     * @param {String} media
     */
    set media(media) {
        this.data = assign(this.data, { media })
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.data.media
    }

    /**
     * @param {String} charset
     */
    set charset(charset) {
        this.data = assign(this.data, { charset })
    }

    /**
     * @returns {String}
     */
    get charset() {
        return this.data.charset
    }

    /**
     * @param {String} alternate
     */
    set alternate(alternate) {
        this.data = assign(this.data, { alternate })
    }

    /**
     * @returns {String}
     */
    get alternate() {
        return this.data.alternate
    }

    /**
     * @returns {String}
     */
    static get target() {
        return XML_STYLESHEET_TARGET
    }
}

/**
 * @param {*} [init]
 * @returns {XMLStylesheet}
 */
export function stylesheet(init) {
    return new XMLStylesheet(init)
}
