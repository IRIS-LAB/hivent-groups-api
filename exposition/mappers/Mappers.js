
import { GroupBE } from '../../objects/business/be/GroupBE'

exports.jsonToGroupBE = json => {
    
    let	group = new GroupBE(json.id, json.name, json.description, json.proposedDate, json.openedDate, json.closedDate, json.capacity, json.athimage, json.status, json.type, json.selectionMode)
	
	return group
}