

// this script contains functions that determine the state and colors of a machine

// this function computes the state of E given the state of its parent variables,
// and the experimental condition

// the causal rules depend on the condition. 
// In the first condition, the E component is off (white) by default
// In the second condition, the E component is on (black) by default
// First condition: the causal rule is
// E := 0 v (A==2 v A==3)
// i.e. E's default value is 0, and (when A is wired) E is ON if A has value 2 or 3
// Second condition: the causal rule is
// E := 1 - (1-[A==2])
// i.e. E's default value is 1, and (when A is wired) E is ON if A has value 2


export const causalRule = (condition,
    AState, BState, CState,
    AWired, BWired, CWired) => {
    let output = condition === 1 ?
        (0 | AWired & (AState == 2 | AState==3)) :
        condition === 2 ?
            (1 - AWired*(1-(AState==1))) : NaN;
    return (output)
}



// this function maps states of the nodes to colors
export const giveColors = (AState, BState, CState, EState, colors) => {
    let Acolor = AState == 1 ? colors.A_one :
    AState == 2 ? colors.A_two :
    AState == 3 ? colors.A_three : NaN;
    let Bcolor = BState ? colors.Bon : colors.Boff;
    let Ccolor = CState ? colors.Con : colors.Coff;
    let Ecolor =
        (EState ? colors.Eon : colors.Eoff);
    return ([Acolor, Bcolor, Ccolor, Ecolor]);
}

