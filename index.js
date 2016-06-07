import * as t from "babel-types"
import * as _quasilon from "quasilon"

import util from "util"

var quasilon= _quasilon.default()

export default function({ options }) {
	//var t = options.types
	return {
		visitor: {
			Program(path, file) {

				var returnIdentifiers= []
				for(var i= 0; i< path.node.body.length; ++i){
					var node= path.node.body[i]
					if(!t.isExpressionStatement(node)){
						continue
					}
					var uid= path.scope.generateUidIdentifier("notebook")
					returnIdentifiers.push(uid)
					var expressionized = quasilon`
						const ${uid} = ${node.expression}
					`
					path.node.body[i] = expressionized.ast.program.body[0]
				}

				var
				  arr= t.arrayExpression(returnIdentifiers),
				  val= quasilon`
					module.exports= function(){
						${path.node.body}
						return ${arr}
					}
					module.exports.default= module.exports`
				path.node.body= val.ast.program.body
			}
		}
	}
}
