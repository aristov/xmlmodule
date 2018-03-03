import {
    XMLDocumentAssembler,
    base, cdata, element, id,
    lang, space, stylesheet, xmlns
} from '../lib'

const xmldoc = new XMLDocumentAssembler({
    node : document,
    childNodes : [
        stylesheet({ href : 'example.css' }),
        element({
            attributes : [
                base('http://example.org/'),
                id('example'),
                lang('ru'),
                space('preserve'),
                xmlns('http://example.org/namespace')
            ]
        })
    ]
})

xmldoc.documentElement.append(cdata(xmldoc.serialize()))
