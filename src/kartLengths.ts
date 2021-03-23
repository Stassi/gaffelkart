export default function kartLengths(zoom: number): (n: number) => number {
  return (n: number) => 2 ** (zoom + 7) * n
}
