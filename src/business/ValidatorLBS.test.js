import * as groupsLBS from './GroupsLBS';
import { GroupBE } from '../objects/business/be/GroupBE';
import { GroupSelectionModeEnum } from '../objects/business/be/GroupSelectionModeEnum';
import { GroupStatusEnum } from '../objects/business/be/GroupStatusEnum';
import { GroupTypeEnum } from '../objects/business/be/GroupTypeEnum';
import { BusinessException } from '@ugieiris/iris-common';
import { checkGroupBE, checkNameGroupBE, checkDescriptionGroupBE, checkStatusGroupBE, checkSelectionModeGroupBE, checkTypeGroupBE, checkProposedDateGroupBE, checkOpenedDateGroupBE, checkClosedDateGroupBE } from './ValidatorLBS'

import { MAX_DESCRIPTION_LENGTH, MAX_NAME_LENGTH, GROUP_FORMAT_DATE } from '../objects/business/be/GroupBE'

const expectNoError = (groupCheck, functCheck ) => {
        let groupBE = new GroupBE(groupCheck);
        const errors = functCheck(groupBE)
        expect(errors).toHaveLength(0)
}


const expectOneError = (groupCheck, functCheck, errorCode, errorField ) => {
        let groupBE = new GroupBE(groupCheck);
        const errors = functCheck(groupBE)
        expect(errors).toHaveLength(1)
        expect(errors[0].errorCode).toBe(errorCode)
        expect(errors[0].errorField).toBe(errorField)
}


describe('ValidatorLBS', () => {
        describe('checkGroupBE', () => {

                it('Should not throw errors when the group is valid', () => {
                        let groupBE = new GroupBE({ "name": "name", "description": "description", "status": GroupStatusEnum.PROPOSED, "selectionMode": GroupSelectionModeEnum.RANDOM, "type": GroupTypeEnum.PROJECT, "proposedDate": "2019-06-01" });
                        let err = () => {
                                checkGroupBE(groupBE)
                        }
                        expect(err).not.toThrow()
                })

                it('Should throw an exception when event is invalid', () => {
                        let groupBE = new GroupBE({});
                        let err = () => {
                                checkGroupBE(groupBE)
                        }
                        expect(err).toThrow(BusinessException)

                })
        })

        describe('checkNameGroupBE', () => {

                it('Should not return errors when the name is known', () => {
                        expectNoError({ "name": "name"}, checkNameGroupBE)
                })

                it('Should return an error when the name is unknown', () => {
                        expectOneError({}, checkNameGroupBE, 'group.name.required', 'name')
                })
                
                it('Should return an error when the name is too long', () => {
                        expectOneError({"name":"A".repeat(MAX_NAME_LENGTH + 1)}, checkNameGroupBE, 'group.name.length', 'name')
                })
        })
        
        describe('checkDescriptionGroupBE', () => {

                it('Should not return errors when the description is known', () => {
                        expectNoError({ "description": "description"}, checkDescriptionGroupBE)
                })

                it('Should return an error when the description is unknown', () => {
                        expectOneError({}, checkDescriptionGroupBE, 'group.description.required', 'description')
                })
                
                it('Should return an error when the description is too long', () => {
                        expectOneError({"description":"A".repeat(MAX_DESCRIPTION_LENGTH + 1)}, checkDescriptionGroupBE, 'group.description.length', 'description')
                })
        })

        describe('checkstatusGroupBE', () => {

                it('Should not return errors when the status is valid', () => {
                        expectNoError({ "status": GroupStatusEnum.PROPOSED}, checkStatusGroupBE)
                })

                it('Should return an error when the status is unknown', () => {
                        expectOneError({}, checkStatusGroupBE, 'group.status.unknown', 'status')
                })
                
                it('Should return an error when the status is invalid', () => {
                        expectOneError({"status":"incorrect"}, checkStatusGroupBE, 'group.status.invalid', 'status')
                })
        })

        describe('checkSelectionModeGroupBE', () => {

                it('Should not return errors when the selection mode is known', () => {
                        expectNoError({ "selectionMode": GroupSelectionModeEnum.RANDOM}, checkSelectionModeGroupBE)
                })

                it('Should return an error when the selection mode is unknown', () => {
                        expectOneError({}, checkSelectionModeGroupBE, 'group.selectionmode.unknown', 'selectionmode')
                })
                
                it('Should return an error when the selection mode is invalid', () => {
                        expectOneError({"selectionMode":"incorrect"}, checkSelectionModeGroupBE, 'group.selectionmode.invalid', 'selectionmode')
                })
        })

        describe('checkTypeGroupBE', () => {

                it('Should not return errors when the type is known', () => {
                        expectNoError({ "type": GroupTypeEnum.PROJECT }, checkTypeGroupBE)
                })

                it('Should return an error when the type is unknown', () => {
                        expectOneError({}, checkTypeGroupBE, 'group.type.unknown', 'type')
                })
                
                it('Should return an error when the type is invalid', () => {
                        expectOneError({"type":"incorrect"}, checkTypeGroupBE, 'group.type.invalid', 'type')
                })
        })

        describe('checkProposedDateGroupBE', () => {

                it('Should not return errors when the proposed date is correct', () => {
                        expectNoError({ "proposedDate": "2020-01-01" }, checkProposedDateGroupBE)
                })

                it('Should return an error when the proposed date is invalid', () => {
                        expectOneError({ "proposedDate": "test" }, checkProposedDateGroupBE, 'group.proposedDate.invalid','proposedDate' )
                })

                it('Should return an error when the proposed date is unknown', () => {
                        expectOneError({}, checkProposedDateGroupBE, 'group.proposedDate.unknown', 'proposedDate')
                })
                
        })
        
        describe('checkOpenedDateGroupBE', () => {

                it('Should not return errors when the opened date is correct', () => {
                        expectNoError({ "openedDate": "2020-01-01" }, checkOpenedDateGroupBE)
                })

                it('Should return error when the opened date is invalid', () => {
                        expectOneError({ "openedDate": "test" }, checkOpenedDateGroupBE, 'group.openedDate.invalid','openedDate' )
                })

                it('Should not return an error when the opened date is unknown', () => {
                        expectNoError({}, checkOpenedDateGroupBE)
                })
                
        })

        describe('checkClosedDateGroupBE', () => {

                it('Should not return errors when the closeed date is correct', () => {
                        expectNoError({ "closedDate": "2020-01-01" }, checkClosedDateGroupBE)
                })

                it('Should return error when the closed date is invalid', () => {
                        expectOneError({ "closedDate": "test" }, checkClosedDateGroupBE, 'group.closedDate.invalid','closedDate' )
                })

                it('Should not return an error when the closed date is unknown', () => {
                        expectNoError({}, checkClosedDateGroupBE)
                })
                
        })


})