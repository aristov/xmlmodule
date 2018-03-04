# xmlmodule

_work in progress_

This JavaScript library provides a set of [DOM](https://www.w3.org/TR/dom) assemblers for the following [XML](https://www.w3.org/TR/xml) structures:

- The [xml:base](https://www.w3.org/TR/xmlbase) attribute
- The [xml:id](https://www.w3.org/TR/xml-id) attribute
- The [xml:lang](https://www.w3.org/TR/xml/#sec-lang-tag) attribute
- The [xml:space](https://www.w3.org/TR/xml/#sec-white-space) attribute
- The [Element](https://www.w3.org/TR/xml/#dt-element) [DOM interface](https://www.w3.org/TR/dom/#interface-element) with predefined accessors for the xml:* attributes
- The [XMLDocument](https://www.w3.org/TR/xml/#sec-documents) [DOM interface](https://www.w3.org/TR/dom/#xmldocument)
- The [ProcessingInstruction](https://www.w3.org/TR/xml/#sec-pi) [DOM interface](https://www.w3.org/TR/dom/#interface-processinginstruction)
- The [CDATASection](https://www.w3.org/TR/xml/#sec-cdata-sect) [DOM interface](https://dom.spec.whatwg.org/#interface-cdatasection)
- The [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet) processing instruction
- The [xmlns](https://www.w3.org/TR/REC-xml-names) attribute

## Example

```js
import {
    XMLDocumentAssembler,
    base, cdata, element, id, instruction,
    lang, space, stylesheet, xmlns
} from 'xmlmodule'

new XMLDocumentAssembler([
    stylesheet({ href : 'example.xsl' }),
    element({
        attributes : [
            base('http://example.org/'),
            id('example'),
            lang('ru'),
            space('preserve'),
            xmlns('http://example.org/namespace')
        ],
        childNodes : [
            instruction('example'),
            cdata('<<example>>')
        ]
    })
])
```

This code produces an XML document with the following structure:

```xml
<?xml-stylesheet href="example.xsl"?>
<element xml:base="http://example.org/"
         xml:id="example"
         xml:lang="ru"
         xml:space="preserve"
         xmlns="http://example.org/namespace">
    <?instruction example?>
    <![CDATA[<<example>>]]>
</element>
```

## Installation

```
npm install xmlmodule
```

## Development

```
git clone git@github.com:aristov/xmlmodule.git
cd xmlmodule
npm install
npm run watch
```

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/xmlmodule/master/LICENSE)
