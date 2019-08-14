"use module"
import tape from "tape"
import Expect from "async-iter-expect"

import IdUnique from "../id.js"

import * as F from "./fixture.js"

const expected= [
	F.a,
	F.b,
	F.c,
	F.aChanged,
	F.a
]

tape( "id deduplicate", async function( t){
	const
	  idUnique= new IdUnique( F.fixture(), { notify: true}),
	  expect= new Expect( idUnique, expected),
	  done= await expect
	t.equal( done.count, expected.length, "got all expected")
	t.end()
})
