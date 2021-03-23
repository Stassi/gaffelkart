export default function length({
  boundary = false,
  zoom,
}: {
  boundary?: boolean
  zoom: number
}): (n: number) => number {
  return (n: number) => 2 ** (zoom + 7) * (n - (boundary ? 0.5 : 0))
}
