const uuid = require('uuid');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCustomers', () => {
    let firstCustomerId,
        secondCustomerId,
        expectedCustomerId,
        expectedFirstCustomer,
        expectedSecondCustomer;

    beforeEach(() => {
        firstCustomerId = uuid.v4();
        secondCustomerId = uuid.v4();
        expectedFirstCustomerId = uuid.v4();
        expectedCustomerId = uuid.v4();

        expectedFirstCustomer = {
            customerId: FirstCustomerId,
        };
        expectedSecondCustomer = {
            customerId: SecondCustomerId,
        };
    });
    describe('selectCustomers', () => {
        it('should return all the customers', () => {
            const actualCustomers = selectCustomers();
            const [actualFirstCustomer, actualSecondCustomer] = actualCustomers.rows;
        
            expect(actualFirstCustomer).toEqual(expectedFirstCustomer);
            expect(actualSecondCustomer).toEqual(expectedSecondCustomer);
        });
    });
        
    describe('selectCustomerByCustomerId', () => {
        it('should return a specific customer by customerId', () => {
            const actualFirstCustomer = selectCustomerByCustomerId(firstCustomerId);
        
            expect(actualFirstCustomer).toEqual({
                'customer_id': expectedCustomerId
            });
        
            const actualSecondCustomer = selectCustomerByCustomerId(secondCustomerId);
        
            expect(actualSecondCustomer).toEqual({
                'customer_id': expectedCustomerId
            });
        });
    });
    
});