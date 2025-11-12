import { test, expect } from "vitest"
import { test, expect } from 'vitest'
import { findOdd,findEven } from "./exercise2_even_odd_prime.js";
import { sum, revers } from './sum.js'

test('adds 1 + 2', () => {
  expect(sum(1,2)).toBe(3)
})





test("even number  [4,3,5,6]is: ", () => {
  expect(findEven([3, 4, 5, 6])).toStrictEqual([4, 6]);
})


