describe('Test transaction', function () {
    it('select and count', function (done) {
        var count;
        var transaction_query = {
            tables: ['Customers'],
            logic: function (data) {
                select({
                    from: 'Customers'
                }).then(function (results) {
                    setResult('customers', results);
                });

                count({
                    from: 'Customers'
                }).then(function (length) {
                    setResult('count', length);
                });
            }
        }
        Con.transaction(transaction_query).then(function (results) {
            expect(results.customers).to.be.an('array').length(results.count);
            done();
        }).catch(function (err) {
            done(err);
        })
    });

    // it('simple select', function (done) {
    //     var transaction_query = {
    //         tables: ['Customers'],
    //         data: {
    //             insertValues: [{
    //                 CustomerName: 'ujjwalfev gupta',
    //                 ContactName: 'ujjwadcvl',
    //                 Address: 'bhubaneswdfar odisha',
    //                 City: 'bhubaneswar',
    //                 PostalCode: '12345',
    //                 Country: 'BangKok'
    //             }]
    //         },
    //         logic: function (data) {
    //             insert({
    //                 into: 'Customers',
    //                 values: data.InsertValues
    //             });
    //             select({
    //                 from: 'Customers',
    //                 OnSuccess: function (results) {
    //                     this._results = results;
    //                 }
    //             })
    //         }
    //     }
    //     Con.transaction(transaction_query, function (results) {
    //         console.log(results);
    //     });
    // })
})