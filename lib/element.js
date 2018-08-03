import { ElementAssembler } from 'dommodule'
import { Base } from './base'
import { Id } from './id'
import { Lang } from './lang'
import { Space } from './space'

let undefined
const { defineProperty } = Object

/**
 * @summary Each XML document contains one or more elements,
 *  the boundaries of which are either delimited by start-tags and end-tags,
 *  or, for empty elements, by an empty-element tag.
 * @see {@link https://www.w3.org/TR/xml/#dt-element}
 */
export class XMLElementAssembler extends ElementAssembler {
    /**
     * @param {string} name
     * @param {*} value
     */
    setPropertyFallback(name, value) {
        this.defineAttribute(name, value)
    }

    /**
     * @param {string} name
     * @param {string} [value]
     */
    defineAttribute(name, value) {
        defineProperty(this, name, {
            configurable : true,
            set(value) {
                this.setAttr(name, value)
            },
            get() {
                return this.getAttr(name)
            }
        })
        if(value !== undefined) {
            this[name] = value
        }
    }

    /**
     * @param {string} base
     */
    set base(base) {
        this.setAttr(Base, base)
    }

    /**
     * @returns {string}
     */
    get base() {
        return this.getAttr(Base)
    }

    /**
     * @param {string} id
     * @override
     */
    set id(id) {
        this.setAttr(Id, id)
    }

    /**
     * @returns {string}
     * @override
     */
    get id() {
        return this.getAttr(Id)
    }

    /**
     * @param {string} lang
     */
    set lang(lang) {
        this.setAttr(Lang, lang)
    }

    /**
     * @returns {string}
     */
    get lang() {
        return this.getAttr(Lang)
    }

    /**
     * @param {string} space
     */
    set space(space) {
        this.setAttr(Space, space)
    }

    /**
     * @returns {string}
     */
    get space() {
        return this.getAttr(Space)
    }

    /**
     * @returns {class} XMLDocumentAssembler
     */
    static get documentAssembler() {
        return XMLElementAssembler.XMLDocumentAssembler || super.documentAssembler
    }

    /**
     * @returns {class} XMLElementAssembler
     * @override
     */
    static get elementAssembler() {
        return XMLElementAssembler
    }
}
