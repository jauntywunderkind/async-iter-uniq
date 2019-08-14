"use module"
import AsyncIterPersist from "async-iter-persist"

export class BaseAsyncIterUniq extends AsyncIterPersist{
	constructor( wrappedIterator, options){
		super( wrappedIterator, options)
		if( options){
			if( options.filter){
				this.wrappedFilter= options.filter
				delete this.filter
			}
			if( options.postFilter){
				this.postFilter= options.postFilter
			}
		}
	}
	has( value){
		throw new Error("Virtual method: implemented in subclasses")
	}
	filter( iter){
		if( !iter){ // precheck
			return
		}

		if( this.wrappedFilter){ // regular filter
			iter= this.wrappedFilter( iter)
		}
		if( !iter){
			return
		}
		if( iter.done){
			return iter
		}

		// deduplicate
		if( this.has( iter.value)){
			return
		}

		// post filter
		if( this.postFilter){
			iter= this.postFilter( iter)
		}
		if( !iter){
			return
		}

		return iter
	}

	push( item){
		if( this.markSet){
			this.markSet.add( item)
		}
		return super.push( item)
	}
}
export default BaseAsyncIterUniq
