import kartLengths from './kartLengths'

export default function kartBoundary(zoom: number): (n: number) => number {
  return (n: number): number => kartLengths(zoom)(n - 0.5)
}
