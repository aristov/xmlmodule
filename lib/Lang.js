import { XMLAttrAssembler } from './XMLAttrAssembler'

/**
 * @summary A special attribute named xml:lang may be inserted
 *  in documents to specify the language used in the contents
 *  and attribute values of any element in an XML document.
 * @see https://www.w3.org/TR/xml/#sec-lang-tag
 */
export class Lang extends XMLAttrAssembler {}
