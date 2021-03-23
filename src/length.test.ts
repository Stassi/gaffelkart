import length from './length'

describe('chunk lengths', () => {
  const chunks = length({ zoom: -3 })

  const chunkTestName = (n: number): string =>
    `length of ${n} chunk(s) in meters`

  const expected = {
    '-1': -16,
    0: 0,
    0.5: 8,
    1: 16,
    2: 32,
  }

  test(chunkTestName(-1), () => {
    expect(chunks(-1)).toBe(expected[-1])
  })

  test(chunkTestName(0), () => {
    expect(chunks(0)).toBe(expected[0])
  })

  test(chunkTestName(0.5), () => {
    expect(chunks(0.5)).toBe(expected[0.5])
  })

  test(chunkTestName(1), () => {
    expect(chunks(1)).toBe(expected[1])
  })

  test(chunkTestName(2), () => {
    expect(chunks(2)).toBe(expected[2])
  })
})

describe('map lengths', () => {
  const kartLengthTestName = (zoom: number): string =>
    `length of zoom-${zoom} map in meters`

  const expectedLength = { 0: 128, 1: 256, 2: 512, 3: 1024, 4: 2048 }

  const lengthOne = (zoom: number): number => length({ zoom })(1)

  test(kartLengthTestName(0), () => {
    expect(lengthOne(0)).toBe(expectedLength[0])
  })

  test(kartLengthTestName(1), () => {
    expect(lengthOne(1)).toBe(expectedLength[1])
  })

  test(kartLengthTestName(2), () => {
    expect(lengthOne(2)).toBe(expectedLength[2])
  })

  test(kartLengthTestName(3), () => {
    expect(lengthOne(3)).toBe(expectedLength[3])
  })

  test(kartLengthTestName(4), () => {
    expect(lengthOne(4)).toBe(expectedLength[4])
  })
})

describe.each([
  [0, { '-1': -192, 0: -64, 0.5: 0, 1: 64, 2: 192 }],
  [1, { '-1': -384, 0: -128, 0.5: 0, 1: 128, 2: 384 }],
  [2, { '-1': -768, 0: -256, 0.5: 0, 1: 256, 2: 768 }],
  [3, { '-1': -1536, 0: -512, 0.5: 0, 1: 512, 2: 1536 }],
  [4, { '-1': -3072, 0: -1024, 0.5: 0, 1: 1024, 2: 3072 }],
])('zoom-%i boundary', (zoom, expected) => {
  const position = length({ zoom, boundary: true })

  test('position at -1', () => {
    expect(position(-1)).toBe(expected[-1])
  })

  test('position at 0', () => {
    expect(position(0)).toBe(expected[0])
  })

  test('position at 0.5', () => {
    expect(position(0.5)).toBe(expected[0.5])
  })

  test('position at 1', () => {
    expect(position(1)).toBe(expected[1])
  })

  test('position at 2', () => {
    expect(position(2)).toBe(expected[2])
  })
})
