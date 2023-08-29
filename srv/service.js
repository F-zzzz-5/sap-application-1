const cds = require('@sap/cds');

module.exports = cds.service.impl(function(srv) {
  
    // Define the entity from your model
    const { RecordService } = srv.entities;

    // Register READ event handler
    srv.on('READ', 'RecordService', async (req) => {
        const tx = cds.transaction(req);
      
        // Check if an ID is provided in the request
        if (req.params && req.params.ID !== undefined) {
            const id = req.params.ID;
            const record = await tx.run(cds.ql`SELECT from ${RecordService} where ID = ${id}`);
            
            if (record && Array.isArray(record) && record.length > 0) {
                return record[0];
            } else {
                req.reject(404, `Record with ID ${id} not found`);
                return;  // Explicitly return to end the function
            }
        } else {
            const records = await tx.run(cds.ql`SELECT from ${Records}`);
            return records;
        }
    });
});
