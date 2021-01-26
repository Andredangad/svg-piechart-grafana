type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'red' | 'yellow' | 'blue';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  colors:CircleColor;
}
