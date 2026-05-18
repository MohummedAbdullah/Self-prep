// export type Difficulty = 'easy' | 'medium' | 'hard';
// export type Importance = 'low' | 'medium' | 'high';

// export function difficultyRank(difficulty: Difficulty): number {
//   switch (difficulty) {
//     case 'hard':
//       return 0;
//     case 'medium':
//       return 1;
//     case 'easy':
//       return 2;
//   }
// }

// export function importanceRank(importance: Importance): number {
//   switch (importance) {
//     case 'high':
//       return 0;
//     case 'medium':
//       return 1;
//     case 'low':
//       return 2;
//   }
// }

// export function sortByDifficultyHardFirst<T extends { difficulty: Difficulty }>(
//   a: T,
//   b: T,
// ): number {
//   return difficultyRank(a.difficulty) - difficultyRank(b.difficulty);
// }

// export function sortByImportanceHardFirst<T extends { importance: Importance }>(
//   a: T,
//   b: T,
// ): number {
//   return importanceRank(a.importance) - importanceRank(b.importance);
// }

// export function sortTopicsHardFirst(a: unknown, b: unknown): number {
//   const aDifficulty = (a as { difficulty?: Difficulty } | null)?.difficulty;
//   const bDifficulty = (b as { difficulty?: Difficulty } | null)?.difficulty;
//   const aRank = aDifficulty ? difficultyRank(aDifficulty) : 1;
//   const bRank = bDifficulty ? difficultyRank(bDifficulty) : 1;
//   return aRank - bRank;
// }
/**
 * SORTING UTILITIES FOR LEARNING CONTENT
 * 
 * This module provides sorting functions for educational content (topics, questions, modules)
 * based on difficulty level and importance. The sorting strategy prioritizes harder/more
 * important content first (descending priority order).
 * 
 * RANKING SYSTEM:
 * - Lower rank number = Higher priority (appears first in sorted results)
 * - Rank 0: Highest priority (hard difficulty or high importance)
 * - Rank 1: Medium priority
 * - Rank 2: Lowest priority (easy difficulty or low importance)
 */

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Importance = 'low' | 'medium' | 'high';

/**
 * Converts a difficulty level to a numerical rank for sorting
 * 
 * @param difficulty - The difficulty level to rank
 * @returns number - Rank where lower = higher priority (hard:0, medium:1, easy:2)
 * 
 * @example
 * difficultyRank('hard')   // returns 0 (highest priority)
 * difficultyRank('medium') // returns 1
 * difficultyRank('easy')   // returns 2 (lowest priority)
 * 
 * @throws {Error} - Throws error if invalid difficulty is provided (defensive programming)
 */
export function difficultyRank(difficulty: Difficulty): number {
  // Defensive programming: validate input
  if (!difficulty) {
    throw new Error(`difficultyRank: Invalid difficulty value - ${difficulty}`);
  }

  switch (difficulty) {
    case 'hard':
      return 0; // Highest priority - hardest content first
    case 'medium':
      return 1; // Medium priority
    case 'easy':
      return 2; // Lowest priority - easiest content last
    default:
      // Exhaustive check with TypeScript's never type
      const exhaustiveCheck: never = difficulty;
      throw new Error(`difficultyRank: Unhandled difficulty case - ${exhaustiveCheck}`);
  }
}

/**
 * Converts an importance level to a numerical rank for sorting
 * 
 * @param importance - The importance level to rank
 * @returns number - Rank where lower = higher priority (high:0, medium:1, low:2)
 * 
 * @example
 * importanceRank('high')   // returns 0 (highest priority)
 * importanceRank('medium') // returns 1
 * importanceRank('low')    // returns 2 (lowest priority)
 * 
 * @throws {Error} - Throws error if invalid importance is provided
 */
export function importanceRank(importance: Importance): number {
  // Defensive programming: validate input
  if (!importance) {
    throw new Error(`importanceRank: Invalid importance value - ${importance}`);
  }

  switch (importance) {
    case 'high':
      return 0; // Highest priority - most important content first
    case 'medium':
      return 1; // Medium priority
    case 'low':
      return 2; // Lowest priority - least important content last
    default:
      const exhaustiveCheck: never = importance;
      throw new Error(`importanceRank: Unhandled importance case - ${exhaustiveCheck}`);
  }
}

/**
 * TYPE GUARDS: Helper functions to safely check if objects have required properties
 * These prevent runtime errors when dealing with optional or unknown data
 */

/**
 * Type guard to check if an object has a valid difficulty property
 * 
 * @param item - Any object to check
 * @returns boolean - True if item has a valid Difficulty property
 * 
 * @example
 * if (hasValidDifficulty(maybeTopic)) {
 *   // TypeScript now knows maybeTopic has difficulty property
 *   sortByDifficultyHardFirst(maybeTopic, anotherTopic);
 * }
 */
