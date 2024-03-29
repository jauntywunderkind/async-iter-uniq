"use module"
import BaseAsyncIterUnique from "./base.js"

/**
* Pass through an async or sync iteration, deduplicating, by using a WeakSet to store items that we've seen.
*/
export class ReferenceUnique extends BaseAsyncIterUnique{
	constructor( wrappedIterator, opts){
		super( wrappedIterator, opts)
		if( opts&& opts.filter){
			this[ filter]= opts.filter
			delete this.filter // back to using prototype
		}
	}
	push( newItem){
		this.weakSet.add( newItem)
		return super.push( newItem)
	}
	has( value){
		return this.weakSet.has( value)
	}
	clearState(){
		super.clearState()
		this.weakSet= new WeakSet()
	}
}
export default ReferenceUnique
