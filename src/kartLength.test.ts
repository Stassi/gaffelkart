import kartLength from './kartLength'

const expected = { 0: 128, 1: 256, 2: 512, 3: 1024, 4: 2048 }

test('length of zoom-0 map', () => {
  expect(kartLength(0)).toBe(expected[0])
})

test('length of zoom-1 map', () => {
  expect(kartLength(1)).toBe(expected[1])
})

test('length of zoom-2 map', () => {
  expect(kartLength(2)).toBe(expected[2])
})

test('length of zoom-3 map', () => {
  expect(kartLength(3)).toBe(expected[3])
})

test('length of zoom-4 map', () => {
  expect(kartLength(4)).toBe(expected[4])
})
