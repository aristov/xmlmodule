import { DocumentAssembler, DocumentTypeAssembler } from 'dommodule'
import { XMLElementAssembler } from './element'

const { XMLDocument, document : { implementation } } = window
const DEFAULT_DOCTYPE = null
const DEFAULT_QUALIFIED_NAME = 'document'
const serializer = new XMLSerializer

/**
 * @summary A data object is an XML document if it is well-formed,
 *  as defined in this specification {@link https://www.w3.org/TR/xml}.
 * @see {@link https://www.w3.org/TR/xml/#document}
 * @see {@link https://www.w3.org/TR/dom/#xmldocument}
 */
export class XMLDocumentAssembler extends DocumentAssembler {
    /**
     * @param {String} uri
     * @returns {Boolean}
     */
    load(uri) {
        return this.node.load(uri)
    }

    /**
     * @returns {String}
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
        const {
            namespace = this.namespace,
            qualifiedName = this.qualifiedName,
            doctype = this.doctype
        } = init || this
        return implementation.createDocument(
            namespace,
            qualifiedName,
            doctype instanceof DocumentTypeAssembler?
                doctype.node :
                doctype)
    }

    /**
     * Doctype redefenition facility
     * @returns {*|null}
     */
    static get doctype() {
        return DEFAULT_DOCTYPE
    }

    /**
     * @returns {Function} XMLElementAssembler
     * @override
     */
    static get elementAssembler() {
        return XMLElementAssembler
    }

    /**
     * @returns {window.XMLDocument}
     * @override
     */
    static get interface() {
        return XMLDocument
    }

    /**
     * The default namespace URI
     * @returns {String}
     * @override
     */
    static get namespace() {
        return this.elementAssembler.namespace
    }

    /**
     * The qualified name of the document element node
     * @returns {String}
     * @override
     */
    static get qualifiedName() {
        return this === XMLDocumentAssembler?
            DEFAULT_QUALIFIED_NAME :
            this.elementAssembler.qualifiedName
    }
}

Object.defineProperty(XMLElementAssembler, 'documentAssembler', {
    configurable : true,
    /**
     * @returns {Function} XMLDocumentAssembler
     */
    get() {
        return XMLDocumentAssembler
    }
})
