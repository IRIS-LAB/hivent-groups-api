import { GroupStatusEnum } from "./GroupStatusEnum";
import { GroupSelectionModeEnum } from "./GroupSelectionModeEnum";
import { GroupTypeEnum } from "./GroupTypeEnum";

export const MAX_NAME_LENGTH = 100;
export const MAX_DESCRIPTION_LENGTH = 2000;

export const GROUP_FORMAT_DATE = "YYYY-MM-DD"

export class GroupBE {

	constructor(group) {
        this._id = group._id
		this.name = group.name
        this.description = group.description
        this.administrators = group.administrators
        this.members = group.members
        this.interested = group.interested
        
        this.proposedDate = group.proposedDate

        this.openedDate = group.openedDate
        this.closedDate = group.closedDate
        this.capacity = group.capacity
        this.pathimage = group.pathimage
        this.status = group.status
        
            this.selectionmode = group.selectionMode    
            this.type = group.type
    
    }

}