import { ElementAssembler } from 'dommodule'
import { XMLBase } from './XMLBase'
import { XMLId } from './XMLId'
import { XMLLang } from './XMLLang'
import { XMLSpace } from './XMLSpace'

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
    set xmlbase(base) {
        this.setAttr(XMLBase, base)
    }

    /**
     * @returns {string}
     */
    get xmlbase() {
        return this.getAttr(XMLBase)
    }

    /**
     * @param {string} id
     * @override
     */
    set xmlid(id) {
        this.setAttr(XMLId, id)
    }

    /**
     * @returns {string}
     * @override
     */
    get xmlid() {
        return this.getAttr(XMLId)
    }

    /**
     * @param {string} lang
     */
    set xmllang(lang) {
        this.setAttr(XMLLang, lang)
    }

    /**
     * @returns {string}
     */
    get xmllang() {
        return this.getAttr(XMLLang)
    }

    /**
     * @param {string} space
     */
    set xmlspace(space) {
        this.setAttr(XMLSpace, space)
    }

    /**
     * @returns {string}
     */
    get xmlspace() {
        return this.getAttr(XMLSpace)
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

    /**
     * @returns {class} XMLElementAssembler
     */
    static get superAssembler() {
        return XMLElementAssembler
    }
}
