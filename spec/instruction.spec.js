import chai from 'chai'
import { ProcessingInstructionAssembler, ElementAssembler } from 'dommodule'

const { assert } = chai
const { ProcessingInstruction, XMLSerializer, document } = window
const serializer = new XMLSerializer

describe('ProcessingInstructionAssembler', () => {
    describe('new ProcessingInstructionAssembler', () => {
        const test = new ProcessingInstructionAssembler
        const node = test.node
        it('node', () => {
            assert.instanceOf(node, ProcessingInstruction)
        })
        it('node.target', () => {
            assert.equal(node.target, ProcessingInstructionAssembler.target)
        })
        it('node.data', () => {
            assert.equal(node.data, ProcessingInstructionAssembler.data)
        })
        it('serializeToString(node)', () => {
            const sample = /^<\?instruction ?\?>$/
            assert.match(serializer.serializeToString(node), sample)
        })
    })
    describe('new ProcessingInstructionAssembler(new String)', () => {
        const test = new ProcessingInstructionAssembler('foobar')
        const node = test.node
        it('node.target', () => {
            assert.equal(node.target, ProcessingInstructionAssembler.target)
        })
        it('node.data', () => {
            assert.equal(node.data, 'foobar')
        })
        it('serializeToString(node)', () => {
            assert.equal(serializer.serializeToString(node), '<?instruction foobar?>')
        })
    })
    describe('new ProcessingInstructionAssembler({ target })', () => {
        const test = new ProcessingInstructionAssembler({ target : 'foobar' })
        const node = test.node
        it('node.target', () => {
            assert.equal(node.target, 'foobar')
        })
        it('node.data', () => {
            assert.equal(node.data, ProcessingInstructionAssembler.data)
        })
        it('serializeToString(node)', () => {
            const sample = /^<\?foobar ?\?>$/
            assert.match(serializer.serializeToString(node), sample)
        })
    })
    describe('new ProcessingInstructionAssembler({ data })', () => {
        const test = new ProcessingInstructionAssembler({ data : 'foobar' })
        const node = test.node
        it('node.target', () => {
            assert.equal(node.target, ProcessingInstructionAssembler.target)
        })
        it('node.data', () => {
            assert.equal(node.data, 'foobar')
        })
        it('serializeToString(node)', () => {
            assert.equal(serializer.serializeToString(node), '<?instruction foobar?>')
        })
    })
    describe('new ProcessingInstructionAssembler({ target, data })', () => {
        const test = new ProcessingInstructionAssembler({
            target : 'xml-stylesheet',
            data : 'href="./style.css"'
        })
        const node = test.node
        it('node.target', () => {
            assert.equal(node.target, 'xml-stylesheet')
        })
        it('node.data', () => {
            assert.equal(node.data, 'href="./style.css"')
        })
        it('serializeToString(node)', () => {
            const xml = serializer.serializeToString(node)
            const sample = '<?xml-stylesheet href="./style.css"?>'
            assert.equal(xml, sample)
        })
    })
    describe('new ProcessingInstructionAssembler({ attrset })', () => {
        const attrset = { foo : 'bar', '' : 'empty' }
        const test = new ProcessingInstructionAssembler({ attrset })
        const node = test.node
        it('node.target', () => {
            assert.equal(node.target, 'instruction')
        })
        it('node.data', () => {
            assert.equal(node.data, 'foo="bar"')
        })
        it('JSON.stringify(attrset)', () => {
            assert.equal(JSON.stringify(test.attrset), '{"foo":"bar"}')
        })
        it('serializeToString(node)', () => {
            const xml = serializer.serializeToString(node)
            const sample = '<?instruction foo="bar"?>'
            assert.equal(xml, sample)
        })
    })
    describe('new ProcessingInstructionAssembler({ attrset })', () => {
        const attrset = { foo : 'bar', cux : 'wiz' }
        const test = new ProcessingInstructionAssembler({ attrset })
        const node = test.node
        const _attrset = test.attrset
        it('node.target', () => {
            assert.equal(node.target, 'instruction')
        })
        it('attrset', () => {
            assert.equal(_attrset.foo, 'bar')
            assert.equal(_attrset.cux, 'wiz')
        })
    })
    describe('new ProcessingInstructionAssembler({ node })', () => {
        const node = document.createProcessingInstruction('foo', 'bar')
        const test = new ProcessingInstructionAssembler({ node })
        it('nodes equal', () => {
            assert.equal(test.node, node)
        })
    })
    describe('data = new String', () => {
        const test = new ProcessingInstructionAssembler
        const node = test.node
        test.data = 'foobar'
        it('node.data', () => {
            assert.equal(node.data, 'foobar')
        })
        it('data', () => {
            assert.equal(test.data, 'foobar')
        })
        it('serializeToString(node)', () => {
            assert.equal(serializer.serializeToString(node), '<?instruction foobar?>')
        })
    })
    describe('new ProcessingInstructionAssembler({ target, data, parentNode })', () => {
        const parent = new ElementAssembler
        const test = new ProcessingInstructionAssembler({
            target : 'foo',
            data : 'bar',
            parentNode : parent
        })
        const node = test.node
        it('node.parentNode', () => {
            assert.equal(node.parentNode, parent.node)
        })
        it('parentNode', () => {
            assert.equal(test.parentNode, parent)
        })
        it('serializeToString(element.node)', () => {
            const xml = serializer.serializeToString(parent.node)
            assert.equal(xml, '<element><?foo bar?></element>')
        })
    })
    describe('class extends ProcessingInstructionAssembler', () => {
        class FooBar extends ProcessingInstructionAssembler {}
        it('target', () => {
            assert.equal(FooBar.target, 'foobar')
        })
    })
})
