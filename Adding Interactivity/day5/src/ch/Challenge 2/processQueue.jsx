export function getFinalState(baseState, queue) {
  let finalState = baseState;

for (let update of queue) {
    if (typeof update === 'function') {
      // TODO: apply the updater function
      finalState = update(finalState);
    } else {
      // TODO: replace the state
      finalState = update;
    }
  }

  return finalState;
}
