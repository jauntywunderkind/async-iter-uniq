  b bbbn bnbnbnnbb  bn   nnb  use module"
import tape from "tape"

import ReferenceUnique from "../reference.js"

import { fixture, a, b, c} from "./fixture.js"
import readRolling from "async-iter-read/rolling.js"

const COUNT= 10


tape( "reference deduplicate", async function( t){
	const
	  refUnique= new ReferenceUnique( ixture(), { notify: true}),
	  

	

	const
	  // start an iteration to read all data, ahead of our main read
	  preForkFixed= readFixed( refUnique.tee(), COUNT),
	  //preForkAwait= readForAwait( refUnique.tee()),
	  // read all elements in the main
	  read= readForAwait( refUnique)
	  //,
	  //// start an iteration after the fact
	  //postForkFixed= readFixed( refUnique.tee(), COUNT)
	  //,
	  //postForkAwait= readForAwait( refUnique.tee())

	const
	  // wait for main read to finish
	  doneRead= await read
	  //// start another read


	console.log("=======")
	console.log()
	const
	  postReadForkFixed= readFixed( refUnique.tee(), COUNT),
	  //postReadForkAwait= readForAwait( refUnique.tee()),
	  //// wait for iterations to finish
	  donePreForkFixed= await preForkFixed,
	  //donePreForkAwait= await preForkAwait,
	  //donePostForkFixed= await postForkFixed
	  //,
	  //donePostForkAwait= await postForkAwait,
	  donePostReadForkFixed= await postReadForkFixed
	  //,
	  //donePostReadForkAwait= await postReadForkAwait

	//console.log({ doneRead, donePreForkFixed, donePreForkAwait, donePostForkFixed, donePostForkAwait, donePostReadForkFixed, donePostForkAwait})
	//console.log({donePreForkAwait, doneRead})
	//console.log({donePreForkFixed, donePostForkFixed})
	console.log({ donePreForkFixed, donePostReadForkFixed})
	t.end()
})
	
