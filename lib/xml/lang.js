import { XMLAttrAssembler } from './xml'

/**
 * https://www.w3.org/TR/xml/#sec-lang-tag
 */

const XML_LANG_LOCAL_NAME = 'lang'

export class XMLLangAttrAssembler extends XMLAttrAssembler {
    static get localName() {
        return XML_LANG_LOCAL_NAME
    }
}

export function lang(init) {
    return new XMLLangAttrAssembler(init)
}
