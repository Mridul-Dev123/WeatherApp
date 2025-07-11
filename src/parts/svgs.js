 const svgs={
  "clear-day": 
  `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="100%" height="100%" fill="#212121"/>

  <!-- Sun Glow -->
  <circle cx="100" cy="100" r="40" fill="#FFD93B" fill-opacity="0.2"/>

  <!-- Sun Core -->
  <circle cx="100" cy="100" r="25" fill="#FFD93B"/>

  <!-- Sun Rays (modern rounded, thinner) -->
  <g stroke="#FFD93B" stroke-width="4" stroke-linecap="round">
    <line x1="100" y1="60" x2="100" y2="40"/>
    <line x1="100" y1="140" x2="100" y2="160"/>
    <line x1="60" y1="100" x2="40" y2="100"/>
    <line x1="140" y1="100" x2="160" y2="100"/>
    <line x1="72" y1="72" x2="60" y2="60"/>
    <line x1="128" y1="72" x2="140" y2="60"/>
    <line x1="72" y1="128" x2="60" y2="140"/>
    <line x1="128" y1="128" x2="140" y2="140"/>
  </g>
</svg>
`,
  "clear-night": `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121"/>

  <!-- Moon glow -->
  <circle cx="40" cy="20" r="14" fill="#F0E68C" fill-opacity="0.08"/>

  <!-- Crescent moon (curved, elegant) -->
  <path d="M42 22 
           A10 10 0 1 1 32 12 
           A7.5 7.5 0 1 0 42 22" 
        fill="#F0E68C" fill-opacity="0.9"/>

  <!-- Stylized stars (thin modern cross stars) -->
  <g stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round">
    <line x1="10" y1="10" x2="10" y2="12.5"/>
    <line x1="8.75" y1="11.25" x2="11.25" y2="11.25"/>

    <line x1="20" y1="25" x2="20" y2="27.5"/>
    <line x1="18.75" y1="26.25" x2="21.25" y2="26.25"/>

    <line x1="50" y1="10" x2="50" y2="12.5"/>
    <line x1="48.75" y1="11.25" x2="51.25" y2="11.25"/>
  </g>
</svg>
`,
  "cloudy": `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121"/>

  <!-- Cloud base -->
  <path d="M20 38
           a8 8 0 0 1 6 -7
           a7 7 0 0 1 13 -1
           a6 6 0 0 1 2 12
           h-21
           a5 5 0 0 1 0 -10" 
        fill="#B0BEC5"/>

  <!-- Optional soft glow -->
  <circle cx="33" cy="31" r="12" fill="#B0BEC5" fill-opacity="0.05"/>
</svg>
`,
  "fog": `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121"/>

  <!-- Cloud base -->
  <path d="M20 38
           a8 8 0 0 1 6 -7
           a7 7 0 0 1 13 -1
           a6 6 0 0 1 2 12
           h-21
           a5 5 0 0 1 0 -10" 
        fill="#B0BEC5"/>

  <!-- Optional soft glow -->
  <circle cx="33" cy="31" r="12" fill="#B0BEC5" fill-opacity="0.05"/>
</svg>
`,
  "hail": `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121"/>

  <!-- Cloud -->
  <path d="M20 30
           a8 8 0 0 1 6 -7
           a7 7 0 0 1 13 -1
           a6 6 0 0 1 2 12
           h-21
           a5 5 0 0 1 0 -10" 
        fill="#B0BEC5"/>

  <!-- Hail stones (simple rounded drops) -->
  <g fill="#90CAF9">
    <circle cx="22" cy="46" r="2"/>
    <circle cx="30" cy="48" r="2"/>
    <circle cx="38" cy="46" r="2"/>
  </g>
</svg>
`,
  "partly-cloudy-day":`<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121" />

  <!-- Sun Glow -->
  <circle cx="20" cy="20" r="12" fill="#FFD93B" fill-opacity="0.1" />

  <!-- Sun Core -->
  <circle cx="20" cy="20" r="6" fill="#FFD93B" />

  <!-- Sun Rays -->
  <g stroke="#FFD93B" stroke-width="1.5" stroke-linecap="round">
    <line x1="20" y1="8" x2="20" y2="4"/>
    <line x1="20" y1="32" x2="20" y2="36"/>
    <line x1="8" y1="20" x2="4" y2="20"/>
    <line x1="32" y1="20" x2="36" y2="20"/>
    <line x1="11" y1="11" x2="8" y2="8"/>
    <line x1="29" y1="11" x2="32" y2="8"/>
    <line x1="11" y1="29" x2="8" y2="32"/>
    <line x1="29" y1="29" x2="32" y2="32"/>
  </g>

  <!-- Cloud in front of sun -->
  <path d="M24 36
           a6 6 0 0 1 5 -5
           a5.5 5.5 0 0 1 10 -0.5
           a5 5 0 0 1 1 10
           h-17
           a4 4 0 0 1 0 -8" 
        fill="#B0BEC5"/>
</svg>
`,
  "partly-cloudy-night": `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121"/>

  <!-- Moon Glow -->
  <circle cx="20" cy="20" r="12" fill="#F0E68C" fill-opacity="0.08"/>

  <!-- Crescent Moon -->
  <path d="M22 22 
           A8 8 0 1 1 14 14 
           A6 6 0 1 0 22 22" 
        fill="#F0E68C" fill-opacity="0.9"/>

  <!-- Cloud -->
  <path d="M24 36
           a6 6 0 0 1 5 -5
           a5.5 5.5 0 0 1 10 -0.5
           a5 5 0 0 1 1 10
           h-17
           a4 4 0 0 1 0 -8" 
        fill="#B0BEC5"/>
</svg>
`,
  "rain-snow-showers-day":`<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121" />

  <!-- Sun Glow -->
  <circle cx="18" cy="18" r="10" fill="#FFD93B" fill-opacity="0.1"/>

  <!-- Sun Core -->
  <circle cx="18" cy="18" r="5" fill="#FFD93B" />

  <!-- Sun Rays -->
  <g stroke="#FFD93B" stroke-width="1.2" stroke-linecap="round">
    <line x1="18" y1="6" x2="18" y2="3"/>
    <line x1="18" y1="30" x2="18" y2="33"/>
    <line x1="6" y1="18" x2="3" y2="18"/>
    <line x1="30" y1="18" x2="33" y2="18"/>
    <line x1="9" y1="9" x2="6.5" y2="6.5"/>
    <line x1="27" y1="9" x2="29.5" y2="6.5"/>
  </g>

  <!-- Cloud overlapping sun -->
  <path d="M25 36
           a6 6 0 0 1 5 -5
           a5.5 5.5 0 0 1 10 -0.5
           a5 5 0 0 1 1 10
           h-17
           a4 4 0 0 1 0 -8" 
        fill="#B0BEC5"/>

  <!-- Rain Drops -->
  <g fill="#90CAF9">
    <circle cx="26" cy="48" r="1.8"/>
    <circle cx="31" cy="50" r="1.8"/>
  </g>

  <!-- Snowflakes (crossed lines) -->
  <g stroke="#FFFFFF" stroke-width="0.9" stroke-linecap="round">
    <line x1="36" y1="47" x2="38" y2="49"/>
    <line x1="38" y1="47" x2="36" y2="49"/>
  </g>
</svg>
`,
  "rain-snow-showers-night": `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121"/>

  <!-- Moon (back, peeking from cloud) -->
  <path d="M24 22 
           A9 9 0 1 1 15 13 
           A6.5 6.5 0 1 0 24 22" 
        fill="#F0E68C" fill-opacity="0.9"/>

  <!-- Cloud (centered over moon) -->
  <path d="M20 30
           a6 6 0 0 1 5 -5
           a5.5 5.5 0 0 1 10 -0.5
           a5 5 0 0 1 1 9
           h-16
           a4 4 0 0 1 0 -8" 
        fill="#B0BEC5"/>

  <!-- Precipitation below cloud -->
  <!-- Raindrops -->
  <g fill="#90CAF9">
    <circle cx="25" cy="44" r="1.5"/>
    <circle cx="30" cy="46" r="1.5"/>
  </g>

  <!-- Snowflake (centered between drops) -->
  <g stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round">
    <line x1="35" y1="43" x2="37" y2="45"/>
    <line x1="37" y1="43" x2="35" y2="45"/>
  </g>
</svg>
`,
  "rain-snow": "<svg><!-- SVG content for rain snow icon --></svg>",
  "rain": `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="60" height="60" fill="#212121"/>

  <!-- Cloud (centered) -->
  <path d="M20 28
           a6 6 0 0 1 5 -5
           a5.5 5.5 0 0 1 10 -0.5
           a5 5 0 0 1 1 9
           h-16
           a4 4 0 0 1 0 -8" 
        fill="#B0BEC5"/>

  <!-- Rain drops (tight below cloud) -->
  <g fill="#90CAF9">
    <circle cx="23" cy="42" r="1.6"/>
    <circle cx="28" cy="45" r="1.6"/>
    <circle cx="33" cy="42" r="1.6"/>
  </g>
</svg>
`,
  "showers-day": "<svg><!-- SVG content for showers day icon --></svg>",
  "showers-night": "<svg><!-- SVG content for showers night icon --></svg>",
  "sleet": "<svg><!-- SVG content for sleet icon --></svg>",
  "snow-showers-day": "<svg><!-- SVG content for snow showers day icon --></svg>",
  "snow-showers-night": "<svg><!-- SVG content for snow showers night icon --></svg>",
  "snow": "<svg><!-- SVG content for snow icon --></svg>",
  "thunder-rain": "<svg><!-- SVG content for thunder rain icon --></svg>",
  "thunder-showers-day": "<svg><!-- SVG content for thunder showers day icon --></svg>",
  "thunder-showers-night": "<svg><!-- SVG content for thunder showers night icon --></svg>",
  "thunder": "<svg><!-- SVG content for thunder icon --></svg>",
  "wind": "<svg><!-- SVG content for wind icon --></svg>"
}

export default svgs;

