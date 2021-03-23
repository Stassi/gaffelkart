import kartLength from './kartLength'

export default function kartBoundary(zoom: number): (x: number) => number {
  return (x: number): number => kartLength(zoom) * (x - 0.5)
}
