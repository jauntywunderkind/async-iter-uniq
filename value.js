"use module"
import BaseAsyncIterUnique from "./base.js"
import { ValueEqual} from "./equal.js"

/**
* Pass-through an async or sync iteration, de-duplicating by comparing each new item with all previous items via a deep-equal.
*/
export class ValueUnique extends BaseAsyncIterUnique{
	constructor( wrappedIterator, options){
		super( wrappedIterator, options)
		if( options){
			if( options.equal!== undefined){
				this.equal= options.equal
			}
		}
	}
	has( value){
		for( let existing of this.state){
			if( this.equal( value, existing)){
				return true
			}
		}
	}
}
ValueUnique.prototype.equal= ValueEqual
export default ValueUnique
