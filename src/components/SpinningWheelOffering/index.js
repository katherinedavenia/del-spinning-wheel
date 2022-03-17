import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import '../style.css';
import DrawButton from '../DrawButton';
import { useGetDataOffering } from './data';

const SpinningWheelOffering = ({ onSpinFinish, selectedCountry, selectedOffering, selectedEmployee }) => {
    const {
      countries,
      offerings,
      employees,
    } = useGetDataOffering();

  const [mustSpin, setMustSpin] = useState(false);

  const firstStep = !selectedCountry && !selectedOffering && !selectedEmployee;
  const secondStep = selectedCountry && !selectedOffering && !selectedEmployee;
  const thirdStep = selectedCountry && selectedOffering && !selectedEmployee;

  const dataOfferingsFiltered = offerings.filter(o => o.country === selectedCountry).map(o => ( { option: o.option, style: o.style } ))
  const dataEmployeesFiltered = employees.filter(e => e.offering === selectedOffering && e.country === selectedCountry).map(e => ( { option: e.option, style: e.style } ))


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

  const newPrizeNumber = Math.floor(Math.random() * countries.length);
  const newPrizeNumberOffering = Math.floor(Math.random() * dataOfferingsFiltered.length);
  const newPrizeNumberEmployee = Math.floor(Math.random() * dataEmployeesFiltered.length);
  
  const handleSpinClick = () => {
    setMustSpin(true);
    setIsSpinning(true);
  };

  return (
      <div>
            {firstStep &&
                <>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={newPrizeNumber}
                        data={countries}
                        onStopSpinning={() => {
                            setMustSpin(false)
                            onSpinFinish(countries[newPrizeNumber].option);
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
                        prizeNumber={newPrizeNumberOffering}
                        data={dataOfferingsFiltered}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            onSpinFinish(dataOfferingsFiltered[newPrizeNumberOffering].option);
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
                        prizeNumber={newPrizeNumberEmployee}
                        data={dataEmployeesFiltered}
                        onStopSpinning={() => {
                            setMustSpin(false);
                            onSpinFinish(dataEmployeesFiltered[newPrizeNumberEmployee].option);
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

export default SpinningWheelOffering;