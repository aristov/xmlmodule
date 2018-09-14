import { XMLAttrAssembler } from './XMLAttrAssembler'

/**
 * @summary The attribute xml:base may be inserted in XML documents to specify
 *  a base URI other than the base URI of the document or external entity.
 * @see https://www.w3.org/TR/xmlbase
 */
export class Base extends XMLAttrAssembler {}

/**
 * @param {*} [init]
 * @returns {Base}
 */
export function base(...init) {
    return new Base(...init)
}
