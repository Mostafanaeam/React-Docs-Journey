# Challenge 1: Complete the Gallery

This challenge involved fixing a crash in the sculpture gallery and adding navigation features.

## The Problem

The original code crashed when pressing "Next" on the last sculpture. This happened because:
1. The `index` state variable was incremented without checking the array length.
2. When `index` reached `sculptureList.length`, `sculptureList[index]` returned `undefined`.
3. Trying to access `sculpture.name` (or any property) on `undefined` threw a `TypeError`.

## The Solution

To fix the crash and enhance the gallery, the following changes were made:

### 1. Index Boundary Checking
We added logic to ensure the index stays within the valid range of the array (0 to length - 1).

```javascript
const hasNext = index < sculptureList.length - 1;
const hasPrev = index > 0;

function handleNextClick() {
  if (hasNext) {
    setIndex(index + 1);
  }
}

function handleBackClick() {
  if (hasPrev) {
    setIndex(index - 1);
  }
}
```

### 2. "Previous" Button
A new button was added to allow users to navigate to the previous sculpture.

### 3. User Experience Improvements
The "Next" and "Previous" buttons are now automatically disabled when they reach the end or start of the list, respectively. This provides immediate visual feedback to the user that they cannot click further.

```javascript
<button onClick={handleBackClick} disabled={!hasPrev}>
  Previous
</button>
<button onClick={handleNextClick} disabled={!hasNext}>
  Next
</button>
```

## How to Run
This component is imported and rendered in the main `App.jsx` file under the "Challenge 1" section.
