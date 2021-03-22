import chunks from './chunks'

const testName = (n: number) => `Return the correct length of ${n} chunk(s).`

test(testName(-1), () => {
  expect(chunks(-1)).toBe(-16)
})

test(testName(0), () => {
  expect(chunks(0)).toBe(0)
})

test(testName(0.5), () => {
  expect(chunks(0.5)).toBe(8)
})

test(testName(1), () => {
  expect(chunks(1)).toBe(16)
})

test(testName(2), () => {
  expect(chunks(2)).toBe(32)
})
