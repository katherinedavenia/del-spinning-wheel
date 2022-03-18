import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import '../style.css';
import DrawButton from '../DrawButton';
import { useGetDataLevel } from './data';

const SpinningWheelLevel = ({ onSpinFinish, selectedCountry, selectedLevel, selectedEmployee }) => {
    const {
        countries,
        levels,
        employees,
      } = useGetDataLevel();
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

  const [isSpinning, setIsSpinning] = useState(false);

  const prizeNumber = Math.floor(Math.random() * countries.length);
  const prizeNumberLevel = Math.floor(Math.random() * dataLevelsFiltered.length);
  const prizeNumberEmployee = Math.floor(Math.random() * dataEmployeesFiltered.length);
  
  const handleSpinClick = () => {
    setMustSpin(true);
    setIsSpinning(true);
  };

  const handleSpinResetClick = () => {
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
                            setIsSpinning(false);
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
                    <DrawButton disabled={isSpinning} label="SPIN" onClick={handleSpinResetClick} />
                </>
            )}
        </div>
    );
};

export default SpinningWheelLevel;