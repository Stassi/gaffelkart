import kart from './kart'

describe.each([
  [0, { '-1': -192, 0: -64, '0.5': 0, 1: 64, 2: 192 }],
  [1, { '-1': -384, 0: -128, '0.5': 0, 1: 128, 2: 384 }],
  [2, { '-1': -768, 0: -256, '0.5': 0, 1: 256, 2: 768 }],
  [3, { '-1': -1536, 0: -512, '0.5': 0, 1: 512, 2: 1536 }],
  [4, { '-1': -3072, 0: -1024, '0.5': 0, 1: 1024, 2: 3072 }],
])('zoom: %i', (zoom, expected) => {
  const position = kart(zoom)

  test('position at -1', () => {
    expect(position(-1)).toBe(expected[-1])
  })

  test('position at 0', () => {
    expect(position(0)).toBe(expected[0])
  })

  test('position at 1', () => {
    expect(position(1)).toBe(expected[1])
  })

  test('position at 2', () => {
    expect(position(2)).toBe(expected[2])
  })
})
