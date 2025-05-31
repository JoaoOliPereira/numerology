export const gradientColors = [
  'linear-gradient(135deg, rgb(127, 90, 240), rgb(44, 182, 125))',
  'linear-gradient(135deg, rgb(142, 68, 173), rgb(41, 128, 185))',
  'linear-gradient(135deg, rgb(109, 213, 237), rgb(33, 147, 176))',
  'linear-gradient(135deg, rgb(161, 140, 209), rgb(251, 194, 235))',
  'linear-gradient(135deg, rgb(247, 151, 30), rgb(255, 210, 0))', 
  'linear-gradient(135deg, rgb(95, 44, 130), rgb(73, 160, 157))', 
  'linear-gradient(135deg, rgb(67, 206, 162), rgb(24, 90, 157))'
];

export function getRandomGradient() {
  const index = Math.floor(Math.random() * gradientColors.length);
  return gradientColors[index];
}

export function getTextColor(gradient){
  const rgbRegex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  
  const match = gradient.match(rgbRegex);
  if (!match) return '#fff';

  const [r, g, b] = match.map(Number);

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminance > 186 ? '#000' : '#fff';
}