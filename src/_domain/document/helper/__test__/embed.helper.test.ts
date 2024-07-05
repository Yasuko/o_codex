import { describe, expect, test, vi, vitest } from 'vitest'
import { 
    textToEmbed
 } from '../embed.helper'

describe('Embed Helper Test', () => {
    test('textToEmbed Test', async () => {
        // HashServiceのモック
        vi.mock('../../../_model/embed.model', () => {
            return {
                EmbedModel: {
                    call: vitest.fn(() => {
                        return {
                            callEmbed: vitest.fn(() => {
                                return {
                                    data: [{
                                        embedding: [1, 2, 3]
                                    }]
                                }
                            })
                        }
                    
                    })
                }}
            }
        )
        const text = [['aaa', 'bbb', 'ccc']]
        const result = [
            [
                [1, 2, 3],
                [1, 2, 3],
                [1, 2, 3]
            ]
        ]
        
        const r = await textToEmbed(text)
        expect(r).toStrictEqual(result)
    })

})

