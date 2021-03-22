import kart from './kart'

const mapZero = kart(0)

const mapZeroTestName = (x: number): string =>
  `Return the position at ${x} 0-zoom map-lengths in meters.`

test(mapZeroTestName(-1), () => {
  expect(mapZero(-1)).toBe(-192)
})

test(mapZeroTestName(0), () => {
  expect(mapZero(0)).toBe(-64)
})

test(mapZeroTestName(0.5), () => {
  expect(mapZero(0.5)).toBe(0)
})

test(mapZeroTestName(1), () => {
  expect(mapZero(1)).toBe(64)
})

test(mapZeroTestName(2), () => {
  expect(mapZero(2)).toBe(192)
})
