
import { GroupBE } from '../../objects/business/be/GroupBE'

exports.jsonToGroupBE = json => {
    
    let	group = new GroupBE(json)
	
	return group
}