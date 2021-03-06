const GARTER_BELT_TOY = createToy('Garter Belt');

function hasLingerieOn() {
    return PANTY_TOY.isToyOn() || BRA_TOY.isToyOn() || STOCKING_TOY.isToyOn() || GARTER_BELT_TOY.isToyOn();
}

function removeAllLingerie() {
    PANTY_TOY.removeToy();
    BRA_TOY.removeToy();
    STOCKING_TOY.removeToy();
    GARTER_BELT_TOY.removeToy();
}

function isLingeriePlayAllowed() {
    return PANTY_TOY.isPlayAllowed() || BRA_TOY.isPlayAllowed() || GARTER_BELT_TOY.isPlayAllowed() || STOCKING_TOY.isPlayAllowed();
}

function hasSomeLingerie() {
    return hasPanties() || hasBra() || hasGarterBelt() || hasStockings();
}

function hasPanties() {
    return PANTY_TOY.hasToy();
}

function hasBra() {
    return BRA_TOY.hasToy();
}

function hasGarterBelt() {
    let garterBeltFolder = getImageSubFolder('Toys' + PATH_SEPARATOR + 'Lingerie' + PATH_SEPARATOR + 'GarterBelt');
    return garterBeltFolder.listFiles().length > 0 && GARTER_BELT_TOY.hasToy();
}

function hasStockings() {
    return STOCKING_TOY.hasToy();
}

function decideOutfit() {
    let lines = new java.util.ArrayList();

    let pickSkirt = isChance(50) && SKIRT_TOY.hasToy();

    let pickTrousers = !pickSkirt && TROUSER_TOY.hasToy();

    //If no trousers and decided against skirt we force skirt if we own one
    if(!pickTrousers && !pickSkirt && SKIRT_TOY.hasToy()) {
        pickSkirt = true;
    }


    let pickBra = BRA_TOY.hasToy();

    let skipPanties = pickSkirt && feelsLikeTeasing();
    let pickPanties = PANTY_TOY.hasToy() && !skipPanties;

    let pickStockings = (isChance(50) || pickSkirt && isChance(80)) && STOCKING_TOY.hasToy();

    let highHeel = feelsLikePunishingSlave() && HIGH_HEEL_TOY.hasToy();



    if(pickSkirt) {
        let skirt = SKIRT_TOY.getRandom();

        lines.add('Put on your ' + skirt.getName() + ' <showImage=' + skirt.getImagePath() + '>');
    } else if(pickTrousers) {
        let trouser = TROUSER_TOY.getRandom();

        lines.add('Put on your ' + trouser.getName() + ' <showImage=' + trouser.getImagePath() + '>');
    } else {
        lines.add('Go with whatever trousers you have');
    }

    if(pickStockings) {
        let stockings = STOCKING_TOY.getRandom();

        lines.add('Put on your ' + stockings.getName() + ' <showImage=' + stockings.getImagePath() + '>');

        if(feelsLikeTeasing() && GARTER_BELT_TOY.hasToy()) {
            lines.add('Put on a garter belt alongside those stockings');
        }
    }

    if(pickPanties) {
        let panty = PANTY_TOY.getRandom();

        lines.add('Put on your ' + panty.getName() + ' <showImage=' + panty.getImagePath() + '>');
    } else if(skipPanties) {
        lines.add('No underwear for you today');

        if(pickSkirt) {
            lines.add('You\'ll have to wear that skirt with your %Cock% freely exposed between your legs')
        }
    }

    if(pickBra) {
        let bra = BRA_TOY.getRandom();

        lines.add('Put on your ' + bra.getName() + ' <showImage=' + bra.getImagePath() + '>');
    }

    let tops = getDailyWearTops();

    if(tops.length > 0) {
        let top = random(tops);
        lines.add('Put on your ' + top.getName() + ' <showImage=' + top.getImagePath() + '>');
    }

    if(highHeel) {
        let heel = HIGH_HEEL_TOY.getRandom();

        lines.add('Put on your ' + heel.getName() + ' <showImage=' + heel.getImagePath() + '>');

        if(feelsLikePunishingSlave() && HIGH_HEEL_LOCK.hasToy()) {
            lines.add('Furthermore lock yourself to the heels with your high heel locks %Grin%');
        }
    }

    return lines;
}



function decideNightwear(includePanty = false) {
    let lines = new java.util.ArrayList();

    let tops = getNightwearTops();

    //TODO: Consider buttplug or bondage

    if(tops.length > 0) {
        let top = random(tops);
        lines.add('Put on your ' + top.getName() + ' <showImage=' + top.getImagePath() + '>');
    }

    if(includePanty) {
        let panty = PANTY_TOY.getRandom();
        lines.add('Put on your ' + panty.getName() + ' <showImage=' + panty.getImagePath() + '>');
    }

    if(isChance(25)) {
        let sock = STOCKING_TOY.getToysOfType('striped');
        lines.add('Put on your ' + sock.getName() + ' <showImage=' + sock.getImagePath() + '>');
    }

    return lines;
}

function putOnLingerie() {
    let attachedToys = [];

    //Skip if lingerie already on
    if (hasLingerieOn()) {
        return attachedToys;
    } else if (!hasSomeLingerie()) {
        return attachedToys;
    }

    sendMessageBasedOnSender("%SlaveName%");
    sendMessageBasedOnSender(random("I want you to wear", "Go ahead and put on", "I need you to put on", "Go ahead and put on", "I need you to put on"));

    let accessories = [];
    let tries = 0;

    while (accessories.length === 0 && tries < 20) {
        if (hasPanties() && isChance(80)) {
            accessories.push(0);
        }

        if (hasBra() && isChance(80)) {
            accessories.push(1);
        }

        if (hasGarterBelt() && isChance(50)) {
            accessories.push(2);
        }

        if (hasStockings() && isChance(50)) {
            accessories.push(3);
        }

        tries++;
    }

    //TODO: Store what lingerie is on right now so have some variety

    if (accessories.indexOf(0) !== -1) {
        sendMessageBasedOnSender('These panties', 0);
        showImage('Images/Spicy/Toys/Lingerie/Panties/*.jpg', 5);
        PANTY_TOY.setToyOn(true);
        attachedToys.push(PANTY_TOY);
    }

    if (accessories.indexOf(1) !== -1) {
        sendMessageBasedOnSender('This bra', 0);
        showImage('Images/Spicy/Toys/Lingerie/Bra/*.jpg', 5);
        BRA_TOY.setToyOn(true);
        attachedToys.push(BRA_TOY);
    }

    if (accessories.indexOf(2) !== -1) {
        sendMessageBasedOnSender('This garter belt', 0);
        showImage('Images/Spicy/Toys/Lingerie/GarterBelt/*.jpg', 5);
        GARTER_BELT_TOY.setToyOn(true);
        attachedToys.push(GARTER_BELT_TOY);
    }

    if (accessories.indexOf(3) !== -1) {
        sendMessageBasedOnSender('These stockings', 0);
        showImage('Images/Spicy/Toys/Lingerie/Stockings/*.jpg', 5);
        STOCKING_TOY.setToyOn(true);
        attachedToys.push(STOCKING_TOY);
    }

    sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
    //Might take long to dress up
    waitForDone(10000000);

    return attachedToys;
}