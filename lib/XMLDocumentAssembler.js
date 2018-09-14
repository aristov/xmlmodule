import { DocumentAssembler } from 'dommodule'
import { XMLElementAssembler } from './XMLElementAssembler'

const { XMLDocument, document : { implementation } } = window
const serializer = new XMLSerializer

/**
 * @summary A data object is an XML document if it is well-formed,
 *  as defined in this specification {@link https://www.w3.org/TR/xml}.
 * @see https://www.w3.org/TR/xml/#document
 * @see https://www.w3.org/TR/dom/#xmldocument
 */
export class XMLDocumentAssembler extends DocumentAssembler {
    /**
     * @param {string} uri
     * @returns {boolean}
     */
    load(uri) {
        return this.node.load(uri)
    }

    /**
     * @returns {string}
     */
    serialize() {
        return serializer.serializeToString(this.node)
    }

    /**
     * Create the specified XMLDocument node
     * @param {*} [init]
     * @returns {Document}
     * @override
     */
    static create(init) {
        const doctype = new this.doctypeAssembler
        return implementation.createDocument(this.namespace, this.qualifiedName, doctype.node)
    }

    /**
     * Doctype redefenition facility
     * @returns {*|null}
     */
    static get doctype() {
        return null
    }

    /**
     * @returns {class} XMLElementAssembler
     * @override
     */
    static get elementAssembler() {
        return XMLElementAssembler
    }

    /**
     * @returns {interface} XMLDocument
     * @override
     */
    static get interface() {
        return XMLDocument
    }

    /**
     * The default namespace URI
     * @returns {string}
     * @override
     */
    static get namespace() {
        return this.elementAssembler.namespace
    }

    /**
     * The qualified name of the document element node
     * @returns {string}
     * @override
     */
    static get qualifiedName() {
        return this.elementAssembler.qualifiedName
    }
}

XMLElementAssembler.XMLDocumentAssembler = XMLDocumentAssembler
