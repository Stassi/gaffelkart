import kartLengths from './kartLengths'

const kartLengthTestName = (zoom: number): string =>
  `length of zoom-${zoom} map in meters`

const expected = { 0: 128, 1: 256, 2: 512, 3: 1024, 4: 2048 }

const lengthOne = (zoom: number): number => kartLengths(zoom)(1)

test(kartLengthTestName(0), () => {
  expect(lengthOne(0)).toBe(expected[0])
})

test(kartLengthTestName(1), () => {
  expect(lengthOne(1)).toBe(expected[1])
})

test(kartLengthTestName(2), () => {
  expect(lengthOne(2)).toBe(expected[2])
})

test(kartLengthTestName(3), () => {
  expect(lengthOne(3)).toBe(expected[3])
})

test(kartLengthTestName(4), () => {
  expect(lengthOne(4)).toBe(expected[4])
})
