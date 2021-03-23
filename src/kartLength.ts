export default function kartLength(zoom: number): number {
  return 2 ** (zoom + 7)
}
