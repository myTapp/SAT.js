function SAT(total) {
    if (typeof total == 'string') {
        total = Number(total);
    }
    var spl = total.toString().split(".");
    if (spl[1]) {
        var StringReference = spl[1];
        if (StringReference.length > 1) {
            var primaryNumber = Number(spl[0]);
            var firstDecimal = Number(StringReference[0]);
            var secondDecimal = Number(StringReference[1])
            var thirdDecimal = Number(StringReference[2])
            var fourthDecimal = Number(StringReference[3]);
            var fifithhDecimal = Number(StringReference[4]);
            
            if (thirdDecimal > 5) {
                if (secondDecimal == 9) {
                    secondDecimal = 0;
                    if (firstDecimal == 9) {
                        firstDecimal = 0;
                        primaryNumber++;
                    } else {
                        firstDecimal++;
                    }
                } else {
                    secondDecimal++;
                }
            }
            if (thirdDecimal == 5) {
                if (secondDecimal % 2 == 0) {
                    if (fourthDecimal != 0 && fourthDecimal) {
                        if (secondDecimal == 9) {
                            secondDecimal = 0;
                            if (firstDecimal == 9) {
                                firstDecimal = 0;
                                primaryNumber++;
                            } else {
                                firstDecimal++;
                            }
                        } else {
                            secondDecimal++;
                        }
                    } else {
                        if (fifithhDecimal == 9) {
                            secondDecimal++;
                        }
                    }
                } else {
                    if (secondDecimal == 9) {
                        secondDecimal = 0;
                        if (firstDecimal == 9) {
                            firstDecimal = 0;
                            primaryNumber++;
                        } else {
                            firstDecimal++;
                        }
                    } else {
                        secondDecimal++;
                    }
                }
            }
            if (thirdDecimal == 4) {
                if (fourthDecimal == 9) {
                    if (secondDecimal % 2 != 0) {
                        if (secondDecimal == 9) {
                            secondDecimal = 0;
                            if (firstDecimal == 9) {
                                firstDecimal = 0;
                                primaryNumber++;
                            } else {
                                firstDecimal++;
                            }
                        } else {
                            secondDecimal++;
                        }
                    }
                }
            }
            var finalValue = secondDecimal.toString();
            primaryNumber = primaryNumber.toString();
            var rounded = primaryNumber.concat('.', firstDecimal, finalValue);
            return Number(rounded)
        } else {
            return Number(total);
        }
    } else {
        return Number(total);
    }
}

export default SAT;
