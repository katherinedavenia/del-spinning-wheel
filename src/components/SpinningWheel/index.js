import React, { useState } from 'react'
import WheelComponent from 'react-wheel-of-prizes';

const SpinningWheel = ({ size, style, onSpinFinish, selectedCountry, selectedOffering, selectedEmployee }) => {
  const countries = [
    'Indonesia',
    'Malaysia',
    'Singapore',
    'Vietnam',
    'Phillipines',
    'Hongkong',
  ];

  const offerings = [
    { name: 'AI&D', country: 'Indonesia' },
    { name: 'AI&D', country: 'Malaysia' },
    { name: 'AI&D', country: 'Singapore' },
    { name: 'AI&D', country: 'Vietnam' },
    { name: 'AI&D', country: 'Phillipines' },
    { name: 'AI&D', country: 'Hongkong' },
    { name: 'Finance', country: 'Indonesia' },
    { name: 'Finance', country: 'Malaysia' },
    { name: 'Finance', country: 'Singapore' },
    { name: 'Finance', country: 'Vietnam' },
    { name: 'Finance', country: 'Phillipines' },
    { name: 'Finance', country: 'Hongkong' },
    { name: 'IT', country: 'Indonesia' },
    { name: 'IT', country: 'Malaysia' },
    { name: 'IT', country: 'Singapore' },
    { name: 'IT', country: 'Vietnam' },
    { name: 'IT', country: 'Phillipines' },
    { name: 'IT', country: 'Hongkong' },
  ];

  const employees = [
    { name: 'Kevin', offering: 'AI&D', country: 'Indonesia' },
    { name: 'Vira', offering: 'AI&D', country: 'Indonesia' },
    { name: 'Ara', offering: 'AI&D', country: 'Indonesia' },
    { name: 'Ura', offering: 'AI&D', country: 'Indonesia' },
    { name: 'Victor', offering: 'AI&D', country: 'Malaysia'  },
    { name: 'Joji', offering: 'AI&D', country: 'Malaysia'  },
    { name: 'Joje', offering: 'AI&D', country: 'Malaysia'  },
    { name: 'Firas', offering: 'AI&D', country: 'Malaysia' },
    { name: 'Aul', offering: 'AI&D', country: 'Singapore'},
    { name: 'Aulah', offering: 'AI&D', country: 'Singapore'},
    { name: 'Ervira', offering: 'AI&D', country: 'Singapore'},
    { name: 'Husband', offering: 'AI&D', country: 'Singapore' },
    { name: 'Yoyo', offering: 'AI&D', country: 'Vietnam' },
    { name: 'Luis', offering: 'AI&D', country: 'Vietnam' },
    { name: 'Luisah', offering: 'AI&D', country: 'Vietnam' },
    { name: 'Yeye', offering: 'AI&D', country: 'Vietnam' },
    { name: 'Hayha', offering: 'AI&D', country: 'Phillipines' },
    { name: 'Haha', offering: 'AI&D', country: 'Phillipines' },
    { name: 'Yaya', offering: 'AI&D', country: 'Phillipines' },
    { name: 'Yiyi', offering: 'AI&D', country: 'Phillipines' },
    { name: 'Lala', offering: 'AI&D', country: 'Hongkong'  },
    { name: 'Jemo', offering: 'AI&D', country: 'Hongkong'  },
    { name: 'Jemy', offering: 'AI&D', country: 'Hongkong'  },
    { name: 'Lolo', offering: 'AI&D', country: 'Hongkong'  },
    { name: 'Ketrin', offering: 'Finance', country: 'Indonesia' },
    { name: 'Akbar', offering: 'Finance', country: 'Indonesia' },
    { name: 'Viras', offering: 'Finance', country: 'Indonesia' },
    { name: 'Akbarin', offering: 'Finance', country: 'Indonesia' },
    { name: 'Joseph Victor', offering: 'Finance', country: 'Malaysia' },
    { name: 'Babeh Victor', offering: 'Finance', country: 'Malaysia' },
    { name: 'Babeh', offering: 'Finance', country: 'Malaysia' },
    { name: 'Eythleina', offering: 'Finance', country: 'Malaysia' },
    { name: 'Pazzia', offering: 'Finance', country: 'Singapore'},
    { name: 'Laura', offering: 'Finance', country: 'Singapore'},
    { name: 'Cinta', offering: 'Finance', country: 'Singapore'},
    { name: 'Joko', offering: 'Finance', country: 'Singapore' },
    { name: 'Baba', offering: 'Finance', country: 'Vietnam' },
    { name: 'Honga', offering: 'Finance', country: 'Vietnam' },
    { name: 'Hongi', offering: 'Finance', country: 'Vietnam' },
    { name: 'Bebeb', offering: 'Finance', country: 'Vietnam' },
    { name: 'Bobo', offering: 'Finance', country: 'Phillipines' },
    { name: 'Tante', offering: 'Finance', country: 'Phillipines' },
    { name: 'Om', offering: 'Finance', country: 'Phillipines' },
    { name: 'Bibi', offering: 'Finance', country: 'Phillipines' },
    { name: 'Sierra', offering: 'Finance', country: 'Hongkong'  },
    { name: 'Bubu', offering: 'Finance', country: 'Hongkong'  },
    { name: 'Wati', offering: 'Finance', country: 'Hongkong'  },
    { name: 'Baby', offering: 'Finance', country: 'Hongkong'  },
    { name: 'Silvi', offering: 'IT', country: 'Indonesia' },
    { name: 'Reza', offering: 'IT', country: 'Indonesia' },
    { name: 'Gunawan', offering: 'IT', country: 'Indonesia' },
    { name: 'Via', offering: 'IT', country: 'Indonesia' },
    { name: 'Bong Chandra', offering: 'IT', country: 'Malaysia' },
    { name: 'Bong', offering: 'IT', country: 'Malaysia' },
    { name: 'Billy', offering: 'IT', country: 'Malaysia' },
    { name: 'Valen', offering: 'IT', country: 'Malaysia' },
    { name: 'Ado', offering: 'IT', country: 'Singapore'},
    { name: 'Alda', offering: 'IT', country: 'Singapore'},
    { name: 'Aldanira', offering: 'IT', country: 'Singapore'},
    { name: 'Asen', offering: 'IT', country: 'Singapore' },
    { name: 'Sisi', offering: 'IT', country: 'Vietnam' },
    { name: 'Cahaya', offering: 'IT', country: 'Vietnam' },
    { name: 'Aya', offering: 'IT', country: 'Vietnam' },
    { name: 'Sese', offering: 'IT', country: 'Vietnam' },
    { name: 'Soso', offering: 'IT', country: 'Phillipines' },
    { name: 'Siti', offering: 'IT', country: 'Phillipines' },
    { name: 'Billie Eilish', offering: 'IT', country: 'Phillipines' },
    { name: 'Sasa', offering: 'IT', country: 'Phillipines' },
    { name: 'Wiku', offering: 'IT', country: 'Hongkong'  },
    { name: 'Fafa', offering: 'IT', country: 'Hongkong'  },
    { name: 'Naufal', offering: 'IT', country: 'Hongkong'  },
    { name: 'Fifi', offering: 'IT', country: 'Hongkong'  },
  ];

  const countriesColors = [
    '#797d62',
    '#9b9b7a',
    '#d9ae94',
    '#b7b7a4',
    '#f1dca7',
    '#ffcb69',
    '#d08c60',
    '#997b66',
    '#dda15e',
    '#bc6c25'
  ];

  const offeringsColors = [
    '#e8a598',
    '#ffcdb2',
    '#fec5bb',
    '#fcd5ce',
    '#e5989b',
    '#f9e5d8',
    '#f9dcc4',
    '#fcd2af',
    '#fec89a',
    '#ffb4a2'
  ];

  const employeesColor = [
    '#eddcd2',
    '#fff1e6',
    '#fde2e4',
    '#4cc9f0',
    '#bcd4e6',
    '#dbe7e4',
    '#d6e2e9',
    '#bcd4e6',
    '#99c1de',
  ];

  const firstStep = !selectedCountry && !selectedOffering && !selectedEmployee;
  const secondStep = selectedCountry && !selectedOffering && !selectedEmployee;
  const thirdStep = selectedCountry && selectedOffering && !selectedEmployee;

  return (
    <div style={style}>
      {firstStep && (
        <WheelComponent
          segments={countries}
          segColors={countriesColors}
          onFinished={(value) => onSpinFinish(value)}
          primaryColor='white'
          contrastColor='black'
          buttonText='DRAW'
          isOnlyOnce={false}
          size={size}
          upDuration={100}
          downDuration={1000}
          fontFamily='Arial'
        />
      )}
      {secondStep && (
        <WheelComponent
          segments={offerings.filter(o => o.country === selectedCountry).map(o => o.name)}
          segColors={offeringsColors}
          onFinished={(value) => onSpinFinish(value)}
          primaryColor='white'
          contrastColor='black'
          buttonText='DRAW'
          isOnlyOnce={false}
          size={size}
          upDuration={100}
          downDuration={1000}
          fontFamily='Arial'
        />
      )}
      {thirdStep && (
        <WheelComponent
          segments={employees.filter(o => o.offering === selectedOffering && o.country === selectedCountry).map(e => e.name)}
          segColors={employeesColor}
          onFinished={(value) => onSpinFinish(value)}
          primaryColor='white'
          contrastColor='black'
          buttonText='DRAW'
          isOnlyOnce={false}
          size={size}
          upDuration={100}
          downDuration={1000}
          fontFamily='Arial'
        />
      )}
    </div>
  )
}

export default SpinningWheel;