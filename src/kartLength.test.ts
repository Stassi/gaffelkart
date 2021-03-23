import kartLength from './kartLength'

const kartLengthTestName = (zoom: number): string =>
  `length of zoom-${zoom} map in meters`

const expected = { 0: 128, 1: 256, 2: 512, 3: 1024, 4: 2048 }

test(kartLengthTestName(0), () => {
  expect(kartLength(0)).toBe(expected[0])
})

test(kartLengthTestName(1), () => {
  expect(kartLength(1)).toBe(expected[1])
})

test(kartLengthTestName(2), () => {
  expect(kartLength(2)).toBe(expected[2])
})

test(kartLengthTestName(3), () => {
  expect(kartLength(3)).toBe(expected[3])
})

test(kartLengthTestName(4), () => {
  expect(kartLength(4)).toBe(expected[4])
})
