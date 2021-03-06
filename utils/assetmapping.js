const mapping = type => {
  let file = '';
  switch (type.toLowerCase()) {
    case 'pushup': return require(`../assets/pushup.png`)
    case 'pullup': return require(`../assets/pullup.png`)
    case 'dips': return require(`../assets/dips.png`)
    case 'burpee': return require(`../assets/burpee.png`)
    case 'plank': return require(`../assets/plank.png`)
    case 'lunges': return require(`../assets/lunge.png`)

    case 'chest': return require(`../assets/benchpress.png`)
    case 'leg': return require(`../assets/legpress.png`)
    case 'shoulder': return require(`../assets/shoulderpress.png`)
    case 'back': return require(`../assets/deadlift.jpg`)
    case 'biceps': return require(`../assets/bicepscurl.png`)
    case 'triceps': return require(`../assets/kickback.png`)

    case 'bench press': return require(`../assets/benchpress.png`)
    case 'incline press': return require(`../assets/inclinepress.png`)
    case 'decline press': return require(`../assets/declinepress.png`)
    case 'pec deck': return require(`../assets/pecdeck.png`)
    case 'pull over': return require(`../assets/pullover.png`)
    case 'squat': return require(`../assets/squat.png`)
    case 'squat & press': return require(`../assets/legpress.png`)
    case 'static lunge': return require(`../assets/lunge.png`)
    case 'walking lunge': return require(`../assets/lunge.png`)
    case 'leg press': return require(`../assets/legpress.png`)
    case 'hamstring curl': return require(`../assets/hamstring.png`)
    case 'leg extension': return require(`../assets/legextension.png`)
    case 'shoulder press': return require(`../assets/shoulderpress.png`)
    case 'reverse fly': return require(`../assets/pecdeck.png`)
    case 'side rise': return require(`../assets/siderise.png`)
    case 'deadlift': return require(`../assets/deadlift.jpg`)
    case 't-bar row': return require(`../assets/t-bar-row.png`)
    case 'cable row': return require(`../assets/cable-row1.png`)
    case 'biceps curl': return require(`../assets/bicepscurl.png`)
    case 'hammer curl': return require(`../assets/bicepscurl.png`)
    case 'incline biceps curl': return require(`../assets/hammer-curl.png`)
    case 'ez-bar preacher curl': return require(`../assets/barbell-curl.png`)
    case 'kickback': return require(`../assets/kickback.png`)
    case 'triceps extension': return require(`../assets/triceps-extension.png`)
    case 'rope triceps pressdown': return require(`../assets/triceps-extension.png`)

    default: return require(`../assets/dumbbell.png`)
  }
};

export default mapping;
