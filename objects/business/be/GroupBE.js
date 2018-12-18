import { GroupStatutEnum } from "./GroupStatusEnum";
import { GroupSelectionModeEnum } from "./GroupSelectionModeEnum";
import { GroupTypeEnum } from "./GroupTypeEnum";


export class GroupBE {

	constructor(group) {
        this._id = group.id
		this._name = group.name
        this._description = group.description
        
        try {
            if (group.proposedDate == null) {
                this._proposedDate = (new Date()).toLocaleString()
            } else {
                this._proposedDate = (new Date(group.proposedDate)).toLocaleString()
            }  
        } catch (error) {

        }

        this._openedDate = group.openedDate
        this._closedDate = group.closedDate
        this._capacity = group.capacity
        this._pathimage = group.pathimage
       if (group.status in GroupStatutEnum) {
            this._status = group.status
        }
        if (group.selectionMode in GroupSelectionModeEnum) {
            this._selectionmode = group.selectionMode    
        }
        if (group.type in GroupTypeEnum) {
            this._type = group.type
        }
	}
    get id() {
        return this._id;
    }

	get name() {
		return this._name
	}

	get description() {
		return this._description
	}

	get proposedDate() {	
		return this._proposedDate
    }
    get openedDate() {
		return this._openedDate
	}
	get closedDate() {
		return this._closedDate
	}
	get pathimage() {
		return this._pathimage
	}

    get isValid() {
        return (this._name != null)
                && (this._description != null)
                && (this._status != null)
                && (this._selectionmode != null)  
                && (this._type != null)
                && (this._proposedDate != null)
            
    }

}