export function hasValidDifficulty(item: unknown): item is { difficulty: Difficulty } {
  return (
    item !== null &&
    typeof item === 'object' &&
    'difficulty' in item &&
    typeof (item as any).difficulty === 'string' &&
    ['easy', 'medium', 'hard'].includes((item as any).difficulty)
  );
}

/**
 * Type guard to check if an object has a valid importance property
 */
export function hasValidImportance(item: unknown): item is { importance: Importance } {
  return (
    item !== null &&
    typeof item === 'object' &&
    'importance' in item &&
    typeof (item as any).importance === 'string' &&
    ['low', 'medium', 'high'].includes((item as any).importance)
  );
}

/**
 * Sorts an array of items by difficulty with hardest (most difficult) items first
 * 
 * @template TItem - The type of item being sorted. Must have a 'difficulty' property
 * @param a - First item to compare
 * @param b - Second item to compare
 * @returns number - Negative if a should come before b, positive if b before a, 0 if equal
 * 
 * @throws {Error} - Throws error if either item is missing difficulty property
 * 
 * @example
 * const questions = [
 *   { text: "What is a variable?", difficulty: "easy" },
 *   { text: "Explain JWT structure", difficulty: "hard" },
 *   { text: "What is CORS?", difficulty: "medium" }
 * ];
 * const sorted = questions.sort(sortByDifficultyHardFirst);
 * // Result: hard question first, then medium, then easy
 * 
 * @note Use with Array.sort() method
 * @warning This function assumes both items have valid difficulty properties.
 *          For items with optional difficulty, use sortTopicsHardFirst instead.
 */
export function sortByDifficultyHardFirst<TItem extends { difficulty: Difficulty }>(
  a: TItem,
  b: TItem,
): number {
  // Defensive validation
  if (!a.difficulty || !b.difficulty) {
    throw new Error(
      `sortByDifficultyHardFirst: Missing difficulty property. ` +
      `a: ${JSON.stringify(a)}, b: ${JSON.stringify(b)}`
    );
  }

  const rankA = difficultyRank(a.difficulty);
  const rankB = difficultyRank(b.difficulty);
  
  // Return negative if a has higher priority (lower rank number)
  return rankA - rankB;
}

/**
 * Sorts an array of items by importance with highest importance items first
 * 
 * @template TItem - The type of item being sorted. Must have an 'importance' property
 * @param a - First item to compare
 * @param b - Second item to compare
 * @returns number - Negative if a should come before b, positive if b before a, 0 if equal
 * 
 * @example
 * const topics = [
 *   { name: "CORS", importance: "high" },
 *   { name: "WebSockets", importance: "medium" },
 *   { name: "Deprecated APIs", importance: "low" }
 * ];
 * const sorted = topics.sort(sortByImportanceHardFirst);
 * // Result: CORS first, then WebSockets, then Deprecated APIs
 * 
 * @note Despite the name "HardFirst", this actually sorts HIGH importance first
 * @see sortByDifficultyHardFirst for similar functionality with difficulty
 */
export function sortByImportanceHardFirst<TItem extends { importance: Importance }>(
  a: TItem,
  b: TItem,
): number {
  // Defensive validation
  if (!a.importance || !b.importance) {
    throw new Error(
      `sortByImportanceHardFirst: Missing importance property. ` +
      `a: ${JSON.stringify(a)}, b: ${JSON.stringify(b)}`
    );
  }

  const rankA = importanceRank(a.importance);
  const rankB = importanceRank(b.importance);
  
  return rankA - rankB;
}

/**
 * Sorts topics with optional difficulty, defaulting missing values to 'medium'
 * 
 * This is safer for partial data where some items might not have difficulty assigned yet.
 * Missing difficulty is treated as 'medium' (rank 1) - a conservative middle ground.
 * 
 * @template TItem - Content item with optional difficulty property
 * @param a - First topic to compare
 * @param b - Second topic to compare
 * @returns number - Negative if a should come before b, positive if b before a, 0 if equal
 * 
 * @example
 * const topics = [
 *   { name: "Basic JS" },  // No difficulty → defaults to medium
 *   { name: "Advanced Patterns", difficulty: "hard" },
 *   { name: "Intro", difficulty: "easy" }
 * ];
 * const sorted = topics.sort(sortTopicsHardFirst);
 * // Result: Advanced Patterns (hard), Basic JS (default medium), Intro (easy)
 * 
 * @edgecase When both items have missing difficulty, they maintain original relative order
 * @edgecase When one item has difficulty and other doesn't, the one with 'hard' comes first
 * @edgecase Invalid difficulty values default to medium as well
 * 
 * @see sortByDifficultyHardFirst for strict difficulty (throws on missing)
 */
