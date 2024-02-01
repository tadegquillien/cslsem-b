// The goal of this file is to randomize the elements that need to be randomized once and 
// presented in the same order all throughout the experiment

// We need this because if we randomize an element within a component, the element will be re-randomized
// every time the component refresh. By creating the element here and then exporting it to the relevant
// component, we avoid this issue.

// we import the shuffle function which will allow us to randomize arrays
import { shuffle } from './convenienceFunctions';

//
// define the different machines that can be shown to participants
//

// A is in state 1
export const trialType1 = {
    AState: 1,
    BState: 0,
    CState: 0,
    AWired: 1,
    BWired: 0,
    CWired: 0
};

// A is in state 2
export const trialType2 = {
    AState: 2,
    BState: 0,
    CState: 0,
    AWired: 1,
    BWired: 0,
    CWired: 0
};

// Everything is unwired
export const trialType3 = {
    AState: 0,
    BState: 0,
    CState: 0,
    AWired: 0,
    BWired: 0,
    CWired: 0
}

// A is in state 3
export const trialType4 = {
    AState: 3,
    BState: 0,
    CState: 0,
    AWired: 1,
    BWired: 0,
    CWired: 0
}




export const trainingItems = shuffle([
    trialType1, trialType1, trialType1, trialType1, trialType1,
    trialType2, trialType2, trialType2, trialType2, trialType2,
    trialType3, trialType3, trialType3, trialType3, trialType3,
    trialType4, trialType4, trialType4, trialType4, trialType4
])

export const training2Items = trainingItems;

// put the test items together and export them
export const testItems = shuffle([trialType1, trialType2]);

// the condition (1 means that the baseline state of E is off, 
// 2 means that the baseline state of E is on)
export const conditions = shuffle([1, 2]);
// the shape of machines A and E
export const mode = shuffle(['diamond', 'circle']);

//
// declare the colors
//

// the colors we will assign to machine A
const mainColors = [shuffle(['black', 'turquoise', 'pink']), shuffle(['purple', 'green', 'blue'])];

// the first color set (for the first set of machines)
const colors = {
    A_one: mainColors[0][0],
    A_two: mainColors[0][1],
    A_three: mainColors[0][2],
    Bon: 'red',
    Boff: 'white',
    Con: 'green',
    Coff: 'white',
    Eon: 'orange',
    Eoff: 'white'
};

// the second color set (for the second set of machines)
const colors2 = {
    A_one: mainColors[1][0],
    A_two: mainColors[1][1],
    A_three: mainColors[1][2],
    Bon: 'red',
    Boff: 'white',
    Con: 'green',
    Coff: 'white',
    Eon: 'orange',
    Eoff: 'white'
};

// put the two color sets together, and randomize them
export const colorSets = shuffle([colors, colors2]);

// the order of the cause, allow, prevent, and mnd questions
// (they are randomized once per each participant, i.e. 
// they remain displayed on the same order for a given participant)
export const questionOrder = shuffle([0, 1, 2]);