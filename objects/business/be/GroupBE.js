import { GroupStatutEnum } from "./GroupStatusEnum";
import { GroupSelectionModeEnum } from "./GroupSelectionModeEnum";
import { GroupTypeEnum } from "./GroupTypeEnum";


export class GroupBE {

	constructor(name, description, proposedDate, openedDate, closedDate, capacity, pathimage, status, type, selectionMode) {
		this._name = name
        this._description = description
        
        try {
        if (proposedDate == null) {
            this._proposedDate = (new Date()).toLocaleString()
        } else {
            this._proposedDate = (new Date(proposedDate)).toLocaleString()
        }
        } catch (error) {

        }

        this._openedDate = openedDate
        this._closedDate = closedDate
        this._capacity = capacity
        this._pathimage = pathimage
       if (status in GroupStatutEnum) {
            this._status = status
        }
        if (selectionMode in GroupSelectionModeEnum) {
            this._selectionmode = selectionMode    
        }
        if (type in GroupTypeEnum) {
            this._type = type
        }
	}

	name() {
		return this._name
	}

	description() {
		return this._description
	}

	proposedDate() {	
		return this._proposedDate
    }
    openedDate() {
		return this._openedDate
	}
	closedDate() {
		return this._closedDate
	}
	pathimage() {
		return this._pathimage
	}

    isValid() {
        return (this._name != null)
                && (this._description != null)
                && (this._status != null)
                && (this._selectionmode != null)  
                && (this._type != null)
                && (this._proposedDate != null)
            
    }

}