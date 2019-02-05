import { BusinessException, ErrorDO } from 'iris-common';
import { MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH, GROUP_FORMAT_DATE } from '../objects/business/be/GroupBE'
import moment  from 'moment'

import { GroupStatusEnum } from "../objects/business/be/GroupStatusEnum";
import { GroupSelectionModeEnum } from "../objects/business/be/GroupSelectionModeEnum";
import { GroupTypeEnum } from "../objects/business/be/GroupTypeEnum";

const checkFormatDate = date => {
    return moment(date, GROUP_FORMAT_DATE, true).isValid()
} 

export const checkGroupBE = groupBE => {
    let errors = [];

    errors = [
        ...checkNameGroupBE(groupBE),
        ...checkDescriptionGroupBE(groupBE),
        ...checkProposedDateGroupBE(groupBE),
        ...checkSelectionModeGroupBE(groupBE),
        ...checkStatusGroupBE(groupBE),
        ...checkTypeGroupBE(groupBE),
        ...checkOpenedDateGroupBE(groupBE),
        ...checkClosedDateGroupBE(groupBE)
    ]

    if (errors.length > 0) {
        throw new BusinessException(errors);
    }

}

// name
export const checkNameGroupBE = groupBE => {

    let errors = []

    if (!groupBE.name) {
        errors.push(new ErrorDO('name', 'group.name.required', 'Le nom est obligatoire.'));
    } else if (groupBE.name.length > MAX_NAME_LENGTH) {
        errors.push(
            new ErrorDO('name', 'group.name.length', 'La longueur du nom ne doit pas dépasser ' + MAX_NAME_LENGTH + ' caractères.')
        );
    }

    return errors
}


// description
export const checkDescriptionGroupBE = groupBE => {

    let errors = []


    if (!groupBE.description) {
        errors.push(new ErrorDO('description', 'group.description.required', 'La description est obligatoire.'));
    } else if (groupBE.description.length > MAX_DESCRIPTION_LENGTH) {
        errors.push(
            new ErrorDO('description', 'group.description.length', 'La longueur de la descrition ne doit pas dépasser ' + MAX_DESCRIPTION_LENGTH + ' caractères.')
        );
    }
    return errors
}


// status
export const checkStatusGroupBE = groupBE => {

    let errors = []

    if (!groupBE.status) {
        errors.push(new ErrorDO('status', 'group.status.unknown', 'Le statut est inconnu.'));
    } else if (!(groupBE.status in GroupStatusEnum )) {
        errors.push(new ErrorDO('status', 'group.status.invalid', 'Le statut est invalide.'));
    }
    return errors
}


// selectionmode
export const checkSelectionModeGroupBE = groupBE => {

    let errors = []

    if (!groupBE.selectionmode) {
        errors.push(new ErrorDO('selectionmode', 'group.selectionmode.unknown', 'Le mode de sélection est inconnu.'));
    } else if (!(groupBE.selectionmode in GroupSelectionModeEnum )) {
        errors.push(new ErrorDO('selectionmode', 'group.selectionmode.invalid', 'Le mode de sélection est invalide.'));
    }
    return errors
}


// type
export const checkTypeGroupBE = groupBE => {

    let errors = []

    if (!groupBE.type) {
        errors.push(new ErrorDO('type', 'group.type.unknown', 'Le type est inconnu.'));
    } else if (!(groupBE.type in GroupTypeEnum )) {
        errors.push(new ErrorDO('type', 'group.type.invalid', 'Le type est invalide.'));
    }
    return errors
}


// proposedDate
export const checkProposedDateGroupBE = groupBE => {

    let errors = []

    if (!groupBE.proposedDate) {
        errors.push(new ErrorDO('proposedDate', 'group.proposedDate.unknown', 'La date proposée est inconnue.'));
    } else if (!checkFormatDate(groupBE.proposedDate)) {
        errors.push(new ErrorDO('proposedDate', 'group.proposedDate.invalid', 'La date proposée est invalide.'));
    }
    return errors
}

// openedDate
export const checkOpenedDateGroupBE = groupBE => {

    let errors = []

    if (groupBE.openedDate &&  !checkFormatDate(groupBE.openedDate)) {
        errors.push(new ErrorDO('openedDate', 'group.openedDate.invalid', 'La date d\'ouverture est invalide.'));
    }
    return errors
}

// closedDate
export const checkClosedDateGroupBE = groupBE => {

    let errors = []

    if (groupBE.closedDate && !checkFormatDate(groupBE.closedDate)) {
        errors.push(new ErrorDO('closedDate', 'group.closedDate.invalid', 'La date de fermeture est invalide.'));
    }
    return errors
}
