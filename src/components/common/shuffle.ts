export const shuffleArray = <T>(array: T[]): T[] => {
    // Validate input type.
    if (!Array.isArray(array)) {
      throw new Error("Invalid input. Please provide a valid array.");
    }
    // Use Fisher-Yates algorithm for shuffling.
    const shuffledArray: T[] = [...array]; // Create a shallow copy to avoid modifying the original array.
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  