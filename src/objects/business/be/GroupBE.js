import { GroupStatusEnum } from "./GroupStatusEnum";
import { GroupSelectionModeEnum } from "./GroupSelectionModeEnum";
import { GroupTypeEnum } from "./GroupTypeEnum";


export class GroupBE {

	constructor(group) {
        this._id = group._id
		this.name = group.name
        this.description = group.description
        this.administrators = group.administrators
        this.members = group.members
        this.interested = group.interested
        
        try {
            if (group.proposedDate == null) {
                this.proposedDate = (new Date()).toLocaleString()
            } else {
                this.proposedDate = (new Date(group.proposedDate)).toLocaleString()
            }  
        } catch (error) {

        }

        this.openedDate = group.openedDate
        this.closedDate = group.closedDate
        this.capacity = group.capacity
        this.pathimage = group.pathimage
       if (group.status in GroupStatusEnum) {
            this.status = group.status
        }
        if (group.selectionMode in GroupSelectionModeEnum) {
            this.selectionmode = group.selectionMode    
        }
        if (group.type in GroupTypeEnum) {
            this.type = group.type
        }
    }

}