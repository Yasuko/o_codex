import { describe, expect, test, vi, vitest } from 'vitest'
import { ParseHelper } from '../parse.helper'

describe('ParseHelper Test', () => {
    test('MergeOption Test', async () => {
        // HashServiceのモック
        vi.mock('../../../../_lib/hash/hash.service', () => {
            return {
                HashService: {
                    call: vitest.fn(() => {
                        return {
                            sha256: vitest.fn(() => {
                                return 'aabbccddee'
                            })
                        }
                    
                    })
                }}
            }
        )
        const options = {
            title: 'aaa',
            text: 'bbb',
            url: 'ccc',
            index: 0
        }
        const result = {
            title: 'aaa',
            url: 'ccc',
            loading: false,
            embedding: false,
            document: [],
            key: 'aabbccddee',
            chunk: []
        }
        const r = await ParseHelper.call().mergeOption(options)
        expect(r).toStrictEqual(result)
    }),
    test('ParseHelper Chunk Method Test', () => {
        // 320文字
        const txt = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        // 200文字と、120文字の配列
        const result = [[
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            ,
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            +'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        ]]
        expect(ParseHelper.call()
                .chunkText([txt]))
                .toStrictEqual(result)
    }),
    test('ScoreToDocument Test', () => {
        const score = [
            {score: 0.1, index1: 0, index2: 0, index3: 0},
            {score: 0.2, index1: 0, index2: 1, index3: 0},
            {score: 0.3, index1: 0, index2: 2, index3: 0},
        ]
        const document = [['a', 'b', 'c'], ['a', 'b', 'c'], ['a', 'b', 'c']]
        const chunk = [[['a'], ['b'], ['c']], [['a'], ['b'], ['c']], [['a'], ['b'], ['c']]]
        const title = ['a', 'b', 'c']
        const url = ['a', 'b', 'c']
        const result = [
            {score: 0.1, document: 'a', chunk: 'a', title: 'a', url: 'a'},
            {score: 0.2, document: 'b', chunk: 'b', title: 'a', url: 'a'},
            {score: 0.3, document: 'c', chunk: 'c', title: 'a', url: 'a'},
        ]
        expect(ParseHelper.call()
                .scoreToDocument(score, document, chunk, title, url))
                .toStrictEqual(result)
    })
})

