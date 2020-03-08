const uuid = require('uuid');

const {
    getAllCustomers,
    getCustomerByCustomerId
} = require('../../services/customer-service');

const {
    selectCustomers,
    selectCustomerByCustomerId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCustomers', () => {
    let expectedCustomerId,
        expectedFirstCustomer,
 

    beforeEach(() => {
        expectedFirstCustomerId = uuid.v4();
        expectedCustomerId = uuid.v4();

        expectedFirstCustomer = {
            customerId: FirstCustomerId,
        };
        
        expectedSecondCustomer = {
            customerId: SecondCustomerId,
        };

        selectCustomers.mockReturnValue({
            rows: [{
                'customer_id': expectedFirstCustomerId
            }]
        });

        selectCustomerByCustomerId.mockReturnValue({
            rows: [{
                'customer_id': expectedFirstCustomerId
            }]
        });
       
        selectFirstCustomer.mockReturnValue({
            rows: [{
                'customerFirst_id': expectedFirstCustomerId,
                'customer_id': expectedCustomerId
            }]
        });
    });



    it('should get all the customers', () => {
        const actualCustomer = getAllCustomers();

        expect(selectCustomers).toHaveBeenCalledTimes(1);

        expect(actualCustomers).toEqual([
            expectedFirstCustomer
        ]);
    });

    it('should get a customer by a specific customerId', () => {
        const actualCustomer = getCustomerByCustomertId(expectedFirstCustomerId);

        expect(selectCustomerByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCustomerByCustomerId).toHaveBeenCalledWith(expectedFirstCustomerId);

        expect(actualCustomer).toEqual(expectedFirstCustomer);
    });

});