import { ElementAssembler } from 'dommodule'
import { Base } from './base'
import { Id } from './id'
import { Lang } from './lang'
import { Space } from './space'
import { XMLAttrAssembler } from './attr'
import { XMLDocumentAssembler } from './document'

/**
 * @summary Each XML document contains one or more elements,
 *  the boundaries of which are either delimited by start-tags and end-tags,
 *  or, for empty elements, by an empty-element tag.
 * @see {@link https://www.w3.org/TR/xml/#dt-element}
 */
export class XMLElementAssembler extends ElementAssembler {
    /**
     * @param {String} base
     */
    set base(base) {
        this.setAttribute(Base, base)
    }

    /**
     * @returns {String}
     */
    get base() {
        return this.getAttribute(Base)
    }

    /**
     * @param {String} id
     * @override
     */
    set id(id) {
        this.setAttribute(Id, id)
    }

    /**
     * @returns {String}
     * @override
     */
    get id() {
        return this.getAttribute(Id)
    }

    /**
     * @param {String} lang
     */
    set lang(lang) {
        this.setAttribute(Lang, lang)
    }

    /**
     * @returns {String}
     */
    get lang() {
        return this.getAttribute(Lang)
    }

    /**
     * @param {String} space
     */
    set space(space) {
        this.setAttribute(Space, space)
    }

    /**
     * @returns {String}
     */
    get space() {
        return this.getAttribute(Space)
    }

    /**
     * @returns {Function} XMLAttrAssembler
     * @override
     */
    static get attrAssembler() {
        return XMLAttrAssembler
    }

    /**
     * @returns {XMLElementAssembler}
     * @override
     */
    static get elementAssembler() {
        return XMLElementAssembler
    }

    /**
     * @returns {Function} XMLDocumentAssembler
     * @override
     */
    static get documentAssembler() {
        return XMLDocumentAssembler
    }

    /**
     * @returns {String}
     * @override
     */
    static get localName() {
        return this === XMLElementAssembler?
            element.name :
            super.localName
    }
}

/**
 * @param {*} [init]
 * @returns {XMLElementAssembler}
 */
export function element(...init) {
    return new XMLElementAssembler(...init)
}
