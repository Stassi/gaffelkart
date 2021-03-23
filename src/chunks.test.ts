import chunks from './chunks'

const chunkTestName = (n: number): string => `length of ${n} chunk(s) in meters`

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
