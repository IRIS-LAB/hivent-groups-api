import { GroupBE } from '../objects/business/be/GroupBE'
import * as groupsDAO from '../data/GroupsDAO'
import * as groupsLBS from './GroupsLBS'
import * as validatorLBS from './ValidatorLBS'
import { EntityNotFoundBusinessException } from '@ugieiris/iris-common';

describe('GroupsLBS', () => {
    let groupBE
  
    beforeAll(() => {
      groupBE = new GroupBE({
          "id" : 1
      })
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
  
    describe('createGroup', () => {
      groupsDAO.createGroup = jest.fn(() => groupBE)
      groupsDAO.getGroup = jest.fn(() => groupBE)
      
      it('should call the dao createGroup function', async () => {
        validatorLBS.checkGroupBE = jest.fn()

        let result = await groupsLBS.createGroup(groupBE)

        expect(groupsDAO.createGroup).toHaveBeenCalledTimes(1)
        expect(validatorLBS.checkGroupBE).toHaveBeenCalledTimes(1)
      })

      it('should throw error when validation is ko', async () => {
        validatorLBS.checkGroupBE = jest.fn(() => {throw new Error()})
        try {
            let result = await groupsLBS.createGroup(groupBE)
            expect(true).toBe(false) // not reachable if error
        } catch (error) {
            expect(groupsDAO.createGroup).toHaveBeenCalledTimes(0)
            expect(validatorLBS.checkGroupBE).toHaveBeenCalledTimes(1)
        }
      })
    })

    describe('updateGroup', () => {
        groupsDAO.updateGroup = jest.fn(() => groupBE)
        
        it('should call the dao updateGroup function', async () => {
          validatorLBS.checkGroupBE = jest.fn()
  
          let result = await groupsLBS.updateGroup(1, groupBE)
  
          expect(groupsDAO.updateGroup).toHaveBeenCalledTimes(1)
          expect(validatorLBS.checkGroupBE).toHaveBeenCalledTimes(1)
        })
  
        it('should throw error when validation is ko', async () => {
          validatorLBS.checkGroupBE = jest.fn(() => {throw new Error()})
          try {
              let result = await groupsLBS.updateGroup(1, groupBE)
              expect(true).toBe(false) // not reachable if error
          } catch (error) {
              expect(groupsDAO.updateGroup).toHaveBeenCalledTimes(0)
              expect(validatorLBS.checkGroupBE).toHaveBeenCalledTimes(1)
          }
        })
      })

    describe('getGroup', () => {

        it('should return the group', async () => {
            groupsDAO.getGroup = jest.fn(() => groupBE)

            let result = await groupsLBS.getGroup(groupBE.id)

            expect(result).toBe(groupBE)
        })

        it('should throw an error if group does not exist', async () => {
            groupsDAO.getGroup = jest.fn(() => undefined)

            try {
                let result = await groupsLBS.getGroup(groupBE.id)
                expect(true).toBe(false) // not reachable if error
            } catch (error) {
                expect(error instanceof EntityNotFoundBusinessException).toBe(true)
            }
        })

    })

  })