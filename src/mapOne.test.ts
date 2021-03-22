import mapOne from './mapOne'

const mapOneTestName = (x: number): string =>
  `Return the position at ${x} 1-zoom map-lengths in meters.`

test(mapOneTestName(-1), () => {
  expect(mapOne(-1)).toBe(-384)
})

test(mapOneTestName(0), () => {
  expect(mapOne(0)).toBe(-128)
})

test(mapOneTestName(0.5), () => {
  expect(mapOne(0.5)).toBe(0)
})

test(mapOneTestName(1), () => {
  expect(mapOne(1)).toBe(128)
})

test(mapOneTestName(2), () => {
  expect(mapOne(2)).toBe(384)
})
