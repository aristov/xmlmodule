import {
    XMLDocumentAssembler,
    XMLBase,
    CDATASectionAssembler,
    XMLElementAssembler,
    XMLId,
    ProcessingInstructionAssembler,
    XMLLang,
    XMLSpace,
    XMLStylesheet,
    Xmlns
} from '../lib'

const xmldoc = new XMLDocumentAssembler({
    node : document,
    children : [
        new XMLStylesheet({ href : 'example.css' }),
        new XMLElementAssembler({
            attributes : [
                new XMLBase('http://example.org/'),
                new XMLId('example'),
                new XMLLang('ru'),
                new XMLSpace('preserve'),
                new Xmlns('http://example.org/namespace')
            ],
            children : new ProcessingInstructionAssembler('example')
        })
    ]
})

new CDATASectionAssembler({
    parentNode : xmldoc.documentElement,
    data : xmldoc.serialize()
})
