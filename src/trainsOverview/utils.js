function avgDelay(data) {
    const delaySum = data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.Meska;
    }, 0);
    return (delaySum / data.length).toFixed(2);
  }

export function prepareData(trains) {
    let earlyTrains = [];
    let onTimeTrains = [];
    let lateTrains = [];
  
    trains.forEach(train => {
      if (train.Meska < 0) {
        earlyTrains.push(train);
      } else if (train.Meska > 0) {
        lateTrains.push(train);
      } else {
        onTimeTrains.push(train);
      }
    });
  
    return {
      trains: { early: earlyTrains, onTime: onTimeTrains, late: lateTrains },
      count: trains.length,
      countDelayed: lateTrains.length,
      delayAvg: avgDelay(lateTrains),
      delayMin: Math.min(...lateTrains.map(train => train.Meska)),
      delayMax: Math.max(...lateTrains.map(train => train.Meska)),
      delayPercent: ((trains.length / 100) * lateTrains.length).toFixed(2)
    };
  }