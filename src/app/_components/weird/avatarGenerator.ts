import seedrandom from 'seedrandom';

const colors = [
  '#FF0000', '#FFA500', '#FFFF00', // Red, Orange, Yellow
  '#00FF00', '#0000FF', '#800080', // Green, Blue, Purple
  '#FF1493', '#00CED1', '#FF4500'  // Deep Pink, Dark Turquoise, Orange Red
];

export function generateMetallicAvatar(userId: string, size: number = 40) {
  const rng = seedrandom(userId);

  // Generate random shapes
  const shapes = [
    ...Array.from({ length: 10 }, () => ({
      type: 'circle',
      cx: rng() * size,
      cy: rng() * size,
      r: (rng() * size / 4) + size / 8,
      color: colors[Math.floor(rng() * colors.length)],
    })),
    ...Array.from({ length: 10 }, () => ({
      type: 'line',
      x1: rng() * size,
      y1: rng() * size,
      x2: rng() * size,
      y2: rng() * size,
      color: colors[Math.floor(rng() * colors.length)],
    })),
  ];

  // Create SVG
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="circle">
          <circle cx="${size/2}" cy="${size/2}" r="${size/2}" />
        </clipPath>
        <filter id="metallic">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lighting-color="#FFFFFF" result="specular">
            <fePointLight x="-5000" y="-10000" z="20000" />
          </feSpecularLighting>
          <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular" />
          <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>
      </defs>
      <g clip-path="url(#circle)">
        ${shapes.map(shape => {
          if ('cx' in shape) {
            return `<circle cx="${shape.cx}" cy="${shape.cy}" r="${shape.r}" fill="${shape.color}" opacity="0.7" />`;
          } else {
            return `<line x1="${shape.x1}" y1="${shape.y1}" x2="${shape.x2}" y2="${shape.y2}" stroke="${shape.color}" stroke-width="4" opacity="0.7" />`;
          }
        }).join('')}
        <line x1="0" y1="0" x2="${size}" y2="${size}" stroke="#808080" stroke-width="2" />
      </g>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
