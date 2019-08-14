"use module"
import { makeImmediate} from "async-iter-immediate"

export const
  a= { a: 1, id: "a"},
  a2= { a: 1, id: "a"},
  aChanged= { a: 99, id: "a"},
  b= { b: 2, id: "b"},
  b2= { b: 2, id: "b"},
  c= { c: 3, id: "c"},
  c2= { c: 3, id: "c"}

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

	// change a
	yield aChanged

	// for good measure, re-emit earlier a's
	step= 7
	yield a
	yield a2
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
