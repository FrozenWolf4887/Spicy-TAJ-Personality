function getTodaysSlaveTask() {
    if (isVar(VARIABLE.SLAVE_TASK_SET) && getDate(VARIABLE.SLAVE_TASK_SET).sameDay(setDate())) {
        return getVar(VARIABLE.SLAVE_TASK_TODAY);
    }


    let lines = new java.util.ArrayList();
    lines.add('Good Morning %SlaveName%');

    switch(randomInteger(0, 23)) {
        case 0:
            var randomMeal = random('dinner', 'lunch', 'breakfast');
            lines.add('For ' + randomMeal + ' today I want you to put on a blindfold while standing in front of your closed fridge');
            lines.add('Then you are going to open it and what ever you grab first will be your ' + randomMeal + ' for today');
            lines.add('If there is something you can mix that ingredient with that\'s fine but it must make for at least 50% of your meal');
            lines.add('If your fridge is bare, I guess you will be hungry.');
            break;
        case 1:
            lines.add('Today I want you to only eat food that follows that starts with the first letter of your name');
            lines.add('That is ' + replaceVocab('%SubName%').substr(0, 1) + ' to be precise');
            break;
        case 2:
            lines.add('Today I want you to only eat red food');
            break;
        case 3:
            lines.add('Today I want you to stand whenever you are eating');

            if(HIGH_HEEL_TOY.hasToy() && feelsLikePunishingSlave()) {
                lines.add('Go ahead and wear your ' + getRandomHighHeel().name + ' while eating too');
            }

            break;
        case 4:
            lines.add('Today I want you to only eat food that you prepare yourself - no take out, restaurants...');
            break;
        case 5:
            lines.add('Today every meal you eat has to consist of protein, vegetables and dessert');
            break;
        case 6:
            lines.add('Today I want you to only eat food that requires no chewing');
            break;
        case 7:
            if(SISSY_LIMIT.isAllowed()) {
                lines.add('Today I want you to fall asleep listening to sissy hypno');
            } else {
                lines.add('Today I want you to fall asleep listening to some sort of BDSM/Femdom hypno');
            }
            break;
        case 8:
            if(SISSY_LIMIT.isAllowed()) {
                lines.add('Today I want you to fall asleep listening to sissy hypno');
            } else {
                lines.add('Today I want you to fall asleep listening to some sort of BDSM/Femdom hypno');
            }
            break;
        case 9:
            lines.add('Today you are gonna have dinner for breakfast, breakfast for lunch, lunch for dinner');
            break;
        case 10:
            lines.add('No carbs in your food today');
            break;
        case 11:
            var porntype = getRandomAllowedPornCategory();

            //Higher chance for hypno if sissy limit is allowed
            if(SISSY_LIMIT.isAllowed() && isChance(75)) {
                lines.add('I want you to watch ' + PORN_CATEGORY.SISSY_HYPNO.name + ' for ' + random(30, 45, 60) + ' minutes while not touching');
            } else {
                lines.add('I want you to watch ' + porntype.name + ' porn for ' + random(30, 45, 60) + ' minutes while not touching');
            }

            break;
        case 12:
            lines.add('Leave your phone in a different room before going to bed. You may look at your phone again at the next morning after you\'ve brushed your teeth');
            break;
        case 13:
            lines.add('Take a cold shower before starting your day');
            break;
        case 14:
            lines.add('You will have to say yes to any request today with a smile and follow through');
            break;
        case 15:
            lines.add('Go to bed an our earlier than usual');
            break;
        case 16:
            lines.add('You will have to say yes to any request today with a smile and follow through');
            break;
        case 17:
            lines.add('I don\'t care what kind or how you eat your food today. But if it\'s not cereal, it\'s not on the food menu');
            break;
        case 18:
            lines.add('You may only pee at the top of the hour');
            break;
        case 19:
            lines.add('You must jog instead of walk for the rest of the day');
            break;
        case 20:
            lines.add('You must hop instead of walk for the rest of the day whenever you are home');
            break;
        case 21:
            lines.add('Sleeping in is my privilege not yours so your alarm tomorrow will not go off later than 8am');
            break;
        case 22:
            lines.add('Your lunch must be all red and orange');
            break;
        case 23:
            lines.add('No coffee today. Tea should take the place of coffee today');
            break;
    }


    //Today also punishment tasks
    if (feelsLikePunishingSlave()) {
        lines.add('%InAddition% ' + random('since I am in the mood for some punishment', 'since I feel like a punishment is in place', 'since I feel like punishing you', 'since you\'ve infuriated me',
            'since you\'ve pissed me off'));
        switch(randomInteger(0, 11)) {
            case 0:
                lines.add('Today I want you to stay on all fours for ' + getDailyTaskTime() + ' minutes');
                lines.add('And...');
                lines.add('To complicated it further I want you to tie your balls to your big toes %Grin%');
                lines.add('For that you will go down on all fours and then start to tie your balls to your big toes');
                lines.add('When moving around it should put an uncomfortable amount of stretch on your balls');
                break;
            case 1:
                lines.add('Today I want you to sleep on the floor. Pillow only %SlaveName%!');
                break;
            case 2:
                lines.add('Today I want you to sleep on the floor. Pillow and blanket allowed %SlaveName%!');
                break;
            case 3:
                lines.add('Today I want you to sleep without a pillow %SlaveName%!');
                break;
            case 4:
                lines.add('No use of furniture today. Spend the day/evening standing or sitting on the floor');
                break;
            case 5:
                lines.add('Today there is no TV, movies or video games. No YouTube videos. No Porn. Audio is okay.');
                break;
            case 6:
                if(ANAL_LIMIT.isAllowed() && getVar(VARIABLE.ASS_LEVEL) >= 30 && BUTTPLUG_TOY.hasToy() && buttplugs.length > 2) {
                    lines.add('Today I want you to start of by wearing a small or the smallest buttplug of your choice');

                    if(isChance(50)) {
                        lines.add('Then I want you to swap your buttplug for a bigger one every 90 minutes');
                    } else {
                        lines.add('Whenever you are using the bathroom you will have to swap the plug for a bigger one');
                    }

                    lines.add('You will have to sleep with whatever you end up with');
                    lines.add('You can remove the plug at the next morning');

                    if(ASM_LIMIT.isAllowed()) {
                        lines.add('Don\'t forget to properly clean each of the toys after its usage using your dirty mouth %SlaveNameSmiley%');
                    }

                    break;
                }

                //Fallthrough
            case 7:
                if(CBT_LIMIT.isAllowed()) {
                    lines.add('I want you to add toothpaste on %MyYour% cock\'s head before going to bed');
                    break;
                }
                //Fallthrough
            case 8:
                lines.add('Put your pillow in your fridge when you wake up and sleep on it that night');
                break;
            case 9:
                lines.add('Today you will spent ' + getDailyTaskTime() + ' minutes being my pet');
                lines.add('During that time the following rules are in place');
                lines.add('Only crawl on all fours');
                lines.add('No wearing any human clothes');
                lines.add('No human entertainment. You may only watch videos of other pets playing');
                lines.add('No usage of the human toilet. Use your bathtub or a container of some sort');

                lines.add('%InAddition%...');

                var possibilities = [];

                if(hasButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.PIG_TAIL)) {
                    possibilities.push(getButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.PIG_TAIL));
                } else if(hasButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.FLUFFY_TAIL)) {
                    possibilities.push(getButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.FLUFFY_TAIL));
                }

                if(possibilities.length !== 0) {
                    var buttplug = random(possibilities);

                    if (buttplug.baseStyle === BUTTPLUG_BASE_STYLE.PIG_TAIL) {
                        lines.add('For that I will turn you into a cute little pig %SlaveName%');
                        lines.add('You are gonna wear your ' + buttplug.name);
                    } else {
                        lines.add('For that I will turn you into a cute little animal %SlaveName%');
                        lines.add('You are gonna wear your ' + buttplug.name);
                    }

                    lines.add('%InAddition%...');
                }

                if(NOSE_HOOK.hasToy() && NOSE_HOOK.isPunishmentAllowed()) {
                    lines.add('Put on the nose hook');
                    lines.add('%InAddition%...');
                }

                if(GAG_TYPE_BALL_GAG.hasToy() && GAG_TYPE_BALL_GAG.isPunishmentAllowed()) {
                    lines.add('Pets don\'t talk do they?');
                    lines.add('That is why you will be wearing your ball gag');
                    lines.add('%InAddition%...');
                }

                if(COLLAR_TOY.hasToy() && COLLAR_TOY.isPunishmentAllowed()) {
                    lines.add('Wear your collar with a leash attached to it');
                    lines.add('%InAddition%...');
                }

                lines.add('Apart of that time I want you to do the following:');
                lines.add('For the night you will be sleeping on the floor. Use blankets, a pillow and or a pet bed');
                lines.add('You will also only be allowed to eat and drink from a bowl on the floor for the whole day');
                lines.add('In the evening and morning I want you to additionally spend at least 15 minutes playing fetch with a ball');
                lines.add('The rules from above also apply to this time frame');
                lines.add('Additionally in the evening you will be waiting not less 20 minutes in the front of your door for your %DomHonorific% to come home');
                lines.add('Same as for your play time the rules from above also apply to this time frame');
                break;
            case 10:
                lines.add('Take a humiliating photo of yourself and use it as your phone wallpaper and lock screen for the rest of the day');
                break;
            case 11:
                lines.add('I want you to cover your nipples in wax thrice today at different times');

                if(!isFullSizedChastityOn()) {
                    lines.add('Do the same to %MyYour% %balls%');
                }

                break;
        }
    }


    //Special Tasks
    //Edge, edge and more edge between 6 and midnight.  No cumming, and any precum must be licked clean


    setVar(VARIABLE.SLAVE_TASK_TODAY, lines);
    setDate(VARIABLE.SLAVE_TASK_SET);

    return lines;
}

function getDailyTaskTime(multiplier = 1) {
    return randomInteger(1 + getMood() + getStrictnessForCharacter(), getMood() + getStrictnessForCharacter() + 2)*30*multiplier;
}