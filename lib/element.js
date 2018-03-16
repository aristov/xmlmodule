import { ElementAssembler } from 'dommodule'
import { Base } from './base'
import { Id } from './id'
import { Lang } from './lang'
import { Space } from './space'

const { defineProperty } = Object
const TYPE_UNDEFINED = 'undefined'

/**
 * @summary Each XML document contains one or more elements,
 *  the boundaries of which are either delimited by start-tags and end-tags,
 *  or, for empty elements, by an empty-element tag.
 * @see {@link https://www.w3.org/TR/xml/#dt-element}
 */
export class XMLElementAssembler extends ElementAssembler {
    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(value !== undefined) {
            if(name in this.constructor) void null
            else if(name in this) {
                this[name] = value
            }
            else if(name in this._target) {
                this._target[name] = value
            }
            else this.defineAttribute(name, value)
        }
    }

    /**
     * @param {String} name
     * @param {String} [value]
     */
    defineAttribute(name, value) {
        defineProperty(this, name, {
            configurable : true,
            set(value) {
                this.setAttribute(name, value)
            },
            get() {
                return this.getAttribute(name)
            }
        })
        if(typeof value !== TYPE_UNDEFINED) {
            this[name] = value
        }
    }

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
     * @returns {Function} XMLElementAssembler
     * @override
     */
    static get elementAssembler() {
        return XMLElementAssembler
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
