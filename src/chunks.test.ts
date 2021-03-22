import chunks from './chunks'

const chunkTestName = (n: number): string =>
  `Return the correct length of ${n} chunk(s) in meters.`

test(chunkTestName(-1), () => {
  expect(chunks(-1)).toBe(-16)
})

test(chunkTestName(0), () => {
  expect(chunks(0)).toBe(0)
})

test(chunkTestName(0.5), () => {
  expect(chunks(0.5)).toBe(8)
})

test(chunkTestName(1), () => {
  expect(chunks(1)).toBe(16)
})

test(chunkTestName(2), () => {
  expect(chunks(2)).toBe(32)
})
