"use module"
import tape from "tape"
import Expect from "async-iter-expect"

import ValueUnique from "../value.js"

import * as F from "./fixture.js"

const expected= [
	F.a,
	F.b,
	F.c,
	F.aChanged
]

tape( "value deduplicate", async function( t){
	const
	  valueUnique= new ValueUnique( F.fixture(), { notify: true}),
	  expect= new Expect( valueUnique, expected),
	  done= await expect
	t.equal( done.count, expected.length, "got all expected")
	t.end()
})
