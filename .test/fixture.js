"use module"
import { makeImmediate} from "async-iter-immediate"

export const
  a= { a: 1},
  a2= { a: 1},
  a3= { a: 1},
  aChanged= { a: -1},
  b= { b: 2},
  b2= { b: 2},
  c= { c: 3},
  c2= { c: 3}

export let step= -1

// i thought step was supposed to be mutable but not working for my esm tests? adda  getter
export function getStep(){
	return step
}

export function * fixture(){
	step= 0
	yield a // yield a
	yield a

	// yield something that looks like a but is different
	step= 1
	yield a2

	step= 2
	yield b // first b
	yield a
	yield b

	step= 3
	yield b2

	step= 4
	yield c // yield c
	yield a
	yield b
	yield c
	yield a

	step= 5
	yield c2

	// for good measure, another value copy of a
	step= 6
	yield a3

	step= 7
	yield aChanged

	step= 8
	return 42
}
export async function * immediate(){
	yield* makeImmediate( fixture)()
}
export {
	fixture as default,
	fixture as Fixture,
	immediate as Immediate,
	immediate as immediateFixture,
	immediate as ImmediateFixture
}
