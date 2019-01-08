import * as groupsLBS from './GroupsLBS';
import { GroupBE } from '../objects/business/be/GroupBE';
import { GroupSelectionModeEnum } from '../objects/business/be/GroupSelectionModeEnum';
import { GroupStatusEnum } from '../objects/business/be/GroupStatusEnum';
import { GroupTypeEnum } from '../objects/business/be/GroupTypeEnum';
import { BusinessException } from 'iris-elements';

describe('checkGroupBE', () => {

    it('Should not throw errors when the group is valid', () => {
        let groupBE = new GroupBE({"name":"name", "description" : "description", "status": GroupStatusEnum.PROPOSED, "selectionMode":GroupSelectionModeEnum.RANDOM, "type" : GroupTypeEnum.PROJECT});
        expect(groupsLBS.checkGroupBE(groupBE)).not.toThrow(BusinessException);
	});
	it('Should return a throw errors when the group has several errors', () => {
        let groupBE = new GroupBE({});
        expect(groupsLBS.checkGroupBE(groupBE)).toThrow(BusinessException);
        
	});
});