"use module"
import tape from "tape"
import Expect from "async-iter-expect"

import ReferenceUnique from "../reference.js"

import * as F from "./fixture.js"

const expected= [
	F.a,
	F.a2,
	F.b,
	F.b2,
	F.c,
	F.c2,
	F.aChanged
]

tape( "reference deduplicate", async function( t){
	const
	  refUnique= new ReferenceUnique( F.fixture(), { notify: true}),
	  expect= new Expect( refUnique, expected),
	  done= await expect
	t.equal( done.count, expected.length, "got all expected")
	t.end()
})
