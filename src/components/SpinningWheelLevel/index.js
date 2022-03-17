import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import '../style.css';
import DrawButton from '../DrawButton';

const countries = [
    { option: 'Brunei', style: { backgroundColor: '#797d62' } },
    { option: 'Indonesia', style: { backgroundColor: '#9b9b7a' } },
    { option: 'Malaysia', style: { backgroundColor: '#baa587' } },
    { option: 'Myanmar', style: { backgroundColor: '#d9ae94' } },
    { option: 'Phillipines', style: { backgroundColor: '#ddbea9' } },
    { option: 'Singapore', style: { backgroundColor: '#f1dca7' } },
    { option: 'Thailand', style: { backgroundColor: '#e8ac65' } },
    { option: 'Vietnam', style: { backgroundColor: '#997b66' } },
];

const levels = [
    { option: 'Level1', country: 'Brunei', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level2', country: 'Brunei', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level1', country: 'Indonesia', style: { backgroundColor: '#dde5b6' } },
    { option: 'Level2', country: 'Indonesia', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level3', country: 'Indonesia', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level4', country: 'Indonesia', style: { backgroundColor: '#adc178' } },
    { option: 'Level5', country: 'Indonesia', style: { backgroundColor: '#f19c79' } },
    { option: 'Level6', country: 'Indonesia', style: { backgroundColor: '#a98467' } },
    { option: 'Level7', country: 'Indonesia', style: { backgroundColor: '#a47148' } },
    { option: 'Level8', country: 'Indonesia', style: { backgroundColor: '#d4a276' } },
    { option: 'Level9', country: 'Indonesia', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level10', country: 'Indonesia', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level11', country: 'Indonesia', style: { backgroundColor: '#dde5b6' } },
    { option: 'Level12', country: 'Indonesia', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level13', country: 'Indonesia', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level14', country: 'Indonesia', style: { backgroundColor: '#adc178' } },
    { option: 'Level15', country: 'Indonesia', style: { backgroundColor: '#f19c79' } },
    { option: 'Level16', country: 'Indonesia', style: { backgroundColor: '#a98467' } },
    { option: 'Level17', country: 'Indonesia', style: { backgroundColor: '#a47148' } },
    { option: 'Level18', country: 'Indonesia', style: { backgroundColor: '#d4a276' } },
    { option: 'Level19', country: 'Indonesia', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level20', country: 'Indonesia', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level21', country: 'Indonesia', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level22', country: 'Indonesia', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level1', country: 'Malaysia', style: { backgroundColor: '#adc178' } },
    { option: 'Level2', country: 'Malaysia', style: { backgroundColor: '#f19c79' } },
    { option: 'Level3', country: 'Malaysia', style: { backgroundColor: '#a98467' } },
    { option: 'Level4', country: 'Malaysia', style: { backgroundColor: '#a47148' } },
    { option: 'Level5', country: 'Malaysia', style: { backgroundColor: '#d4a276' } },
    { option: 'Level6', country: 'Malaysia', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level7', country: 'Malaysia', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level8', country: 'Malaysia', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level9', country: 'Malaysia', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level10', country: 'Malaysia', style: { backgroundColor: '#adc178' } },
    { option: 'Level11', country: 'Malaysia', style: { backgroundColor: '#f19c79' } },
    { option: 'Level12', country: 'Malaysia', style: { backgroundColor: '#a98467' } },
    { option: 'Level13', country: 'Malaysia', style: { backgroundColor: '#a47148' } },
    { option: 'Level14', country: 'Malaysia', style: { backgroundColor: '#d4a276' } },
    { option: 'Level15', country: 'Malaysia', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level16', country: 'Malaysia', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level17', country: 'Malaysia', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level18', country: 'Malaysia', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level19', country: 'Malaysia', style: { backgroundColor: '#adc178' } },
    { option: 'Level20', country: 'Malaysia', style: { backgroundColor: '#f19c79' } },
    { option: 'ai d', country: 'Malaysia', style: { backgroundColor: '#a98467' } },
    { option: 'finance', country: 'Malaysia', style: { backgroundColor: '#a47148' } },
    { option: 'Level1', country: 'Myanmar', style: { backgroundColor: '#d4a276' } },
    { option: 'Level2', country: 'Myanmar', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level3', country: 'Myanmar', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level4', country: 'Myanmar', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level5', country: 'Myanmar', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level1', country: 'Phillipines', style: { backgroundColor: '#adc178' } },
    { option: 'Level2', country: 'Phillipines', style: { backgroundColor: '#f19c79' } },
    { option: 'Level3', country: 'Phillipines', style: { backgroundColor: '#a98467' } },
    { option: 'Level4', country: 'Phillipines', style: { backgroundColor: '#a47148' } },
    { option: 'Level5', country: 'Phillipines', style: { backgroundColor: '#d4a276' } },
    { option: 'Level6', country: 'Phillipines', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level7', country: 'Phillipines', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level8', country: 'Phillipines', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level9', country: 'Phillipines', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level10', country: 'Phillipines', style: { backgroundColor: '#adc178' } },
    { option: 'Level11', country: 'Phillipines', style: { backgroundColor: '#f19c79' } },
    { option: 'Level12', country: 'Phillipines', style: { backgroundColor: '#a98467' } },
    { option: 'Level13', country: 'Phillipines', style: { backgroundColor: '#a47148' } },
    { option: 'Level14', country: 'Phillipines', style: { backgroundColor: '#d4a276' } },
    { option: 'Level15', country: 'Phillipines', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Cust Strategy AP & Design', country: 'Phillipines', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level17', country: 'Phillipines', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level18', country: 'Phillipines', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level19', country: 'Phillipines', style: { backgroundColor: '#adc178' } },
    { option: 'Level20', country: 'Phillipines', style: { backgroundColor: '#f19c79' } },
    { option: 'Level1', country: 'Singapore', style: { backgroundColor: '#a98467' } },
    { option: 'Level2', country: 'Singapore', style: { backgroundColor: '#a47148' } },
    { option: 'Level3', country: 'Singapore', style: { backgroundColor: '#d4a276' } },
    { option: 'Level4', country: 'Singapore', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level5', country: 'Singapore', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level6', country: 'Singapore', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level7', country: 'Singapore', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level8', country: 'Singapore', style: { backgroundColor: '#adc178' } },
    { option: 'Level9', country: 'Singapore', style: { backgroundColor: '#f19c79' } },
    { option: 'Level10', country: 'Singapore', style: { backgroundColor: '#a98467' } },
    { option: 'Level11', country: 'Singapore', style: { backgroundColor: '#a47148' } },
    { option: 'Level12', country: 'Singapore', style: { backgroundColor: '#d4a276' } },
    { option: 'Level13', country: 'Singapore', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level14', country: 'Singapore', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level15', country: 'Singapore', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level16', country: 'Singapore', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level17', country: 'Singapore', style: { backgroundColor: '#adc178' } },
    { option: 'Level18', country: 'Singapore', style: { backgroundColor: '#f19c79' } },
    { option: 'Level19', country: 'Singapore', style: { backgroundColor: '#a98467' } },
    { option: 'Level20', country: 'Singapore', style: { backgroundColor: '#a47148' } },
    { option: 'Level21', country: 'Singapore', style: { backgroundColor: '#d4a276' } },
    { option: 'Level22', country: 'Singapore', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level23', country: 'Singapore', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level24', country: 'Singapore', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level25', country: 'Singapore', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level26', country: 'Singapore', style: { backgroundColor: '#adc178' } },
    { option: 'Level27', country: 'Singapore', style: { backgroundColor: '#f19c79' } },
    { option: 'Level28', country: 'Singapore', style: { backgroundColor: '#a98467' } },
    { option: 'Level29', country: 'Singapore', style: { backgroundColor: '#a47148' } },
    { option: 'Level30', country: 'Singapore', style: { backgroundColor: '#d4a276' } },
    { option: 'Level31', country: 'Singapore', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level1', country: 'Thailand', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level2', country: 'Thailand', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level3', country: 'Thailand', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level4', country: 'Thailand', style: { backgroundColor: '#adc178' } },
    { option: 'Level5', country: 'Thailand', style: { backgroundColor: '#f19c79' } },
    { option: 'Level6', country: 'Thailand', style: { backgroundColor: '#a98467' } },
    { option: 'Level7', country: 'Thailand', style: { backgroundColor: '#a47148' } },
    { option: 'Level8', country: 'Thailand', style: { backgroundColor: '#d4a276' } },
    { option: 'Level9', country: 'Thailand', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level10', country: 'Thailand', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level11', country: 'Thailand', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level12', country: 'Thailand', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level13', country: 'Thailand', style: { backgroundColor: '#adc178' } },
    { option: 'Level14', country: 'Thailand', style: { backgroundColor: '#f19c79' } },
    { option: 'Level15', country: 'Thailand', style: { backgroundColor: '#a98467' } },
    { option: 'Level16', country: 'Thailand', style: { backgroundColor: '#a47148' } },
    { option: 'Level17', country: 'Thailand', style: { backgroundColor: '#d4a276' } },
    { option: 'Level18', country: 'Thailand', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level19', country: 'Thailand', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level20', country: 'Thailand', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level21', country: 'Thailand', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level22', country: 'Thailand', style: { backgroundColor: '#adc178' } },
    { option: 'Level23', country: 'Thailand', style: { backgroundColor: '#f19c79' } },
    { option: 'Level24', country: 'Thailand', style: { backgroundColor: '#a98467' } },
    { option: 'Level1', country: 'Vietnam', style: { backgroundColor: '#a47148' } },
    { option: 'Level2', country: 'Vietnam', style: { backgroundColor: '#d4a276' } },
    { option: 'Level3', country: 'Vietnam', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level4', country: 'Vietnam', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level5', country: 'Vietnam', style: { backgroundColor: '#d4e09b' } },
    { option: 'Level6', country: 'Vietnam', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level7', country: 'Vietnam', style: { backgroundColor: '#adc178' } },
    { option: 'Level8', country: 'Vietnam', style: { backgroundColor: '#f19c79' } },
    { option: 'Level9', country: 'Vietnam', style: { backgroundColor: '#a98467' } },
    { option: 'Level10', country: 'Vietnam', style: { backgroundColor: '#a47148' } },
    { option: 'Level11', country: 'Vietnam', style: { backgroundColor: '#d4a276' } },
    { option: 'Level12', country: 'Vietnam', style: { backgroundColor: '#f6f4d2' } },
    { option: 'Level13', country: 'Vietnam', style: { backgroundColor: '#f0ead2' } },
    { option: 'Level14', country: 'Vietnam', style: { backgroundColor: '#d4e09b' } }, 
    { option: 'Level15', country: 'Vietnam', style: { backgroundColor: '#cbdfbd' } },
    { option: 'Level16', country: 'Vietnam', style: { backgroundColor: '#adc178' } },
    { option: 'Level17', country: 'Vietnam', style: { backgroundColor: '#f19c79' } },
    { option: 'Level18', country: 'Vietnam', style: { backgroundColor: '#a98467' } },
];

  const employees = [
    { option: 'my name is...', level: 'Level1', country: 'Brunei', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Brunei', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level1', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level3', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level4', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level5', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level6', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level7', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level8', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level9', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level10', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level11', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level12', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level13', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level14', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level15', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level16', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level17', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level18', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level19', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level20', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level21', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level22', country: 'Indonesia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level1', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level3', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level4', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level5', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level6', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level7', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level8', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level9', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level10', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level11', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level12', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level13', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level14', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level15', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level16', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level17', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level18', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level19', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level20', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level21', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level22', country: 'Malaysia', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level1', country: 'Myanmar', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Myanmar', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level3', country: 'Myanmar', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level4', country: 'Myanmar', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level5', country: 'Myanmar', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level1', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level3', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level4', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level5', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level6', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level7', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level8', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level9', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level10', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level11', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level12', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level13', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level14', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level15', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level16', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level17', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level18', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level19', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level20', country: 'Phillipines', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level1', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level3', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level4', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level5', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level6', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level7', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level8', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level9', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level10', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level11', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level12', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level13', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level14', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level15', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level16', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level17', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level18', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level19', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level20', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level21', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level22', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level23', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level24', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level25', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level26', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level27', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level28', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level29', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level30', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level31', country: 'Singapore', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level1', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level3', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level4', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level5', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level6', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level7', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level8', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level9', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level10', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level11', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level12', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level13', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level14', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level15', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level16', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level17', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level18', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level19', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level20', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level21', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level22', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level23', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level24', country: 'Thailand', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level1', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level2', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level3', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level4', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level5', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level6', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level7', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level8', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level9', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level10', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level11', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level12', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level13', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level14', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level15', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level16', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level17', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
    { option: 'my name is...', level: 'Level18', country: 'Vietnam', style: { backgroundColor: '#DDDDDD' } },
  ];

const SpinningWheelLevel = ({ onSpinFinish, selectedCountry, selectedLevel, selectedEmployee }) => {
  const [mustSpin, setMustSpin] = useState(false);

  const firstStep = !selectedCountry && !selectedLevel && !selectedEmployee;
  const secondStep = selectedCountry && !selectedLevel && !selectedEmployee;
  const thirdStep = selectedCountry && selectedLevel && !selectedEmployee;

  const dataLevelsFiltered = levels.filter(o => o.country === selectedCountry).map(o => ( { option: o.option, style: o.style } ))
  const dataEmployeesFiltered = employees.filter(e => e.level === selectedLevel && e.country === selectedCountry).map(e => ( { option: e.option, style: e.style } ))

  function definedFontSize(employee) {
    if(employee.length > 80){
        return 6
    } if(employee.length < 80 && employee.length > 60){
        return 7
    } if(employee.length < 60 && employee.length > 20){
        return 10
    } else {
        return 12
    }
  };

  function definedTextDistance(employee) {
    if(employee.length > 80){
        return 80
    } if(employee.length < 80 && employee.length > 40){
        return 75
    } else {
        return 65
    }
  };

  const [prizeNumber, setPrizeNumber] = useState(1);
  const [prizeNumberLevel, setPrizeNumberLevel] = useState(1);
  const [prizeNumberEmployee, setPrizeNumberEmployee] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * countries.length);
    const newPrizeNumberLevel = Math.floor(Math.random() * dataLevelsFiltered.length);
    const newPrizeNumberEmployee = Math.floor(Math.random() * dataEmployeesFiltered.length);
    setPrizeNumber(newPrizeNumber);
    setPrizeNumberLevel(newPrizeNumberLevel);
    setPrizeNumberEmployee(newPrizeNumberEmployee);
    setMustSpin(true);
    setIsSpinning(true);
  };

  return (
      <div>
            {firstStep &&
                <>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={countries}
                        onStopSpinning={() => {
                            setMustSpin(false)
                            onSpinFinish(countries[prizeNumber].option);
                        }}
                        outerBorderWidth={2}
                        outerBorderColor="white"
                        innerRadius={20}
                        innerBorderWidth={10}
                        innerBorderColor="white"
                        radiusLineColor="white"
                        fontSize={14}
                        textDistance={70}
                        radiusLineWidth={1}
                    />
                    <DrawButton disabled={isSpinning} label="SPIN" onClick={handleSpinClick} />
                </>
            }
            {secondStep && (
                <>
                    <Wheel
                        mustStartSpinning={true}
                        prizeNumber={prizeNumberLevel}
                        data={dataLevelsFiltered}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            onSpinFinish(dataLevelsFiltered[prizeNumberLevel].option);
                        }}
                        outerBorderWidth={2}
                        outerBorderColor="white"
                        innerRadius={20}
                        innerBorderWidth={10}
                        innerBorderColor="white"
                        radiusLineColor="white"
                        fontSize={11}
                        textDistance={60}
                        radiusLineWidth={1}
                    />
                    <DrawButton disabled={isSpinning} label="SPIN" onClick={handleSpinClick} />
                </>
            )}
            {thirdStep && (
                <>
                    <Wheel
                        mustStartSpinning={true}
                        prizeNumber={prizeNumberEmployee}
                        data={dataEmployeesFiltered}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            onSpinFinish(dataEmployeesFiltered[prizeNumberEmployee].option);
                            setTimeout(() => {
                                setIsSpinning(false);
                            }, 10000);
                        }}
                        outerBorderWidth={2}
                        outerBorderColor="white"
                        innerRadius={20}
                        innerBorderWidth={10}
                        innerBorderColor="white"
                        radiusLineColor="white"
                        fontSize={definedFontSize(dataEmployeesFiltered)}
                        textDistance={definedTextDistance(dataEmployeesFiltered)}
                        radiusLineWidth={1}
                    />
                    <DrawButton disabled={isSpinning} label="SPIN" onClick={handleSpinClick} />
                </>
            )}
        </div>
    );
};

export default SpinningWheelLevel;