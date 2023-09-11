const chords = [
  {
    name: 'C',
    variant: [
      {
        name: 'C',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,3,2,0,1,0],
      },
      {
        name: 'Cmin',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,3,1,0,1,3],
      },
      {
        name: 'C7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,3,2,3,1,0],
      },
      {
        name: 'Cm7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,3,1,3,1,3],
      },
      {
        name: 'CMaj7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,3,2,0,0,0],
      }
    ],
  },
  {
    name: 'C#',
    variant: [
      {
        name: 'C#',
        frets: [3,4,5,6,7],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,4,6,6,6,4],
      },
      {
        name: 'C#min',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,1,1,1],
        tab: [4,4,2,0,0,0],
      },
      {
        name: 'C#7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,1,1],
        tab: [1,4,3,4,0,0],
      },
      {
        name: 'C#m7',
        frets: [3,4,5,6,7],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,4,6,4,5,4],
      },
      {
        name: 'C#Maj7',
        frets: [3,4,5,6,7],
        mutedStrings: [0,0,0,0,1,1],
        tab: [4,3,3,6,0,0],
      }
    ],
  },
  {
    name: 'D',
    variant: [
      {
        name: 'D',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,0,2,3,2],
      },
      {
        name: 'Dmin',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,0,2,3,1],
      },
      {
        name: 'D7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,1,1,1],
        tab: [2,3,0,0,0,0],
      },
      {
        name: 'Dm7',
        frets: [5,6,7,8,9],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,5,7,5,6,5],
      },
      {
        name: 'DMaj7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,0,2,2,2],
      },
    ],
  },
  {
    name: 'D#',
    variant: [
      {
        name: 'D#',
        frets: [5,6,7,8,9],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,6,8,8,8,6],
      },
      {
        name: 'D#min',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,1,1,1],
        tab: [2,1,1,0,0,0],
      },
      {
        name: 'D#7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,1,0,2,3],
      },
      {
        name: 'D#m7',
        frets: [5,6,7,8,9],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,6,8,6,7,6],
      },
      {
        name: 'D#Maj7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,1,3,3,3],
      },
    ],
  },
  {
    name: 'E',
    variant: [
      {
        name: 'E',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,2,2,1,0,0],
      },
      {
        name: 'Emin',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [0,2,2,0,0,0],
      },
      {
        name: 'E7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,2,1,3,0],
      },
      {
        name: 'Em7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [0,2,2,0,3,0],
      },
      {
        name: 'EMaj7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [0,2,1,1,0,0],
      },
    ],
  },
  {
    name: 'F',
    variant: [
      {
        name: 'F',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [1,3,3,2,1,1],
      },
      {
        name: 'Fmin',
        frets: [1,2,3,4,5],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,3,1,1,1],
      },
      {
        name: 'F7',
        frets: [3,4,5,6,7],
        mutedStrings: [0,0,0,1,1,1],
        tab: [5,6,3,0,0,0],
      },
      {
        name: 'Fm7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [1,3,3,1,4,1],
      },
      {
        name: 'FMaj7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [1,3,2,2,1,1],
      },
    ],
  },
  {
    name: 'F#',
    variant: [
      {
        name: 'F#',
        frets: [1,2,3,4,6],
        mutedStrings: [0,0,0,0,0,0],
        tab: [2,4,4,3,2,2],
      },
      {
        name: 'F#min',
        frets: [1,2,3,4,6],
        mutedStrings: [0,0,0,0,0,0],
        tab: [2,4,4,2,2,2],
      },
      {
        name: 'F#7',
        frets: [1,2,3,4,6],
        mutedStrings: [0,0,0,1,1,1],
        tab: [2,1,2,0,0,0],
      },
      {
        name: 'F#m7',
        frets: [1,2,3,4,6],
        mutedStrings: [0,0,0,0,0,0],
        tab: [2,4,2,2,2,2],
      },
      {
        name: 'F#Maj7',
        frets: [1,2,3,4,6],
        mutedStrings: [0,0,0,0,0,0],
        tab: [2,4,3,3,2,2],
      },
    ],
  },
  {
    name: 'G',
    variant: [
      {
        name: 'G',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [3,2,0,0,0,3],
      },
      {
        name: 'Gmin',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [3,1,0,0,3,3],
      },
      {
        name: 'G7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [3,2,3,0,0,3],
      },
      {
        name: 'Gm7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [3,5,3,3,3,3],
      },
      {
        name: 'GMaj7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,0,0],
        tab: [3,5,4,4,3,3],
      },
    ],
  },
  {
    name: 'G#',
    variant: [
      {
        name: 'G#',
        frets: [3,4,5,6,7],
        mutedStrings: [0,0,0,0,0,0],
        tab: [4,6,6,5,4,4],
      },
      {
        name: 'G#min',
        frets: [3,4,5,6,7],
        mutedStrings: [1,1,0,0,0,0],
        tab: [0,0,6,4,4,4],
      },
      {
        name: 'G#7',
        frets: [3,4,5,6,7],
        mutedStrings: [1,1,1,0,0,0],
        tab: [0,0,0,1,1,2],
      },
      {
        name: 'G#m7',
        frets: [3,4,5,6,7],
        mutedStrings: [0,0,0,0,0,0],
        tab: [4,6,4,4,4,4],
      },
      {
        name: 'G#Maj7',
        frets: [3,4,5,6,7],
        mutedStrings: [0,0,0,0,0,0],
        tab: [4,6,5,5,4,4],
      },
    ],
  },
  {
    name: 'A',
    variant: [
      {
        name: 'A',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,0,2,2,2,0],
      },
      {
        name: 'Amin',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,0,2,2,1,0],
      },
      {
        name: 'A7',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,0,1,1],
        tab: [5,4,5,2,0,0],
      },
      {
        name: 'Am7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,0,2,0,1,0],
      },
      {
        name: 'AMaj7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,0,2,1,2,0],
      },
    ],
  },
  {
    name: 'A#',
    variant: [
      {
        name: 'A#',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,1,3,3,3,1],
      },
      {
        name: 'A#min',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,1,1],
        tab: [0,4,3,3,0,0],
      },
      {
        name: 'A#7',
        frets: [3,4,5,6,7],
        mutedStrings: [1,0,0,0,1,1],
        tab: [0,5,6,3,0,0],
      },
      {
        name: 'A#m7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,1,3,1,2,1],
      },
      {
        name: 'A#Maj7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,1,0,2,3,1],
      },
    ],
  },
  {
    name: 'B',
    variant: [
      {
        name: 'B',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,2,4,4,4,2],
      },
      {
        name: 'Bmin',
        frets: [1,2,3,4,5],
        mutedStrings: [0,0,0,1,1,1],
        tab: [2,2,0,0,0,0],
      },
      {
        name: 'B7',
        frets: [5,6,7,8,9],
        mutedStrings: [0,0,0,1,1,1],
        tab: [7,6,7,0,0,0],
      },
      {
        name: 'Bm7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,2,4,2,3,2],
      },
      {
        name: 'BMaj7',
        frets: [1,2,3,4,5],
        mutedStrings: [1,0,0,0,0,0],
        tab: [0,2,1,3,0,2],
      },
    ],
  },
]

export default chords