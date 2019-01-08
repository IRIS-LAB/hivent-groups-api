import * as groupsDAO from '../data/GroupsDAO';
import { BusinessException, ErrorDO } from 'iris-elements';

export const MAX_NAME_LENGTH = 100;
export const MAX_DESCRIPTION_LENGTH = 2000;

export const checkGroupBE = groupBE => {
  let errors = [];

  // name
	if (!groupBE.name) { 
		errors.push(new ErrorDO('name', 'group.name.required', 'Le nom est obligatoire.'));
	} else {
		if (groupBE.name.length > MAX_NAME_LENGTH) {
			errors.push(
				new ErrorDO('name', 'group.name.length', 'La longueur du nom ne doit pas dépasser ' + MAX_NAME_LENGTH + ' caractères.')
			);
		}
  }
  
  // description
	if (!groupBE.description) {
		errors.push(new ErrorDO('description', 'group.description.required', 'La description est obligatoire.'));
	} else {
		if (groupBE.description.length > MAX_DESCRIPTION_LENGTH) {
			errors.push(
				new ErrorDO('description', 'group.description.length', 'La longueur de la descrition ne doit pas dépasser ' + MAX_DESCRIPTION_LENGTH + ' caractères.')
			);
		}
  }

  // status
	if (!groupBE.status) {
		errors.push(new ErrorDO('status', 'group.status.unknown', 'Le statut est inconnu.'));
  }
  
  // selectionmode
	if (!groupBE.selectionmode) {
		errors.push(new ErrorDO('selectionmode', 'group.selectionmode.unknown', 'Le mode de sélection est inconnu.'));
  }
  
  // type
	if (!groupBE.type) {
		errors.push(new ErrorDO('type', 'group.type.unknown', 'Le type est inconnu.'));
  }
  
  // proposedDate
	if (!groupBE.proposedDate) {
		errors.push(new ErrorDO('proposedDate', 'group.proposedDate.invalid', 'La date proposée est incorrecte.'));
  }

  if ( errors.length > 0) {
    throw new BusinessException(errors);
  }

}

export const findGroups = async (name, status, type) => {
  return await groupsDAO.findGroups(name, status, type)
}

export const getGroup = async groupId => {
  return await groupsDAO.getGroup(groupId)
}

export const createGroup = async group => {
  console.log('GroupsLBS : ' + group )

  checkGroupBE(group);

  return await groupsDAO.createGroup(group)
}

export const updateGroup = async group => {
  if (!group.isValid) {
    throw new Error("Valeur obligatoire non renseigné" + group.name + " " + group.description + " " + group.status + " " + group.selectionmode + " " + group.type + " " + group.proposedDate )
  }
  return await groupsDAO.updateGroup(group)
}