export function sortTopicsHardFirst(a: unknown, b: unknown): number {
  const getSafeRank = (item: unknown): number => {
    const difficulty = (item as { difficulty?: unknown } | null)?.difficulty;
    if (typeof difficulty === 'string' && isValidDifficulty(difficulty)) {
      return difficultyRank(difficulty);
    }
    return 1; // Default to medium when missing/invalid
  };

  return getSafeRank(a) - getSafeRank(b);
}

/**
 * Helper function to validate difficulty strings
 * 
 * @param difficulty - String to validate as Difficulty type
 * @returns boolean - True if valid Difficulty value
 * 
 * @example
 * isValidDifficulty('hard')   // true
 * isValidDifficulty('extreme') // false
 */
function isValidDifficulty(difficulty: string): difficulty is Difficulty {
  return difficulty === 'easy' || difficulty === 'medium' || difficulty === 'hard';
}

/**
 * MULTI-CRITERIA SORTING: Sorts by difficulty first, then by importance
 * 
 * This provides more sophisticated sorting for content that has both attributes.
 * Perfect for interview questions that have both difficulty and importance ratings.
 * 
 * @template TItem - Content with optional difficulty and importance
 * @param a - First item to compare
 * @param b - Second item to compare
 * @returns number - Sorted by difficulty first (hardest), then importance (highest)
 * 
 * @example
 * const questions = [
 *   { text: "Q1", difficulty: "hard", importance: "low" },
 *   { text: "Q2", difficulty: "hard", importance: "high" },  // Same difficulty, higher importance
 *   { text: "Q3", difficulty: "easy", importance: "high" }
 * ];
 * const sorted = questions.sort(sortByDifficultyThenImportance);
 * // Result: Q2 (hard+high), Q1 (hard+low), Q3 (easy+high)
 * 
 * @edgecase Items with same difficulty are ordered by importance
 * @edgecase Missing difficulty defaults to medium, missing importance defaults to medium
 */
// export function sortByDifficultyThenImportance<TItem extends {
//   difficulty?: Difficulty;
//   importance?: Importance;
// }>(
//   a: TItem,
//   b: TItem,
// ): number {
//   // First criteria: Difficulty (hardest first)
//   const getDifficultyRank = (item: TItem): number => {
//     if (item.difficulty && isValidDifficulty(item.difficulty)) {
//       return difficultyRank(item.difficulty);
//     }
//     return 1; // Default to medium if missing or invalid
//   };

//   const difficultyDiff = getDifficultyRank(a) - getDifficultyRank(b);
  
//   // If difficulties are different, return the difference
//   if (difficultyDiff !== 0) {
//     return difficultyDiff;
//   }
  
//   // Second criteria: Importance (highest first)
//   const getImportanceRank = (item: TItem): number => {
//     if (item.importance) {
//       return importanceRank(item.importance);
//     }
//     return 1; // Default to medium if missing
//   };
  
//   return getImportanceRank(a) - getImportanceRank(b);
// }

/**
 * SAFE SORT WRAPPER: Handles arrays with potential undefined/null values
 * 
 * This higher-order function creates a safe sorting function that filters out invalid items
 * 
 * @template TItem - The type of items being sorted
 * @param sortFn - The sorting function to wrap
 * @returns A safe sorting function that handles edge cases
 * 
 * @example
 * const safeSort = createSafeSort(sortByDifficultyHardFirst);
 * const mixedArray = [null, topic1, undefined, topic2];
 * const sorted = mixedArray.sort(safeSort); // Filters null/undefined first
 * 
 * @edgecase null and undefined values are pushed to the end of the array
 * @edgecase Both null/undefined values maintain their relative order
 */
// export function createSafeSort<TItem>(
//   sortFn: (a: TItem, b: TItem) => number
// ): (a: TItem | null | undefined, b: TItem | null | undefined) => number {
//   return (a: TItem | null | undefined, b: TItem | null | undefined): number => {
//     // Handle null/undefined - push them to the end
//     if (a == null && b == null) return 0;  // Both invalid, keep order
//     if (a == null) return 1;  // a is null/undefined, comes after b
//     if (b == null) return -1; // b is null/undefined, a comes before b
    
//     // Both valid, use the provided sort function
//     return sortFn(a, b);
//   };
// }

