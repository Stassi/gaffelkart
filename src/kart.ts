export default function kart(zoom: number): (x: number) => number {
  return (x: number): number => 2 ** (zoom + 7) * (x - 0.5)
}
