import { XMLAttrAssembler } from './XMLAttrAssembler'

/**
 * @summary A special attribute named xml:space may be attached
 *  to an element to signal an intention that in that element,
 *  white space should be preserved by applications.
 * @see https://www.w3.org/TR/xml/#sec-white-space
 */
export class XMLSpace extends XMLAttrAssembler {}