/**
 * REVERSE SORT: Returns items in opposite order (easiest/least important first)
 * 
 * @template TItem - The type of items being sorted
 * @param sortFn - The sorting function to reverse
 * @returns A function that sorts in reverse order
 * 
 * @example
 * const easiestFirst = reverseSort(sortByDifficultyHardFirst);
 * const topics = [{ difficulty: "hard" }, { difficulty: "easy" }];
 * topics.sort(easiestFirst); // Easy first, then hard
 * 
 * @note Useful for toggling between "hard first" and "easy first" views
 */
// export function reverseSort<TItem>(
//   sortFn: (a: TItem, b: TItem) => number
// ): (a: TItem, b: TItem) => number {
//   return (a: TItem, b: TItem): number => {
//     // Swap arguments to reverse order
//     return sortFn(b, a);
//   };
// }

// ==================== USAGE EXAMPLES ====================

/**
 * Example 1: Basic sorting of interview questions
 */
// export function exampleBasicSorting(): void {
//   interface InterviewQuestion {
//     text: string;
//     difficulty: Difficulty;
//     importance: Importance;
//   }

//   const questions: InterviewQuestion[] = [
//     { text: "What is JavaScript closure?", difficulty: "hard", importance: "high" },
//     { text: "What is a variable?", difficulty: "easy", importance: "medium" },
//     { text: "Explain event loop", difficulty: "medium", importance: "high" },
//   ];

//   // Sort by difficulty only (hardest first)
//   const byDifficulty = [...questions].sort(sortByDifficultyHardFirst);
//   console.log(byDifficulty[0].text); // "What is JavaScript closure?" (hard)

//   // Sort by importance only (highest first)
//   const byImportance = [...questions].sort(sortByImportanceHardFirst);
//   console.log(byImportance[0].text); // "What is JavaScript closure?" or "Explain event loop" (both high importance)

//   // Sort by both (difficulty then importance)
//   const byBoth = [...questions].sort(sortByDifficultyThenImportance);
//   console.log(byBoth[0].text); // Hard + high importance first
// }

/**
 * Example 2: Handling missing data gracefully with sortTopicsHardFirst
 */
// export function exampleMissingData(): void {
//   interface PartialTopic {
//     name: string;
//     difficulty?: Difficulty;
//   }

//   const topics: PartialTopic[] = [
//     { name: "Advanced Patterns", difficulty: "hard" },
//     { name: "Basic Syntax" }, // Missing difficulty - defaults to medium
//     { name: "Introduction", difficulty: "easy" },
//     { name: null as any }, // Invalid item - also defaults to medium
//   ];

//   // Safe sorting - missing/invalid defaults to medium
//   const sorted = [...topics].sort(sortTopicsHardFirst);
//   console.log(sorted[0].name); // "Advanced Patterns" (hard)
//   console.log(sorted[1].name); // "Basic Syntax" (defaulted to medium) or null
//   console.log(sorted[2].name); // "Introduction" (easy)
// }

/**
 * Example 3: Safe sorting with null/undefined values using createSafeSort
 */
// export function exampleSafeSorting(): void {
//   interface Topic {
//     name: string;
//     difficulty: Difficulty;
//   }

//   const messyArray: (Topic | null | undefined)[] = [
//     null,
//     { name: "Hard Topic", difficulty: "hard" },
//     undefined,
//     { name: "Easy Topic", difficulty: "easy" },
//     { name: "Medium Topic", difficulty: "medium" },
//   ];

//   const safeSort = createSafeSort(sortByDifficultyHardFirst);
//   const cleaned = [...messyArray].sort(safeSort);
  
//   // Null/undefined are pushed to the end
//   console.log(cleaned[0]); // { name: "Hard Topic", difficulty: "hard" }
//   console.log(cleaned[1]); // { name: "Medium Topic", difficulty: "medium" }
//   console.log(cleaned[2]); // { name: "Easy Topic", difficulty: "easy" }
//   console.log(cleaned[3]); // null or undefined (at the end)
// }

/**
 * Example 4: Using reverseSort for opposite ordering
 */
// export function exampleReverseSorting(): void {
//   interface Topic {
//     name: string;
//     difficulty: Difficulty;
//   }

//   const topics: Topic[] = [
//     { name: "Hard Topic", difficulty: "hard" },
//     { name: "Medium Topic", difficulty: "medium" },
//     { name: "Easy Topic", difficulty: "easy" },
//   ];

//   // Normal: hard first
//   const hardFirst = [...topics].sort(sortByDifficultyHardFirst);
//   console.log(hardFirst[0].name); // "Hard Topic"
//   console.log(hardFirst[2].name); // "Easy Topic"

//   // Reversed: easy first
//   const easyFirst = [...topics].sort(reverseSort(sortByDifficultyHardFirst));
//   console.log(easyFirst[0].name); // "Easy Topic"
//   console.log(easyFirst[2].name); // "Hard Topic"
// }
