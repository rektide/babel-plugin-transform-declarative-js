import * as _ from 'lodash'
import * as glob_ from 'glob'
import * as promisify from 'es6-promisify'

var glob= promisify(glob_)

export function defaults(){
	return {
		engines: "MEDIA_ENGINES"
		context: _.defaults({}, process.env, {
				"MEDIA_ENGINES": "${HOME}/.config/media-engine/views/*.js:${CWD}/views/*.js"
		})
	}
}

export default function Finder( opts){
	opts= opts|| {}
	_.defaultsDeep( opts, defaults())
	var paths= opts.context[ opts.engines].split( /[^\]:/)

	var state= {}
	var loaded= new Promise( function( resolve){
		var loaded= paths.map(function( path){
			var matches= glob( path)
			if(!opts.oneshot){
				
			}
			return matches
		})
		return Promise.all(loaded).then(function(){})
	})

	var map={
		get: function( key){
			var current= state[ key]
			if( current!== undefined){
				return Promise.resolve( current)
			}
			return done.then( arguments.callee)
		}
	}
	return { map, loaded}
}
